/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormControl } from '@angular/forms';
export class LibFormControl extends FormControl {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWIvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9yZWFjdGl2ZS9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUEyQixNQUFNLGdCQUFnQixDQUFDO0FBSXRFLE1BQU0sT0FBTyxjQUFlLFNBQVEsV0FBVztJQUEvQzs7UUFDWSxlQUFVLEdBRWQsRUFBRSxDQUFDO1FBRUMsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUErRWpDLENBQUM7Ozs7SUE5RUcsSUFBSSxpQkFBaUI7UUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsc0JBQXNCLENBQUMsSUFBNEI7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVPLHlCQUF5Qjs7Y0FDdkIsVUFBVSxHQUFpQixFQUFFO1FBQ25DLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFOztzQkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxRQUFpQixLQUFLO1FBQzVDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTs7a0JBQ2hELFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztTQUNqQztJQUNMLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLElBQTRCO1FBQ25ELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzdDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsSUFBNEI7UUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBNEIsRUFBRSxTQUFzQjtRQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQW9FO1FBQzlFLEtBQUssTUFBTSxTQUFTLElBQUksVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsV0FBVztJQUVYLENBQUM7Ozs7SUFFRCxXQUFXO0lBRVgsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBNEI7UUFDeEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWlDO1FBQzlDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0o7Ozs7OztJQXBGRyxvQ0FFTzs7Ozs7SUFFUCwrQkFBNkI7Ozs7O0lBQzdCLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFZhbGlkYXRvclR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvci50eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtQ29udHJvbCBleHRlbmRzIEZvcm1Db250cm9sIHtcclxuICAgIHByaXZhdGUgdmFsaWRhdG9yczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFZhbGlkYXRvckZuO1xyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2tleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3JzQ291bnQgPSAwO1xyXG4gICAgZ2V0IGFwcGxpZWRWYWxpZGF0b3JzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkYXRvclR5cGVBcHBsaWVkKHR5cGU6IFZhbGlkYXRvclR5cGUgfCBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5pbmRleE9mKHR5cGUpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0VmFsaWRhdG9yc1RvQXJyYXkoKTogVmFsaWRhdG9yRm5bXSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczpWYWxpZGF0b3JGbltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCB2YWxpZGF0b3IgaW4gdGhpcy52YWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudmFsaWRhdG9yc1t2YWxpZGF0b3JdO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVZhbGlkYXRvcnMoYWRkZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChhZGRlZCB8fCB0aGlzLl92YWxpZGF0b3JzQ291bnQgIT09IHRoaXMuX2tleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLl9jb252ZXJ0VmFsaWRhdG9yc1RvQXJyYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkVmFsaWRhdG9yVHlwZXModHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmluZGV4T2YodHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaCh0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9yc0NvdW50ID0gdGhpcy5fa2V5cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZVZhbGlkYXRvclR5cGUodHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2tleXMgPSB0aGlzLl9rZXlzLmZpbHRlcihfdHlwZSA9PiBfdHlwZSAhPT0gdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVmFsaWRhdG9yKHR5cGU6IFZhbGlkYXRvclR5cGUgfCBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4pIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnNbdHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICAgICAgdGhpcy5fYWRkVmFsaWRhdG9yVHlwZXModHlwZSk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycyh0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiB7dHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZywgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbn1bXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIG9mIHZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JzW3ZhbGlkYXRvci50eXBlXSA9IHZhbGlkYXRvci52YWxpZGF0b3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbGlkYXRvclR5cGVzKHZhbGlkYXRvci50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkb25seSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWRpdGFibGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVZhbGlkYXRvcih0eXBlOiBWYWxpZGF0b3JUeXBlIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMudmFsaWRhdG9yc1t0eXBlXTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVWYWxpZGF0b3JUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhbGlkYXRvcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVWYWxpZGF0b3JzKHR5cGVzOiBWYWxpZGF0b3JUeXBlW10gfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy52YWxpZGF0b3JzW3R5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVWYWxpZGF0b3JUeXBlKHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJWYWxpZGF0b3JzKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IHt9O1xyXG4gICAgICAgIHN1cGVyLmNsZWFyVmFsaWRhdG9ycygpO1xyXG4gICAgfVxyXG59Il19