import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { HeaderComponent } from './header.component';


@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        SharedModule,

    ]
})
export class HeadersModule { }
