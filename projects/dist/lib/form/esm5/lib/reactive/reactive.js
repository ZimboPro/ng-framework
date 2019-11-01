/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormGroup, FormControl, FormArray } from '@angular/forms';
/**
 * @record
 */
export function IControls() { }
/**
 * @template T
 */
var /**
 * @template T
 */
LibFormGroup = /** @class */ (function (_super) {
    tslib_1.__extends(LibFormGroup, _super);
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
                        invalidControls.push.apply(invalidControls, tslib_1.__spread(invalid));
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
                        invalidControls.push.apply(invalidControls, tslib_1.__spread(invalid));
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
/**
 * @template T
 */
export { LibFormGroup };
if (false) {
    /** @type {?} */
    LibFormGroup.prototype.controls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGliL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvcmVhY3RpdmUvcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvRyxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7QUFFcEssK0JBRUM7Ozs7QUFFRDs7OztJQUF1RCx3Q0FBUztJQUM1RCxzQkFBWSxRQUFtQixFQUFFLGVBQXNFLEVBQUUsY0FBc0Q7UUFBL0osWUFDSSxrQkFBTSxtQkFBQSxRQUFRLEVBRWIsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLFNBRXRDO1FBREcsS0FBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxRQUFRLEVBQUssQ0FBQzs7SUFDbEMsQ0FBQztJQUlEOzs7T0FHRzs7Ozs7O0lBQ0gsc0NBQWU7Ozs7O0lBQWY7O1lBQ1UsZUFBZSxHQUFhLEVBQUU7UUFDcEMsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7O29CQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RDLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7b0JBQ3RFLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2pDO2FBQ0o7U0FDSjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQzNCLENBQUM7SUFDRDs7O09BR0c7Ozs7OztJQUNILHdDQUFpQjs7Ozs7SUFBakI7O1lBQ1UsZUFBZSxHQUFhLEVBQUU7UUFDcEMsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FB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QUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUM3QjtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBdEpELENBQXVELFNBQVMsR0FzSi9EOzs7Ozs7O0lBOUlHLGdDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBBc3luY1ZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUsIEZvcm1Db250cm9sLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3JtcydcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRyb2xzIHtcclxuICAgIFtrZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpYkZvcm1Hcm91cDxUIGV4dGVuZHMgSUNvbnRyb2xzPiBleHRlbmRzIEZvcm1Hcm91cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sczogSUNvbnRyb2xzLCB2YWxpZGF0b3JPck9wdHM/OiBWYWxpZGF0b3JGbiB8IFZhbGlkYXRvckZuW10gfCBBYnN0cmFjdENvbnRyb2xPcHRpb25zLCBhc3luY1ZhbGlkYXRvcj86IEFzeW5jVmFsaWRhdG9yRm4gfCBBc3luY1ZhbGlkYXRvckZuW10pIHtcclxuICAgICAgICBzdXBlcihjb250cm9scyBhcyB7XHJcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbDtcclxuICAgICAgICB9LCB2YWxpZGF0b3JPck9wdHMsIGFzeW5jVmFsaWRhdG9yKVxyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scyBhcyBUO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRyb2xzOiBUO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhICBsaXN0IG9mIEZvcm1Db250cm9scyB0aGF0IGFyZSBpbnZhbGlkIGFuZCBlbmFibGVkIHdpdGhpbiB0aGUgRm9ybUdyb3VwLlxyXG4gICAgICogVGhlIEZvcm1Db250cm9scyBvZiBzdWIgRm9ybUdyb3VwcyBhbmQgRm9ybUFycmF5cyBhcmUgbm90IHJldHVybmVkLiBcclxuICAgICAqL1xyXG4gICAgaW52YWxpZENvbnRyb2xzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkQ29udHJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCAmJiBlbGVtZW50LmludmFsaWQgJiYgZWxlbWVudC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgRm9ybUdyb3VwcyBhbmQgRm9ybUFycmF5cyB0aGF0IGFyZSBpbnZhbGlkIGFuZCBlbmFibGVkIHdpdGhpbiB0aGUgRm9ybUdyb3VwLlxyXG4gICAgICogVGhlIEZvcm1Hcm91cHMgYW5kIEZvcm1BcnJheXMgb2Ygc3ViIEZvcm1Hcm91cHMgYW5kIEZvcm1BcnJheXMgYXJlIG5vdCBpbmNsdWRlZC4gXHJcbiAgICAgKi9cclxuICAgIGludmFsaWRGb3JtR3JvdXBzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkQ29udHJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgRm9ybUdyb3VwIHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBGb3JtQXJyYXkpICYmIGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29udHJvbHMucHVzaChjb250cm9sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW52YWxpZENvbnRyb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgRm9ybUdyb3VwcywgRm9ybUFycmF5cyBhbmQgRm9ybUNvbnRyb2xzIHRoYXQgYXJlIGludmFsaWQgYW5kIGVuYWJsZWQgd2l0aGluIHRoZSBGb3JtR3JvdXAgaW4gbm8gcGFydGljdWxhciBvcmRlci5cclxuICAgICAqIFRoZSBGb3JtR3JvdXBzLCBGb3JtQXJyYXlzIGFuZCBGb3JtQ29udHJvbHMgb2Ygc3ViIEZvcm1Hcm91cHMgYW5kIEZvcm1BcnJheXMgYXJlIG5vdCBpbmNsdWRlZC4gXHJcbiAgICAgKi9cclxuICAgIGludmFsaWRGb3JtR3JvdXBzQW5kQ29udHJvbHMoKSB7XHJcbiAgICAgICAgY29uc3QgaW52YWxpZENvbnRyb2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBpbiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250cm9sc1tjb250cm9sXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmludmFsaWQgJiYgZWxlbWVudC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIEZvcm1Db250cm9scyB0aGF0IGFyZSBpbnZhbGlkIGFuZCBlbmFibGVkIHdpdGhpbiB0aGUgRm9ybUdyb3VwIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuXHJcbiAgICAgKiBUaGUgRm9ybUNvbnRyb2xzIG9mIHN1YiBGb3JtR3JvdXBzIGFuZCBGb3JtQXJyYXlzIGFyZSBpbmNsdWRlZC5cclxuICAgICAqL1xyXG4gICAgYWxsSW52YWxpZENvbnRyb2xzKCkge1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRDb250cm9sczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgaW4gdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29udHJvbHNbY29udHJvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbnZhbGlkICYmIGVsZW1lbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTGliRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGludmFsaWQgPSBlbGVtZW50LmFsbEludmFsaWRDb250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29udHJvbHMucHVzaCguLi5pbnZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29udHJvbHMucHVzaChjb250cm9sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIEZvcm1Hcm91cHMsIEZvcm1BcnJheXMgYW5kIEZvcm1Db250cm9scyB0aGF0IGFyZSBpbnZhbGlkIGFuZCBlbmFibGVkIHdpdGhpbiB0aGUgRm9ybUdyb3VwIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuXHJcbiAgICAgKiBUaGUgRm9ybUdyb3VwcywgRm9ybUFycmF5cyBhbmQgRm9ybUNvbnRyb2xzIG9mIHN1YiBGb3JtR3JvdXBzIGFuZCBGb3JtQXJyYXlzIGFyZSBpbmNsdWRlZC4gXHJcbiAgICAgKi9cclxuICAgIGFsbEludmFsaWRDb250cm9sc0FuZEdyb3VwcygpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkQ29udHJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpYkZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZhbGlkID0gZWxlbWVudC5hbGxJbnZhbGlkQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRDb250cm9scy5wdXNoKC4uLmludmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRDb250cm9scy5wdXNoKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW52YWxpZENvbnRyb2xzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsVmFsaWRhdG9ycygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgaW4gdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29udHJvbHNbY29udHJvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbnZhbGlkICYmIGVsZW1lbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTGliRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xlYXJBbGxWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhclZhbGlkYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBbGxWYWx1ZXMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpYkZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyQWxsVmFsaWRhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVmFsdWVzQW5kVmFsaWRhdG9ycygpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgaW4gdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29udHJvbHNbY29udHJvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbnZhbGlkICYmIGVsZW1lbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgTGliRm9ybUdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xlYXJWYWx1ZXNBbmRWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhclZhbGlkYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19