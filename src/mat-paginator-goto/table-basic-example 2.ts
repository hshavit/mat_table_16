import { CommonModule } from '@angular/common';
import { Component, HostListener, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { startWith, tap } from 'rxjs/operators';



const ELEMENT_DATA2 = [
  { position: 1, name3: '3ddd', name2: 'ddd', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name3: '3ddd', name2: 'ddd', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name3: '3ddd', name2: 'ddd', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  {
    position: 4,
    name3: '3ddd', name2: 'ddd',
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
  },
  { position: 5, name3: '3ddd', name2: 'ddd', name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name3: '3ddd', name2: 'ddd', name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name3: '3ddd', name2: 'ddd', name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name3: '3ddd', name2: 'ddd', name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name3: '3ddd', name2: 'ddd', name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name3: '3ddd', name2: 'ddd', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name3: '3ddd', name2: 'ddd', name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example2',
  styleUrls: ['table-basic-example2.css'],
  templateUrl: 'table-basic-example 2.html',
})
export class TableBasicExample2 implements OnInit, OnChanges{
  /* isDragging = false;
  offset = { x: 0, y: 0 }; */
  isDragging = false;
  isResizing = false;
  offset = { x: 0, y: 0 };
  initialSize = { width: 0, height: 0 };
  /* @Input() ELEMENT_DATA:Array<{}>=[{}]; */

 //tt = ELEMENT_DATA[0];
   tt:any;
  ngOnChanges(changes: SimpleChanges): void {

    this.tt = this.ELEMENT_DATA[0];
    this.ngOnInitProc();
    /* if (changes.message) {
      console.log('New value of message:', changes.message.currentValue);
    } */
  }

  constructor(
  @Inject(MAT_DIALOG_DATA) public ELEMENT_DATA: any,
  private fb: FormBuilder,
  private _formBuilder: FormBuilder) {

    this.ngOnInitProc();
    this.tt = this.ELEMENT_DATA[0];
    this.displayedColumns = [...Object.keys(this.ELEMENT_DATA[0]),
    'action'
  ];

  }

  keyss(obj: Object) {
    if(obj==undefined)
      return;
    console.log(Object.keys(obj));
    return Object.keys(obj);
  }

  displayedColumns: string[]  = [];

  dataSource = new MatTableDataSource<any>();

  isLoading = true;

  pageNumber: number = 1;
  VOForm: any;
  isEditableNew: boolean = true;

  ngOnInitProc(): void {
    this.VOForm = this._formBuilder.group({
      VORows: this._formBuilder.array([]),
    });

    this.VOForm = this.fb.group({
      VORows: this.fb.array(
        this.ELEMENT_DATA.map((val) =>
          this.fb.group({
            ...
            Object.keys(this.ELEMENT_DATA[0]).reduce((acc: any, key: any) => {
              acc[key] = new FormControl(val[key]); return acc;
            }, {}),
            action: new FormControl('newRecord'),
            isEditable: new FormControl(true),
            isNewRow: new FormControl(true)
            /* position: new FormControl(val.position),
            name2: new FormControl(val.name2),
            name3: new FormControl(val.name3),
            name: new FormControl(val.name),
            weight: new FormControl(val.weight),
            symbol: new FormControl(val.symbol),
            action: new FormControl('existingRecord'),
            isEditable: new FormControl(true),
            isNewRow: new FormControl(false), */
          })
        )
      ), //end of fb array
    }); // end of form group cretation
    this.isLoading = false;
    this.dataSource = new MatTableDataSource(
      (this.VOForm.get('VORows') as FormArray).controls
    );
    this.dataSource.paginator = this.paginator;

    const filterPredicate = this.dataSource.filterPredicate;
    this.dataSource.filterPredicate = (data: AbstractControl, filter) => {
      return filterPredicate.call(this.dataSource, data.value, filter);
    };

  }

  ngOnInit(): void {

    //Custom filter according to name column
    // this.dataSource.filterPredicate = (data: {name: string}, filterValue: string) =>
    //   data.name.trim().toLowerCase().indexOf(filterValue) !== -1;
  }

  // @ts-ignore: Suppress TS2564 error
  @ViewChild(MatPaginator) paginator: MatPaginator;

  goToPage() {
    this.paginator.pageIndex = this.pageNumber - 1;
    this.paginator.page.next({
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length,
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginatorList = document.getElementsByClassName(
      'mat-paginator-range-label'
    );

    this.onPaginateChange(this.paginator, this.paginatorList);

    this.paginator.page.subscribe(() => {
      // this is page change event
      this.onPaginateChange(this.paginator, this.paginatorList);
    });
  }

  applyFilter(event: Event) {
    //  debugger;
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // @ViewChild('table') table: MatTable<PeriodicElement>;
  AddNewRow() {
    // this.getBasicDetails();
    const control = this.VOForm.get('VORows') as FormArray;
    control.insert(0, this.initiateVOForm());
    this.dataSource = new MatTableDataSource(control.controls);
    // control.controls.unshift(this.initiateVOForm());
    // this.openPanel(panel);
    // this.table.renderRows();
    // this.dataSource.data = this.dataSource.data;
  }

  // this function will enabled the select field for editd
  EditSVO(VOFormElement, i) {
    // VOFormElement.get('VORows').at(i).get('name').disabled(false)
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(false);
    // this.isEditableNew = true;
  }

  // On click of correct button in table (after click on edit) this method will call
  SaveVO(VOFormElement, i) {
    // alert('SaveVO')
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  // On click of cancel button in the table (after click on edit) this method will call and reset the previous data
  CancelSVO(VOFormElement, i) {
    VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true);
  }

  DeleteVO(VOFormElement, i) {
    /* VOFormElement.get('VORows').at(i).get('isEditable').patchValue(true); */
    this.ELEMENT_DATA.splice(i, 1);
    this.ngOnInitProc();
    /* ELEMENT_DATA
    VOFormElement.removeAt(i); */
  }

  paginatorList: any; // HTMLCollectionOf<Element>;
  idx: Number = -1;
  onPaginateChange(paginator: MatPaginator, list: HTMLCollectionOf<Element>) {
    setTimeout(
      (idx) => {
        let from = paginator.pageSize * paginator.pageIndex + 1;

        let to =
          paginator.length < paginator.pageSize * (paginator.pageIndex + 1)
            ? paginator.length
            : paginator.pageSize * (paginator.pageIndex + 1);

        let toFrom = paginator.length == 0 ? 0 : `${from} - ${to}`;
        let pageNumber =
          paginator.length == 0
            ? `0 of 0`
            : `${paginator.pageIndex + 1} of ${paginator.getNumberOfPages()}`;
        let rows = `Page ${pageNumber} (${toFrom} of ${paginator.length})`;

        if (list.length >= 1) list[0].innerHTML = rows;
      },
      0,
      paginator.pageIndex
    );
  }

  initiateVOForm(): FormGroup {
    return this.fb.group({
      ...
      Object.keys(this.ELEMENT_DATA[0]).reduce((acc: any, key: any) => {
        acc[key] = new FormControl(' '); return acc;
      }, {}),
      action: new FormControl('newRecord'),
      isEditable: new FormControl(true),
      isNewRow: new FormControl(true)
      /* position: new FormControl(234),
        name: new FormControl(''),
        weight: new FormControl(''),
        symbol: new FormControl(''),
        action: new FormControl('newRecord'),
        isEditable: new FormControl(false),
        isNewRow: new FormControl(true), */
    });
  }
  dataSource_data_length(): number {
    let num: number = -2;
    num = Number(+this.dataSource.data.length);
    return num;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const handle = target.querySelector('.handle') as HTMLElement;

    if (handle && event.clientX > handle.getBoundingClientRect().left) {
      this.isResizing = true;
      this.initialSize.width = target.offsetWidth;
      this.initialSize.height = target.offsetHeight;
    } else {
      this.isDragging = true;
      this.offset.x = event.clientX - target.offsetLeft;
      this.offset.y = event.clientY - target.offsetTop;
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.isDragging) {
      target.style.top = event.clientY - this.offset.y + 'px';
      target.style.left = event.clientX - this.offset.x + 'px';
    } else if (this.isResizing) {
      const newWidth = this.initialSize.width + (event.clientX - this.offset.x - this.initialSize.width);
      const newHeight = this.initialSize.height + (event.clientY - this.offset.y - this.initialSize.height);
      target.style.width = Math.max(100, newWidth) + 'px';
      target.style.height = Math.max(100, newHeight) + 'px';
    }
  }

  @HostListener('mouseup')
  onMouseUp(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
