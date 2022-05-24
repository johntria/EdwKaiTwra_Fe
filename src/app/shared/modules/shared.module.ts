import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgPrimeToastComponent } from "@shared/components/ng-prime-toast/ng-prime-toast.component";
import { NgPrimeModule } from "./ng-prime/ng-prime.module";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgPrimeModule,
  ],
  exports: [
    NgPrimeModule
  ]
})
export class SharedModule { }
