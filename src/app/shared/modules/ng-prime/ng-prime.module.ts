import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgPrimeToastComponent } from "@shared/components/ng-prime-toast/ng-prime-toast.component";
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        NgPrimeToastComponent
    ],
    imports: [
        CommonModule, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule
    ],
    exports: [
        NgPrimeToastComponent, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule
    ]
})
export class NgPrimeModule { }
