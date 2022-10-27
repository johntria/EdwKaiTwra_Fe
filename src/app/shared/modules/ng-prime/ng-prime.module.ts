import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {MenuModule} from 'primeng/menu';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PasswordModule} from 'primeng/password';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DialogModule} from 'primeng/dialog';

@NgModule({
    declarations: [],
    imports: [
        DialogModule,CommonModule, ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule, MenuModule, InputSwitchModule, ToggleButtonModule

    ],
    exports: [
        DialogModule,ToastModule, MessagesModule, MessageModule, AccordionModule, ScrollTopModule, SidebarModule, ButtonModule, ListboxModule, InputTextModule, PasswordModule, MenuModule, InputSwitchModule, ToggleButtonModule
    ]
})
export class NgPrimeModule {
}
