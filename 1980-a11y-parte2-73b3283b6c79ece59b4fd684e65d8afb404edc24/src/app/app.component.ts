import { OnInit } from '@angular/core';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalService } from './shared/components/modal/services/modal.service';
import { ModalRef } from './shared/components/models/modal-ref';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  @ViewChild('template1') public template1: TemplateRef<any>;
  @ViewChild('template2') public template2: TemplateRef<any>;
  selectedTemplate: TemplateRef<any>;
  title = 'a11y-p2';
  firstName: string = 'Flavio'
  info: boolean = false;
  public modalRef: ModalRef;
  form?: FormGroup;


  constructor(private modalService: ModalService,
    // private cd: ChangeDetectorRef, //! teste
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      this.form = this.formBuilder.group({
        firstName: ['Flavio', Validators.required],
        surname: ['', Validators.required],
        age: ['', Validators.required],
        info: [false]
      })
  }

  ngAfterViewInit(): void {
    // this.selectedTemplate = this.template1; // ! teste
    // this.cd.detectChanges(); // ! teste
  }

  show(): void {
    // this.selectedTemplate = this.template2; // ! teste

    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  submit(){
    if(this.form.invalid){
      return;
    }
    console.table(this.form.value)

    this.modalRef.close();
  }
}
