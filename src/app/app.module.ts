import { ImageDetailsComponent } from './image-details/image-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { TestImagesComponent } from './test-images/test-images.component';
import { ImageService } from './services/image-services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageFormComponent,
    TestImagesComponent,
    ImageDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
