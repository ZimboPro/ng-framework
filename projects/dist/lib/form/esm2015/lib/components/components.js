/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class ComponentBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BsaWIvZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbXBvbmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sT0FBTyxhQUFhOzs7O0lBS3RCLFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSnRELGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztJQUlzQixDQUFDOzs7O0lBRTFELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFpQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFBLENBQUM7SUFDL0QsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDckMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7Q0FDSjs7O0lBaEJHLHNDQUFtQzs7SUFFbkMsNkJBQXNCOzs7OztJQUVWLHlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaWJGb3JtR3JvdXAsIElDb250cm9scyB9IGZyb20gJy4uL3JlYWN0aXZlL3JlYWN0aXZlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRCYXNlPFQgZXh0ZW5kcyBJQ29udHJvbHM+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XHJcbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICAgIGZvcm06IExpYkZvcm1Hcm91cDxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyb2xDb250YWluZXI6IENvbnRyb2xDb250YWluZXIpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gPExpYkZvcm1Hcm91cDxUPj50aGlzLmNvbnRyb2xDb250YWluZXIuY29udHJvbDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmZvcm0uY2xlYXJWYWx1ZXNBbmRWYWxpZGF0b3JzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==