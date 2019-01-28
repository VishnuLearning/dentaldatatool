import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { ImagedetailsComponent } from './components/imagedetails/imagedetails.component';
import { AnnotationBoardComponent } from './components/annotation-board/annotation-board.component';
import { AnnotationListComponent } from './components/annotation-list/annotation-list.component';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
import { AnnotationComponent } from './components/annotation/annotation.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagedetailsComponent,
    AnnotationBoardComponent,
    AnnotationListComponent,
    ImageLoaderComponent,
    AnnotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
