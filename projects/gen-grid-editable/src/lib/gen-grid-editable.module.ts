import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GenGridEditableComponent } from './gen-grid-editable.component';
import { TableBasicExample2 } from './table-basic-example 2';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    GenGridEditableComponent,
    TableBasicExample2,


  ],
  imports: [
    BrowserModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  exports: [
    GenGridEditableComponent,

  ],

})
export class genGridEditable { }
