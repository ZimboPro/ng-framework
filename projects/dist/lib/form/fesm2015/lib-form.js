import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormService {
    constructor() { }
}
FormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FormService.ctorParameters = () => [];
/** @nocollapse */ FormService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FormService_Factory() { return new FormService(); }, token: FormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-form',
                template: `
    <p>
      form works!
    </p>
  `
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ValidatorType = {
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
class LibValidators extends Validators {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ValidatorsDict = {
    [ValidatorType.required]: Validators.required,
    [ValidatorType.maxLength]: Validators.maxLength,
    [ValidatorType.minLength]: Validators.minLength,
    [ValidatorType.max]: Validators.max,
    [ValidatorType.min]: Validators.min,
    [ValidatorType.email]: Validators.email,
    [ValidatorType.pattern]: Validators.pattern,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LibFormControl extends FormControl {
    constructor() {
        super(...arguments);
        this.validators = {};
        this._keys = [];
        this._validatorsCount = 0;
    }
    /**
     * @return {?}
     */
    get appliedValidators() {
        return this._keys;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isValidatorTypeApplied(type) {
        return this._keys.indexOf(type) !== -1;
    }
    /**
     * @private
     * @return {?}
     */
    _convertValidatorsToArray() {
        /** @type {?} */
        const validators = [];
        for (const validator in this.validators) {
            if (this.validators.hasOwnProperty(validator)) {
                /** @type {?} */
                const element = this.validators[validator];
                validators.push(element);
            }
        }
        return validators;
    }
    /**
     * @private
     * @param {?=} added
     * @return {?}
     */
    _updateValidators(added = false) {
        if (added || this._validatorsCount !== this._keys.length) {
            /** @type {?} */
            const validators = this._convertValidatorsToArray();
            this.setValidators(validators);
            this.updateValueAndValidity();
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    _addValidatorTypes(type) {
        if (this._keys.indexOf(type) === -1) {
            this._keys.push(type);
            this._validatorsCount = this._keys.length;
        }
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    _removeValidatorType(type) {
        this._keys = this._keys.filter((/**
         * @param {?} _type
         * @return {?}
         */
        _type => _type !== type));
    }
    /**
     * @param {?} type
     * @param {?} validator
     * @return {?}
     */
    addValidator(type, validator) {
        this.validators[type] = validator;
        this._addValidatorTypes(type);
        this._updateValidators(true);
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    addValidators(validators) {
        for (const validator of validators) {
            this.validators[validator.type] = validator.validator;
            this._addValidatorTypes(validator.type);
        }
        this._updateValidators(true);
    }
    /**
     * @return {?}
     */
    setReadonly() {
    }
    /**
     * @return {?}
     */
    setEditable() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    removeValidator(type) {
        delete this.validators[type];
        this._removeValidatorType(type);
        this._updateValidators();
    }
    /**
     * @param {?} types
     * @return {?}
     */
    removeValidators(types) {
        for (const type of types) {
            delete this.validators[type];
            this._removeValidatorType(type);
        }
        this._updateValidators();
    }
    /**
     * @return {?}
     */
    clearValidators() {
        this.validators = {};
        super.clearValidators();
    }
}
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
class LibFormGroup extends FormGroup {
    /**
     * @param {?} controls
     * @param {?=} validatorOrOpts
     * @param {?=} asyncValidator
     */
    constructor(controls, validatorOrOpts, asyncValidator) {
        super((/** @type {?} */ (controls)), validatorOrOpts, asyncValidator);
        this.controls = (/** @type {?} */ (controls));
    }
    /**
     * Returns a  list of FormControls that are invalid and enabled within the FormGroup.
     * The FormControls of sub FormGroups and FormArrays are not returned.
     * @return {?}
     */
    invalidControls() {
        /** @type {?} */
        const invalidControls = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
                if (element instanceof FormControl && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormGroups and FormArrays that are invalid and enabled within the FormGroup.
     * The FormGroups and FormArrays of sub FormGroups and FormArrays are not included.
     * @return {?}
     */
    invalidFormGroups() {
        /** @type {?} */
        const invalidControls = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
                if ((element instanceof FormGroup || element instanceof FormArray) && element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are not included.
     * @return {?}
     */
    invalidFormGroupsAndControls() {
        /** @type {?} */
        const invalidControls = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    invalidControls.push(control);
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormControls of sub FormGroups and FormArrays are included.
     * @return {?}
     */
    allInvalidControls() {
        /** @type {?} */
        const invalidControls = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        /** @type {?} */
                        const invalid = element.allInvalidControls();
                        invalidControls.push(...invalid);
                    }
                    else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }
    /**
     * Returns a list of FormGroups, FormArrays and FormControls that are invalid and enabled within the FormGroup in no particular order.
     * The FormGroups, FormArrays and FormControls of sub FormGroups and FormArrays are included.
     * @return {?}
     */
    allInvalidControlsAndGroups() {
        /** @type {?} */
        const invalidControls = [];
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
                if (element.invalid && element.enabled) {
                    if (element instanceof LibFormGroup) {
                        /** @type {?} */
                        const invalid = element.allInvalidControls();
                        invalidControls.push(control);
                        invalidControls.push(...invalid);
                    }
                    else {
                        invalidControls.push(control);
                    }
                }
            }
        }
        return invalidControls;
    }
    /**
     * @return {?}
     */
    clearAllValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
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
    }
    /**
     * @return {?}
     */
    clearAllValues() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
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
    }
    /**
     * @return {?}
     */
    clearValuesAndValidators() {
        for (const control in this.controls) {
            if (this.controls.hasOwnProperty(control)) {
                /** @type {?} */
                const element = this.controls[control];
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
    }
}
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
class ComponentBase {
    /**
     * @param {?} controlContainer
     */
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.subscriptions = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = (/** @type {?} */ (this.controlContainer.control));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.form.clearValuesAndValidators();
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
}
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
