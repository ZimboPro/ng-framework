/**
 * Properties
 */

const PATH = 'path';
const TYPE = 'type';
const FORMATTING = 'formatting';
const NESTED = 'nested';
const DEFAULT_VALUE = 'defaultvalue';
const REQUIRED = 'required';
const PATHS = 'paths';

/**
 * Types
 */

const BOOLEAN = Boolean;
const STRING = String;
const NUMBER = Number;
const DATE = Date;
const ARRAY = Array;
const OBJECT = Object;

/**
 * Key Words
 */

const KEY_WORD_ROOT = '$ROOT';
const KEY_WORD_ITEM = '$ITEM';
const KEY_WORD_EMPTY = '$EMPTY';

/**
 * Conf
 */
const PATH_DELIMITER = '.';

export const Constants = {
    PATH,
    PATHS,
    TYPE,
    FORMATTING,
    NESTED,
    DEFAULT_VALUE,
    REQUIRED,
    STRING,
    NUMBER,
    DATE,
    ARRAY,
    OBJECT,
    PATH_DELIMITER,
    PROPERTIES : [PATH, PATHS, TYPE, FORMATTING, NESTED, DEFAULT_VALUE, REQUIRED],
    TYPES : [BOOLEAN, STRING, NUMBER, DATE, ARRAY, OBJECT],
    KEY_WORD : {
        ROOT: KEY_WORD_ROOT,
        ITEM: KEY_WORD_ITEM,
        EMPTY: KEY_WORD_EMPTY,
        ALL: [
            KEY_WORD_ROOT,
            KEY_WORD_ITEM,
            KEY_WORD_EMPTY,
        ],
    }
};