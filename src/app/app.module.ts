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


export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MatMdcDialogData');
@NgModule({
  declarations: [
    AppComponent,
    TableBasicExample,
    TableBasicExample2,
  ],
  imports: [
    MatDialogModule ,
    MatInputModule,
    MatButtonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  /* providers: [ MatDialog], */
  providers: [
    // Other providers...
    MatDialog,
    { provide:  MAT_MDC_DIALOG_DATA, useValue: {} }, // You may replace {} with the default data for your dialog.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
