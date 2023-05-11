import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../Interfaces/modal-config";
import { BodyInjectorService } from 'src/app/shared/services/body-injector';
import { ModalRef } from '../../models/modal-ref';

@Injectable()

export class ModalService {

  private componentFacory: ComponentFactory<ModalComponent>

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjector: BodyInjectorService

  ) {
    this.componentFacory = componentFactoryResolver.resolveComponentFactory(ModalComponent)
  }

  open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log(componentRef.instance)
    console.log('open Called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    const modalRef = new ModalRef(componentRef);
    componentRef.instance.modalRef = modalRef;
    return modalRef;
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFacory.create(this.injector);
  }


}



