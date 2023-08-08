import { NgModule } from '@angular/core';
import { GenGrid2Component } from './gen-grid2.component';
import { MatTableModule } from '@angular/material/table';
import { TableBasicExample } from './table-basic-example';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './draggable.directive';




@NgModule({
  declarations: [
    GenGrid2Component,
    TableBasicExample,
    DraggableDirective

  ],
  imports: [
    BrowserModule, FormsModule, MatFormFieldModule, MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  exports: [
    GenGrid2Component,
    DraggableDirective
  ]
})
export class GenGrid2Module { }
