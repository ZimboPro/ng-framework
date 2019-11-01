/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @template T
 */
var /**
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
            for (var _b = tslib_1.__values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
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
/**
 * @template T
 */
export { ComponentBase };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWIvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFLQTs7OztJQUtJLHVCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUp0RCxrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFJc0IsQ0FBQzs7OztJQUUxRCxnQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFpQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFBLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELG1DQUFXOzs7SUFBWDs7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7O1lBQ3JDLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsYUFBYSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFNLEdBQUcsV0FBQTtnQkFDVixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckI7Ozs7Ozs7OztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7Ozs7Ozs7SUFoQkcsc0NBQW1DOztJQUVuQyw2QkFBc0I7Ozs7O0lBRVYseUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IExpYkZvcm1Hcm91cCwgSUNvbnRyb2xzIH0gZnJvbSAnLi4vcmVhY3RpdmUvcmVhY3RpdmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEJhc2U8VCBleHRlbmRzIElDb250cm9scz4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveXtcclxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gICAgZm9ybTogTGliRm9ybUdyb3VwPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udHJvbENvbnRhaW5lcjogQ29udHJvbENvbnRhaW5lcikge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSA8TGliRm9ybUdyb3VwPFQ+PnRoaXMuY29udHJvbENvbnRhaW5lci5jb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5jbGVhclZhbHVlc0FuZFZhbGlkYXRvcnMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19