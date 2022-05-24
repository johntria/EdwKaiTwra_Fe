import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { MessageModule } from 'primeng/message';
import { NgPrimeToastComponent } from "@shared/components/ng-prime-toast/ng-prime-toast.component";


@NgModule({
    declarations: [
        NgPrimeToastComponent
    ],
    imports: [
        CommonModule, ToastModule, MessagesModule, MessageModule, AccordionModule,
    ],
    exports: [
        NgPrimeToastComponent, ToastModule, MessagesModule, MessageModule, AccordionModule,
    ]
})
export class NgPrimeModule { }
