import { fade } from './../../animations/fade';
import { AfterViewInit, Component, HostBinding } from "@angular/core";
import { ModalConfig } from "./Interfaces/modal-config";
import { ModalRef } from '../models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss'],
  animations: [fade]
})

export class ModalComponent  {
  // @HostBinding('class.show') public show = false; //? adiciona classe de mesmo nome para o host  - verificar modal.component.scss
  @HostBinding('@fade') public fade = true;
  public config: ModalConfig;
  public modalRef: ModalRef;

  // ngAfterViewInit() {
  //   setTimeout(() => this.show = true); //gambiarra para triggar o changedetection pois é uma função assincrona
  // }
}


