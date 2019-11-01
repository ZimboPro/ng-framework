(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@lib/form', ['exports', '@angular/core', '@angular/forms'], factory) :
    (global = global || self, factory((global.lib = global.lib || {}, global.lib.form = {}), global.ng.core, global.ng.forms));
}(this, (function (exports, core, forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService() {
        }
        FormService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () { return []; };
        /** @nocollapse */ FormService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormService_Factory() { return new FormService(); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormComponent = /** @class */ (function () {
        function FormComponent() {
        }
        /**
         * @return {?}
         */
        FormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-form',
                        template: "\n    <p>\n      form works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        FormComponent.ctorParameters = function () { return []; };
        return FormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        FormModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            FormComponent,
                        ],
                        imports: [],
                        exports: [
                            FormComponent
                        ]
                    },] }
        ];
        return FormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var ValidatorType = {
        required: 'required',
        maxLength: 'maxLength',
        minLength: 'minLength',
        max: 'max',
        min: 'min',
        email: 'email',
        pattern: 'pattern',
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibValidators = /** @class */ (function (_super) {
        __extends(LibValidators, _super);
        function LibValidators() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LibValidators;
    }(forms.Validators));

    var _a;
    /** @type {?} */
    var ValidatorsDict = (_a = {},
        _a[ValidatorType.required] = forms.Validators.required,
        _a[ValidatorType.maxLength] = forms.Validators.maxLength,
        _a[ValidatorType.minLength] = forms.Validators.minLength,
        _a[ValidatorType.max] = forms.Validators.max,
        _a[ValidatorType.min] = forms.Validators.min,
        _a[ValidatorType.email] = forms.Validators.email,
        _a[ValidatorType.pattern] = forms.Validators.pattern,
        _a);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LibFormControl = /** @class */ (function (_super) {
        __extends(LibFormControl, _super);
        function LibFormControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.validators = {};
            _this._keys = [];
            _this._validatorsCount = 0;
            return _this;
        }
        Object.defineProperty(LibFormControl.prototype, "appliedValidators", {
            get: /**
             * @return {?}
             */
            function () {
                return this._keys;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} type
         * @return {?}
         */
        LibFormControl.prototype.isValidatorTypeApplied = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            return this._keys.indexOf(type) !== -1;
        };
        /**
         * @private
         * @return {?}
         */
        LibFormControl.prototype._convertValidatorsToArray = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var validators = [];
            for (var validator in this.validators) {
                if (this.validators.hasOwnProperty(validator)) {
                    /** @type {?} */
                    var element = this.validators[validator];
                    validators.push(element);
                }
            }
            return validators;
        };
        /**
         * @private
         * @param {?=} added
         * @return {?}
         */
        LibFormControl.prototype._updateValidators = /**
         * @private
         * @param {?=} added
         * @return {?}
         */
        function (added) {
            if (added === void 0) { added = false; }
            if (added || this._validatorsCount !== this._keys.length) {
                /** @type {?} */
                var validators = this._convertValidatorsToArray();
                this.setValidators(validators);
                this.updateValueAndValidity();
            }
        };
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        LibFormControl.prototype._addValidatorTypes = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            if (this._keys.indexOf(type) === -1) {
                this._keys.push(type);
                this._validatorsCount = this._keys.length;
            }
        };
        /**
         * @private
         * @param {?} type
         * @return {?}
         */
        LibFormControl.prototype._removeValidatorType = /**
         * @private
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._keys = this._keys.filter((/**
             * @param {?} _type
             * @return {?}
             */
            function (_type) { return _type !== type; }));
        };
        /**
         * @param {?} type
         * @param {?} validator
         * @return {?}
         */
        LibFormControl.prototype.addValidator = /**
         * @param {?} type
         * @param {?} validator
         * @return {?}
         */
        function (type, validator) {
            this.validators[type] = validator;
            this._addValidatorTypes(type);
            this._updateValidators(true);
        };
        /**
         * @param {?} validators
         * @return {?}
         */
        LibFormControl.prototype.addValidators = /**
         * @param {?} validators
         * @return {?}
         */
        function (validators) {
            var e_1, _a;
            try {
                for (var validators_1 = __values(validators), validators_1_1 = validators_1.next(); !validators_1_1.done; validators_1_1 = validators_1.next()) {
                    var validator = validators_1_1.value;
                    this.validators[validator.type] = validator.validator;
                    this._addValidatorTypes(validator.type);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (validators_1_1 && !validators_1_1.done && (_a = validators_1.return)) _a.call(validators_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this._updateValidators(true);
        };
        /**
         * @return {?}
         */
        LibFormControl.prototype.setReadonly = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @return {?}
         */
        LibFormControl.prototype.setEditable = /**
         * @return {?}
         */
        function () {
        };
        /**
         * @param {?} type
         * @return {?}
         */
        LibFormControl.prototype.removeValidator = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            delete this.validators[type];
            this._removeValidatorType(type);
            this._updateValidators();
        };
        /**
         * @param {?} types
         * @return {?}
         */
        LibFormControl.prototype.removeValidators = /**
         * @param {?} types
         * @return {?}
         */
        function (types) {
            var e_2, _a;
            try {
                for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                    var type = types_1_1.value;
                    delete this.validators[type];
                    this._removeValidatorType(type);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            this._updateValidators();
        };
        /**
         * @return {?}
         */
        LibFormControl.prototype.clearValidators = /**
         * @return {?}
         */
        function () {
            this.validators = {};
            _super.prototype.clearValidators.call(this);
        };
        return LibFormControl;
    }(forms.FormControl));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        LibFormControl.prototype.validators;
        /**
         * @type {?}
         * @private
         */
        LibFormControl.prototype._keys;
        /**
         * @type {?}
         * @private
         */
        LibFormControl.prototype._validatorsCount;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function IControls() { }
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    LibFormGroup = /** @class */ (function (_super) {
        __extends(LibFormGroup, _super);
        function LibFormGroup(controls, validatorOrOpts, asyncValidator) {
            var _this = _super.call(this, (/** @type {?} */ (controls)), validatorOrOpts, asyncValidator) || this;
            _this.controls = (/** @type {?} */ (controls));
            return _this;
        }
        /**
         * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
         * The FormControls of sub FormGroups and FormArrays are not returned.
         */
        /**
         * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
         * The FormControls of sub FormGroups and FormArrays are not returned.
         * @return {?}
         */
        LibFormGroup.prototype.invalidControls = /**
         * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
         * The FormControls of sub FormGroups and FormArrays are not returned.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = [];
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element instanceof forms.FormControl && element.invalid && element.enabled) {
                        invalidControls.push(control);
                    }
                }
            }
            return invalidControls;
        };
        /**
         * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
         * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included.
         */
        /**
         * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
         * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included.
         * @return {?}
         */
        LibFormGroup.prototype.invalidFormGroups = /**
         * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
         * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = [];
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if ((element instanceof forms.FormGroup || element instanceof forms.FormArray) && element.invalid && element.enabled) {
                        invalidControls.push(control);
                    }
                }
            }
            return invalidControls;
        };
        /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included.
         */
        /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included.
         * @return {?}
         */
        LibFormGroup.prototype.invalidFormGroupsAndControls = /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = [];
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        invalidControls.push(control);
                    }
                }
            }
            return invalidControls;
        };
        /**
         * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormControls of sub FormGroups and FormArrays are included.
         */
        /**
         * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormControls of sub FormGroups and FormArrays are included.
         * @return {?}
         */
        LibFormGroup.prototype.allInvalidControls = /**
         * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormControls of sub FormGroups and FormArrays are included.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = [];
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        if (element instanceof LibFormGroup) {
                            /** @type {?} */
                            var invalid = element.allInvalidControls();
                            invalidControls.push.apply(invalidControls, __spread(invalid));
                        }
                        else {
                            invalidControls.push(control);
                        }
                    }
                }
            }
            return invalidControls;
        };
        /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included.
         */
        /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included.
         * @return {?}
         */
        LibFormGroup.prototype.allInvalidControlsAndGroups = /**
         * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
         * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var invalidControls = [];
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        if (element instanceof LibFormGroup) {
                            /** @type {?} */
                            var invalid = element.allInvalidControls();
                            invalidControls.push(control);
                            invalidControls.push.apply(invalidControls, __spread(invalid));
                        }
                        else {
                            invalidControls.push(control);
                        }
                    }
                }
            }
            return invalidControls;
        };
        /**
         * @return {?}
         */
        LibFormGroup.prototype.clearAllValidators = /**
         * @return {?}
         */
        function () {
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        if (element instanceof LibFormGroup) {
                            element.clearAllValidators();
                        }
                        else {
                            element.clearValidators();
                        }
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        LibFormGroup.prototype.clearAllValues = /**
         * @return {?}
         */
        function () {
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        if (element instanceof LibFormGroup) {
                            element.clearAllValidators();
                        }
                        else {
                            element.setValue(null);
                        }
                    }
                }
            }
        };
        /**
         * @return {?}
         */
        LibFormGroup.prototype.clearValuesAndValidators = /**
         * @return {?}
         */
        function () {
            for (var control in this.controls) {
                if (this.controls.hasOwnProperty(control)) {
                    /** @type {?} */
                    var element = this.controls[control];
                    if (element.invalid && element.enabled) {
                        if (element instanceof LibFormGroup) {
                            element.clearValuesAndValidators();
                        }
                        else {
                            element.setValue(null);
                            element.clearValidators();
                        }
                    }
                }
            }
        };
        return LibFormGroup;
    }(forms.FormGroup));
    if (false) {
        /** @type {?} */
        LibFormGroup.prototype.controls;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @template T
     */
    var   /**
     * @template T
     */
    ComponentBase = /** @class */ (function () {
        function ComponentBase(controlContainer) {
            this.controlContainer = controlContainer;
            this.subscriptions = [];
        }
        /**
         * @return {?}
         */
        ComponentBase.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.form = (/** @type {?} */ (this.controlContainer.control));
        };
        /**
         * @return {?}
         */
        ComponentBase.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            var e_1, _a;
            this.form.clearValuesAndValidators();
            try {
                for (var _b = __values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return ComponentBase;
    }());
    if (false) {
        /** @type {?} */
        ComponentBase.prototype.subscriptions;
        /** @type {?} */
        ComponentBase.prototype.form;
        /**
         * @type {?}
         * @private
         */
        ComponentBase.prototype.controlContainer;
    }

    exports.ComponentBase = ComponentBase;
    exports.FormComponent = FormComponent;
    exports.FormModule = FormModule;
    exports.FormService = FormService;
    exports.LibFormControl = LibFormControl;
    exports.LibFormGroup = LibFormGroup;
    exports.LibValidators = LibValidators;
    exports.ValidatorType = ValidatorType;
    exports.ValidatorsDict = ValidatorsDict;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=lib-form.umd.js.map
