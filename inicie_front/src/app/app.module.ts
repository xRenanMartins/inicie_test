import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { ListComponent } from './modules/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './modules/list/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    
  ],
  exports: [
    SidebarComponent,
  ],
  providers: [SidebarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
