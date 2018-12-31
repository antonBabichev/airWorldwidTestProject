import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {  HttpClientModule } from '@angular/common/http';

import { Config } from './models/config';
import { ApiClient } from './models/api-client';
import { FilePickerComponent } from './viewModels/filePicker.component';
import { FileTreeComponent } from './viewModels/tree.component';
import { AppComponent } from './viewModels/app.component';
import { TabUploadComponent } from './viewModels/tabUpload.component';

@NgModule({
  declarations: [
    AppComponent, 
    TabUploadComponent, 
    FilePickerComponent, 
    FileTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  entryComponents: [FilePickerComponent],
  providers: [ApiClient, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
