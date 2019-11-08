import { Component, OnInit, NgModuleFactory, NgModuleRef, ViewContainerRef, Injector, NgModuleFactoryLoader, Inject, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { LazyLoadService } from './lazy-load.service';
import { LAZY_CONTAINER_MODULES_MAP } from './lazy-load.module';
import { LazyModuleType } from './lazy-load.interface';

@Component({
  selector: 'lib-lazy-load',
  templateUrl: './lazy-load.component.html',
  styleUrls: ['./lazy-load.component.css']
})
export class LazyLoadComponent implements OnInit {

  @Input() modulePath: string;
  _control: ControlContainer;

  loading = true;

  private moduleRef: NgModuleRef<any>;

  constructor(
    private lazyLoadService: LazyLoadService,
    private vcr: ViewContainerRef,
    private _injector: Injector,
    private loader: NgModuleFactoryLoader,
    @Inject(LAZY_CONTAINER_MODULES_MAP) private modulesMap
  ) { }

  ngOnInit() {
    this.loading = true;
    if (this.modulePath ==  null) {
      this.usingContainerControl();
    } else {
      this.lazyLoadService.addStarted(this.modulePath);
    }

    setTimeout(() => {
      this.loader
      .load(this.modulePath)
      .then((moduleFactory: NgModuleFactory<any>) => {
        if (this._control) {
          this.loadAndCreateUsingContainerControl(moduleFactory);
        } else {
          this.loadAndCreateUsingModulePath(moduleFactory);
        }
      });
    }, 100);
  }

  completed(moduleLoaded) {
    this.lazyLoadService.addFinished(this._control.name);
    this.lazyLoadService.isFinishedLoading();
    this.loading = false;
  }

  ngOnDestroy() {
    this.moduleRef && this.moduleRef.destroy();
  }

  usingContainerControl() {
    if (!this._control) {
      this._control = this._injector.get(ControlContainer);
    }
    this.lazyLoadService.addStarted(this._control.name);
    this.modulePath = this.modulesMap[this._control.name];
    if (this.modulePath == null || this.modulePath === '') {
      throw new Error(`No module path exists for ${this._control.name} within the modules map`);
    }
  }

  loadAndCreateUsingContainerControl(moduleFactory: NgModuleFactory<any>) {
    this.moduleRef = moduleFactory.create(this._injector);
    const rootComponent = (moduleFactory.moduleType as LazyModuleType).rootComponent;
    if (rootComponent == null) {
      throw new Error(`The module ${this._control.name} in ${this.modulePath} does not have a static root component`);
    }
    const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
    const component = this.vcr.createComponent(factory, null, this._injector);
    this.completed(component.instance)
  }

  loadAndCreateUsingModulePath(moduleFactory: NgModuleFactory<any>) {
    this.moduleRef = moduleFactory.create(this._injector);
    const rootComponent = (moduleFactory.moduleType as LazyModuleType).rootComponent;
    if (rootComponent == null) {
      throw new Error(`The module in ${this.modulePath} does not have a static root component`);
    }
    const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(rootComponent);
    const component = this.vcr.createComponent(factory);
    this.completed(component.instance);
  }
}
