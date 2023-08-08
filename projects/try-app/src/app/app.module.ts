import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenGrid2Component, GenGrid2Module } from 'genGrid2';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { DraggableDirective } from './draggable.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData'); 

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
  ],
  imports: [
    DragDropModule,
    BrowserAnimationsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    GenGrid2Module,
    BrowserModule
  ],
  /* providers: [MatDialog,  GenGrid2Component,  AppModule ], */
  /* export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData'); */
  providers: [
    // Other providers...
    GenGrid2Component,  AppModule,
    MatDialog,
    { provide:  MAT_MDC_DIALOG_DATA, useValue: {} }, // You may replace {} with the default data for your dialog.
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
