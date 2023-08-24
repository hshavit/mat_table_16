import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicExample } from 'src/mat-paginator-goto/table-basic-example';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableBasicExample2 } from 'src/mat-paginator-goto/table-basic-example 2';
import { DemoMaterialModule } from './material-module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GenGrid2Component, GenGrid2Module } from 'genGrid2';
import { GenGridEditableComponent, genGridEditable } from 'gen-grid-editable';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";


export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');
@NgModule({

    providers: [
        GenGridEditableComponent, AppModule,
        MatDialog,
        { provide: MAT_MDC_DIALOG_DATA, useValue: {} },
    ],

    imports: [
        GenGrid2Module,
        genGridEditable,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        DemoMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule
    ],
    declarations: [
      AppComponent,
      TableBasicExample,
      TableBasicExample2,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
