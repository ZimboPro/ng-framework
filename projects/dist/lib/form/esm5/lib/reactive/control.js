/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormControl } from '@angular/forms';
var LibFormControl = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormControl, _super);
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
            for (var validators_1 = tslib_1.__values(validators), validators_1_1 = validators_1.next(); !validators_1_1.done; validators_1_1 = validators_1.next()) {
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
            for (var types_1 = tslib_1.__values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
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
export { LibFormControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWIvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9yZWFjdGl2ZS9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBMkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUl0RTtJQUFvQywwQ0FBVztJQUEvQztRQUFBLHFFQXFGQztRQXBGVyxnQkFBVSxHQUVkLEVBQUUsQ0FBQztRQUVDLFdBQUssR0FBYSxFQUFFLENBQUM7UUFDckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDOztJQStFakMsQ0FBQztJQTlFRyxzQkFBSSw2Q0FBaUI7Ozs7UUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsK0NBQXNCOzs7O0lBQXRCLFVBQXVCLElBQTRCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFTyxrREFBeUI7Ozs7SUFBakM7O1lBQ1UsVUFBVSxHQUFpQixFQUFFO1FBQ25DLEtBQUssSUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFOztvQkFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFTywwQ0FBaUI7Ozs7O0lBQXpCLFVBQTBCLEtBQXNCO1FBQXRCLHNCQUFBLEVBQUEsYUFBc0I7UUFDNUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOztnQkFDaEQsVUFBVSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtZQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sMkNBQWtCOzs7OztJQUExQixVQUEyQixJQUE0QjtRQUNuRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUM3QztJQUNMLENBQUM7Ozs7OztJQUVPLDZDQUFvQjs7Ozs7SUFBNUIsVUFBNkIsSUFBNEI7UUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxJQUFJLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7O0lBRUQscUNBQVk7Ozs7O0lBQVosVUFBYSxJQUE0QixFQUFFLFNBQXNCO1FBQzdELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxzQ0FBYTs7OztJQUFiLFVBQWMsVUFBb0U7OztZQUM5RSxLQUF3QixJQUFBLGVBQUEsaUJBQUEsVUFBVSxDQUFBLHNDQUFBLDhEQUFFO2dCQUEvQixJQUFNLFNBQVMsdUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0M7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO0lBRUEsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtJQUVBLENBQUM7Ozs7O0lBRUQsd0NBQWU7Ozs7SUFBZixVQUFnQixJQUE0QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQWlDOzs7WUFDOUMsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBckIsSUFBTSxJQUFJLGtCQUFBO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsaUJBQU0sZUFBZSxXQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXJGRCxDQUFvQyxXQUFXLEdBcUY5Qzs7Ozs7OztJQXBGRyxvQ0FFTzs7Ozs7SUFFUCwrQkFBNkI7Ozs7O0lBQzdCLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFZhbGlkYXRvclR5cGUgfSBmcm9tICcuLi92YWxpZGF0b3JzL3ZhbGlkYXRvci50eXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtQ29udHJvbCBleHRlbmRzIEZvcm1Db250cm9sIHtcclxuICAgIHByaXZhdGUgdmFsaWRhdG9yczoge1xyXG4gICAgICAgIFtrZXk6IHN0cmluZ106IFZhbGlkYXRvckZuO1xyXG4gICAgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2tleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIF92YWxpZGF0b3JzQ291bnQgPSAwO1xyXG4gICAgZ2V0IGFwcGxpZWRWYWxpZGF0b3JzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cztcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkYXRvclR5cGVBcHBsaWVkKHR5cGU6IFZhbGlkYXRvclR5cGUgfCBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2V5cy5pbmRleE9mKHR5cGUpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jb252ZXJ0VmFsaWRhdG9yc1RvQXJyYXkoKTogVmFsaWRhdG9yRm5bXSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yczpWYWxpZGF0b3JGbltdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCB2YWxpZGF0b3IgaW4gdGhpcy52YWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcnMuaGFzT3duUHJvcGVydHkodmFsaWRhdG9yKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudmFsaWRhdG9yc1t2YWxpZGF0b3JdO1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZGF0b3JzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVZhbGlkYXRvcnMoYWRkZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChhZGRlZCB8fCB0aGlzLl92YWxpZGF0b3JzQ291bnQgIT09IHRoaXMuX2tleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLl9jb252ZXJ0VmFsaWRhdG9yc1RvQXJyYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWYWxpZGF0b3JzKHZhbGlkYXRvcnMpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRkVmFsaWRhdG9yVHlwZXModHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9rZXlzLmluZGV4T2YodHlwZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaCh0eXBlKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsaWRhdG9yc0NvdW50ID0gdGhpcy5fa2V5cy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3JlbW92ZVZhbGlkYXRvclR5cGUodHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2tleXMgPSB0aGlzLl9rZXlzLmZpbHRlcihfdHlwZSA9PiBfdHlwZSAhPT0gdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVmFsaWRhdG9yKHR5cGU6IFZhbGlkYXRvclR5cGUgfCBzdHJpbmcsIHZhbGlkYXRvcjogVmFsaWRhdG9yRm4pIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnNbdHlwZV0gPSB2YWxpZGF0b3I7XHJcbiAgICAgICAgdGhpcy5fYWRkVmFsaWRhdG9yVHlwZXModHlwZSk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycyh0cnVlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkVmFsaWRhdG9ycyh2YWxpZGF0b3JzOiB7dHlwZTogVmFsaWRhdG9yVHlwZSB8IHN0cmluZywgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbn1bXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIG9mIHZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JzW3ZhbGlkYXRvci50eXBlXSA9IHZhbGlkYXRvci52YWxpZGF0b3I7XHJcbiAgICAgICAgICAgIHRoaXMuX2FkZFZhbGlkYXRvclR5cGVzKHZhbGlkYXRvci50eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlVmFsaWRhdG9ycyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZWFkb25seSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWRpdGFibGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVZhbGlkYXRvcih0eXBlOiBWYWxpZGF0b3JUeXBlIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMudmFsaWRhdG9yc1t0eXBlXTtcclxuICAgICAgICB0aGlzLl9yZW1vdmVWYWxpZGF0b3JUeXBlKHR5cGUpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhbGlkYXRvcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVWYWxpZGF0b3JzKHR5cGVzOiBWYWxpZGF0b3JUeXBlW10gfCBzdHJpbmdbXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZSBvZiB0eXBlcykge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy52YWxpZGF0b3JzW3R5cGVdO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVWYWxpZGF0b3JUeXBlKHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVWYWxpZGF0b3JzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJWYWxpZGF0b3JzKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IHt9O1xyXG4gICAgICAgIHN1cGVyLmNsZWFyVmFsaWRhdG9ycygpO1xyXG4gICAgfVxyXG59Il19