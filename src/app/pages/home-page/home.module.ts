import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FootersModule } from 'src/app/features/footer/footer.module';
import { HeadersModule } from 'src/app/features/header/header.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FootersModule,
    HeadersModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
