import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgPrimeToastComponent } from "@shared/components/ng-prime-toast/ng-prime-toast.component";
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import {MenuItem} from 'primeng/api';


@NgModule({
    declarations: [
        NgPrimeToastComponent
    ],
    imports: [
        CommonModule, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule, MenuModule
    ],
    exports: [
        NgPrimeToastComponent, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule, MenuModule
    ]
})
export class NgPrimeModule { }
