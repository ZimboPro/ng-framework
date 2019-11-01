/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup, FormControl, FormArray } from '@angular/forms';
/**
 * @record
 */
export function IControls() { }
/**
 * @template T
 */
export class LibFormGroup extends FormGroup {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbGliL2Zvcm0vIiwic291cmNlcyI6WyJsaWIvcmVhY3RpdmUvcmVhY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9HLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7OztBQUVwSywrQkFFQzs7OztBQUVELE1BQU0sT0FBTyxZQUFrQyxTQUFRLFNBQVM7Ozs7OztJQUM1RCxZQUFZLFFBQW1CLEVBQUUsZUFBc0UsRUFBRSxjQUFzRDtRQUMzSixLQUFLLENBQUMsbUJBQUEsUUFBUSxFQUViLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQUEsUUFBUSxFQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBUUQsZUFBZTs7Y0FDTCxlQUFlLEdBQWEsRUFBRTtRQUNwQyxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTs7c0JBQ2pDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsSUFBSSxPQUFPLFlBQVksV0FBVyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDdEUsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDakM7YUFDSjtTQUNKO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBS0QsaUJBQWlCOztjQUNQLGVBQWUsR0FBYSxFQUFFO1FBQ3BDLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFOztzQkFD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b250ZW50IjpbImltcG9ydCB7IEZvcm1Hcm91cCwgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgQXN5bmNWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9scyB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2w7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaWJGb3JtR3JvdXA8VCBleHRlbmRzIElDb250cm9scz4gZXh0ZW5kcyBGb3JtR3JvdXAge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbHM6IElDb250cm9scywgdmFsaWRhdG9yT3JPcHRzPzogVmFsaWRhdG9yRm4gfCBWYWxpZGF0b3JGbltdIHwgQWJzdHJhY3RDb250cm9sT3B0aW9ucywgYXN5bmNWYWxpZGF0b3I/OiBBc3luY1ZhbGlkYXRvckZuIHwgQXN5bmNWYWxpZGF0b3JGbltdKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbHMgYXMge1xyXG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2w7XHJcbiAgICAgICAgfSwgdmFsaWRhdG9yT3JPcHRzLCBhc3luY1ZhbGlkYXRvcilcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gY29udHJvbHMgYXMgVDtcclxuICAgIH1cclxuXHJcbiAgICBjb250cm9sczogVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSAgbGlzdCBvZiBGb3JtQ29udHJvbHMgdGhhdCBhcmUgaW52YWxpZCBhbmQgZW5hYmxlZCB3aXRoaW4gdGhlIEZvcm1Hcm91cC5cclxuICAgICAqIFRoZSBGb3JtQ29udHJvbHMgb2Ygc3ViIEZvcm1Hcm91cHMgYW5kIEZvcm1BcnJheXMgYXJlIG5vdCByZXR1cm5lZC4gXHJcbiAgICAgKi9cclxuICAgIGludmFsaWRDb250cm9scygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgaW52YWxpZENvbnRyb2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBpbiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250cm9sc1tjb250cm9sXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgJiYgZWxlbWVudC5pbnZhbGlkICYmIGVsZW1lbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRDb250cm9scy5wdXNoKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnZhbGlkQ29udHJvbHM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIEZvcm1Hcm91cHMgYW5kIEZvcm1BcnJheXMgdGhhdCBhcmUgaW52YWxpZCBhbmQgZW5hYmxlZCB3aXRoaW4gdGhlIEZvcm1Hcm91cC5cclxuICAgICAqIFRoZSBGb3JtR3JvdXBzIGFuZCBGb3JtQXJyYXlzIG9mIHN1YiBGb3JtR3JvdXBzIGFuZCBGb3JtQXJyYXlzIGFyZSBub3QgaW5jbHVkZWQuIFxyXG4gICAgICovXHJcbiAgICBpbnZhbGlkRm9ybUdyb3VwcygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgaW52YWxpZENvbnRyb2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBpbiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250cm9sc1tjb250cm9sXTtcclxuICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEZvcm1Hcm91cCB8fCBlbGVtZW50IGluc3RhbmNlb2YgRm9ybUFycmF5KSAmJiBlbGVtZW50LmludmFsaWQgJiYgZWxlbWVudC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIEZvcm1Hcm91cHMsIEZvcm1BcnJheXMgYW5kIEZvcm1Db250cm9scyB0aGF0IGFyZSBpbnZhbGlkIGFuZCBlbmFibGVkIHdpdGhpbiB0aGUgRm9ybUdyb3VwIGluIG5vIHBhcnRpY3VsYXIgb3JkZXIuXHJcbiAgICAgKiBUaGUgRm9ybUdyb3VwcywgRm9ybUFycmF5cyBhbmQgRm9ybUNvbnRyb2xzIG9mIHN1YiBGb3JtR3JvdXBzIGFuZCBGb3JtQXJyYXlzIGFyZSBub3QgaW5jbHVkZWQuIFxyXG4gICAgICovXHJcbiAgICBpbnZhbGlkRm9ybUdyb3Vwc0FuZENvbnRyb2xzKCkge1xyXG4gICAgICAgIGNvbnN0IGludmFsaWRDb250cm9sczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbnRyb2wgaW4gdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9scy5oYXNPd25Qcm9wZXJ0eShjb250cm9sKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29udHJvbHNbY29udHJvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pbnZhbGlkICYmIGVsZW1lbnQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWRDb250cm9scy5wdXNoKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnZhbGlkQ29udHJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBGb3JtQ29udHJvbHMgdGhhdCBhcmUgaW52YWxpZCBhbmQgZW5hYmxlZCB3aXRoaW4gdGhlIEZvcm1Hcm91cCBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLlxyXG4gICAgICogVGhlIEZvcm1Db250cm9scyBvZiBzdWIgRm9ybUdyb3VwcyBhbmQgRm9ybUFycmF5cyBhcmUgaW5jbHVkZWQuXHJcbiAgICAgKi9cclxuICAgIGFsbEludmFsaWRDb250cm9scygpIHtcclxuICAgICAgICBjb25zdCBpbnZhbGlkQ29udHJvbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpYkZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnZhbGlkID0gZWxlbWVudC5hbGxJbnZhbGlkQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goLi4uaW52YWxpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZENvbnRyb2xzLnB1c2goY29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnZhbGlkQ29udHJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBGb3JtR3JvdXBzLCBGb3JtQXJyYXlzIGFuZCBGb3JtQ29udHJvbHMgdGhhdCBhcmUgaW52YWxpZCBhbmQgZW5hYmxlZCB3aXRoaW4gdGhlIEZvcm1Hcm91cCBpbiBubyBwYXJ0aWN1bGFyIG9yZGVyLlxyXG4gICAgICogVGhlIEZvcm1Hcm91cHMsIEZvcm1BcnJheXMgYW5kIEZvcm1Db250cm9scyBvZiBzdWIgRm9ybUdyb3VwcyBhbmQgRm9ybUFycmF5cyBhcmUgaW5jbHVkZWQuIFxyXG4gICAgICovXHJcbiAgICBhbGxJbnZhbGlkQ29udHJvbHNBbmRHcm91cHMoKSB7XHJcbiAgICAgICAgY29uc3QgaW52YWxpZENvbnRyb2xzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBpbiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250cm9sc1tjb250cm9sXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmludmFsaWQgJiYgZWxlbWVudC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBMaWJGb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZCA9IGVsZW1lbnQuYWxsSW52YWxpZENvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWRDb250cm9scy5wdXNoKGNvbnRyb2wpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29udHJvbHMucHVzaCguLi5pbnZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkQ29udHJvbHMucHVzaChjb250cm9sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGludmFsaWRDb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFsbFZhbGlkYXRvcnMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpYkZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyQWxsVmFsaWRhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xlYXJWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQWxsVmFsdWVzKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udHJvbCBpbiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRyb2xzLmhhc093blByb3BlcnR5KGNvbnRyb2wpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb250cm9sc1tjb250cm9sXTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmludmFsaWQgJiYgZWxlbWVudC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBMaWJGb3JtR3JvdXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGVhckFsbFZhbGlkYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhclZhbHVlc0FuZFZhbGlkYXRvcnMoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250cm9sIGluIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29udHJvbHMuaGFzT3duUHJvcGVydHkoY29udHJvbCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbnRyb2xzW2NvbnRyb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaW52YWxpZCAmJiBlbGVtZW50LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIExpYkZvcm1Hcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsZWFyVmFsdWVzQW5kVmFsaWRhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xlYXJWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==