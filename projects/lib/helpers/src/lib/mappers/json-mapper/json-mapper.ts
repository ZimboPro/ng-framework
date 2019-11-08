import * as _ from 'lodash';

import { Constants } from './constants';

export class MultiPath {
  path: string;
  value: any;
}

class Settings {
    path: string[];
    paths: string[];
    required: boolean;
    formatting: (val: any, index?: number) => any;
    defaultValue: any;
    type: any;
    nested: Settings;
}

export function hasValue(value: any) {
  return !_.isNil(value) && (!_.isEmpty(value) || typeof(value) === 'number');
}

export class JsonMapper {
  static getSettings(properties: object) {
    const settings: Settings = {
      path: null,
      paths: null,
      type: null,
      formatting: null,
      nested: null,
      defaultValue: undefined,
      required: true,
    };
    // console.log(properties);

    if (typeof(properties) === 'string') {
      const path = properties;
      properties = {};
      properties[Constants.PATH] = path;
    }

    for (const property in properties) {
      if (properties.hasOwnProperty(property)) {
        const value = properties[property];


        switch (property.toLowerCase()) {
          case Constants.PATH:
            if (!_.isString(value) && !property[Constants.PATHS]) {
              throw new Error('Invalid path: path is not a String');
            }
            settings.path = value.split(Constants.PATH_DELIMITER);
            break;
          case Constants.TYPE:
            if (value !== null && typeof value !== 'undefined') {
              if (!_.includes(Constants.TYPES, value)) {
                throw new Error('Invalid type ' + typeof value);
              }
              settings.type = value;
            }
            break;
          case Constants.FORMATTING:
            if (value !== null && typeof value !== 'undefined') {
              if (!_.isFunction(value) || _.includes(Constants.TYPES, value)) {
                throw new Error('Error formatting is not a function');
              }
              settings.formatting = value;
            }
            break;
          case Constants.NESTED:
            if (value !== null && typeof value !== 'undefined') {
              if (!_.isPlainObject(value)) {
                throw new Error('Error nested is not a object');
              }
              settings.nested = value;
            }
            break;
          case Constants.REQUIRED:
            if (value !== null && typeof value !== 'undefined') {
              if (!_.isBoolean(value)) {
                throw new Error('Error required is not a boolean');
              }
              settings.required = value;
            }
            break;
          case Constants.DEFAULT_VALUE:
            if (value !== null && typeof value !== 'undefined') {
              settings.defaultValue = value;
            }
            break;
          case Constants.PATHS:
            if (value !== null && typeof value !== 'undefined') {
              if (!_.isArray(value)) {
                throw new Error('Error paths is not an array');
              }
              settings.paths = value;
            }
            break;
          default:
            throw new Error('Invalid property ' + property);
          }
        } else {
          throw new Error('Invalid property ' + property);
        }
      }

    if (settings.path == null && settings.paths == null) {
        throw new Error('Path can\'t null');
      }

    if (settings.type !== null && settings.nested !== null && !_.includes([Constants.ARRAY, Constants.OBJECT], settings.type)) {
        throw new Error('Type must be an Array or an Object when nested property is filled');
      }
    // console.log(settings);
    return settings;
  }

  static getValue(from: object, settings: Settings, root: object) {
    let value = from;

    if ((!_.isObject(from) && !_.isArray(from)) || !_.isPlainObject(settings)) {
      return undefined;
    }

    if (settings.path && settings.path.length === 1 && settings.path[0].toUpperCase() === Constants.KEY_WORD.EMPTY) {
      return value;
    }

    if (settings.path && settings.path.length > 0 && settings.path[0].toUpperCase() === Constants.KEY_WORD.ROOT) {
      return this.parseProperties(root, {
        path: settings.path.slice(1).join(Constants.PATH_DELIMITER),
        type: settings.type,
        formatting: settings.formatting,
        nested: settings.nested,
        required: settings.required,
      }, root);
    }
    if (settings.path) {
      for (let i = 0; i !== settings.path.length; i++) {
        if (settings.path[i].toUpperCase() === Constants.KEY_WORD.ITEM) {
          // skip this iteration
        } else if (_.has(value, settings.path[i]) || (_.isObject(value) && !_.isUndefined(_.get(value, settings.path[i])))) {
          value = value[settings.path[i]];
        } else if (Array.isArray(value)) {
          let result = [];
          for (let j = 0; j !== value.length; j++) {
            const toto = (i === 0 && settings.path.length > 1) ?
                    settings.path.slice(1).join(Constants.PATH_DELIMITER) :
                    settings.path.slice(i).join(Constants.PATH_DELIMITER);
            const tmp = this.parseProperties(value[j], {
              path: toto,
              type: settings.type,
              formatting: settings.formatting,
              nested: settings.nested,
              required: settings.required,
            }, root, j);
            result = result.concat(tmp);
          }
          /**
           * nested and formatting fields have been solved in the recursivity
           */
          settings.nested = null;
          settings.formatting = null;
          return result.length > 0 ? result : undefined;
        } else if (!_.isUndefined(settings.defaultValue)) {
          return settings.defaultValue;
        } else if (settings.required === false) {
          return undefined;
        } else {
          // console.log(from);
          throw new Error('Invalid path ' + settings.path.join(Constants.PATH_DELIMITER) + ' (' + settings.path[i] + ')');
        }
      }
    }
    // console.log(settings, from);
    return value;
  }

  static parseProperties(from: object, properties: object, root: object, index?: number) {
    const settings = this.getSettings(properties);

    let value = this.getValue(from, settings, root);

    if (!_.isUndefined(value) && settings.nested !== null) {
      value = this.map(value, settings.nested, true, root);
    }

    /**
     * TODO: manage type
     */
    // console.log(settings);

    if (settings.paths != null && !settings.formatting) {
      throw new Error("The setting paths is available but no formattingMulti is set")
    } else if (settings.paths != null && settings.formatting != null) {
      const values: MultiPath[] = [];
      // console.log('paths', settings, from, root);
      settings.paths.forEach(path => {
        const paths = path.split(Constants.PATH_DELIMITER);
        const newSettings: Settings = {
            path : paths,
            required : settings.required,
            formatting : settings.formatting,
            defaultValue : settings.defaultValue,
            type : settings.type,
            nested : settings.nested,
            paths: null
          };

        const tempValue = this.getValue(from, newSettings, root);
        if (tempValue != null) {
          const temp: MultiPath = {
              path : path,
              value : tempValue
            };
          values.push(temp);
        }
      });
      value = settings.formatting(values, index);
    }

    if (settings.formatting != null && settings.paths == null) {
        value = settings.formatting(value, index);
    }

    if (!hasValue(value)) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.length > 0 ? value : undefined;
    }
    return value;
  }

  static map(from: object, template: object, isRecursive?: boolean, root?: object): {} {
    root = root || from;
    let ret: any;

    if (typeof from === 'undefined' || from === null
      || typeof template === 'undefined' || template === null) {
      return null;
    }
    if (Array.isArray(from)) {
      const to = [];
      for (let i = 0; i !== from.length; i++) {
        const tmp = {};
        for (const fieldName in template) {
          if (template.hasOwnProperty(fieldName)) {
            ret = this.parseProperties(from[i], template[fieldName], root, i);
            if (!_.isUndefined(ret)) {
              tmp[fieldName] = ret;
            }
          }
        }
        if (!_.isEmpty(tmp)) {
          to.push(tmp);
        }
      }
      return to.length > 0 ? to : undefined;
    } else {
      const to = {};
      for (const fieldName in template) {
        if (template.hasOwnProperty(fieldName)) {
          ret = this.parseProperties(from, template[fieldName], root);
          if (!_.isUndefined(ret)) {
            to[fieldName] = ret;
          }
        }
      }
      if (!_.isEmpty(to)) {
        return to;
      }
    }
    return (isRecursive) ? undefined : {};
  }
}
