import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FocusTrapModule } from './../../directives/focus-trap/focus-trap.module';
import { ModalComponent } from './modal.component';
import { ModalService } from './services/modal.service';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FocusTrapModule
  ],
  exports: [ModalComponent],
  providers: [ModalService]
})
export class ModalModule { }
