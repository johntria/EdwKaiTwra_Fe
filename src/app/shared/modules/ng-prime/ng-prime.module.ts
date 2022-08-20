import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgPrimeToastComponent } from "@shared/components/ng-prime-toast/ng-prime-toast.component";
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';





@NgModule({
    declarations: [
        NgPrimeToastComponent
    ],
    imports: [
        CommonModule, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule
    ],
    exports: [
        NgPrimeToastComponent, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule
    ]
})
export class NgPrimeModule { }
