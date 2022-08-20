import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/modules/shared.module';
import { PolicyComponent } from './policy.component';



@NgModule({
  declarations: [
    PolicyComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule ,
    CommonModule,
    SharedModule
  ],
  exports: [
    PolicyComponent
  ]
})
export class PolicyModule { }
