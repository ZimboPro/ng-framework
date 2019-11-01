import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { __extends, __values, __spread } from 'tslib';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormService = /** @class */ (function () {
    function FormService() {
    }
    FormService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FormService.ctorParameters = function () { return []; };
    /** @nocollapse */ FormService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FormService_Factory() { return new FormService(); }, token: FormService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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
}(Validators));

var _a;
/** @type {?} */
var ValidatorsDict = (_a = {},
    _a[ValidatorType.required] = Validators.required,
    _a[ValidatorType.maxLength] = Validators.maxLength,
    _a[ValidatorType.minLength] = Validators.minLength,
    _a[ValidatorType.max] = Validators.max,
    _a[ValidatorType.min] = Validators.min,
    _a[ValidatorType.email] = Validators.email,
    _a[ValidatorType.pattern] = Validators.pattern,
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
}(FormControl));
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
var  /**
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
                if (element instanceof FormControl && element.invalid && element.enabled) {
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
                if ((element instanceof FormGroup || element instanceof FormArray) && element.invalid && element.enabled) {
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
}(FormGroup));
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
var  /**
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentBase, FormComponent, FormModule, FormService, LibFormControl, LibFormGroup, LibValidators, ValidatorType, ValidatorsDict };
//# sourceMappingURL=lib-form.js.map
