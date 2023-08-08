/* import { TableBasicExample } from 'src/mat-paginator-goto/table-basic-example'; */
/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

    import { MatTable, MatTableDataSource } from '@angular/material/table';
    import {  MatSort } from '@angular/material/sort';
    import {  MatPaginator } from '@angular/material/paginator';
    import { Component, ViewChild, OnInit, ElementRef, OnChanges } from '@angular/core';

    import { Router } from '@angular/router';

    @Component({
      selector: 'table-basic-example',
      styleUrls: ['table-basic-example.css'],
      templateUrl: 'table-basic-example.html',
    })
    export class TableBasicExample implements OnInit {

      name = 'Angular 5';

      displayedColumns = ['name', 'description'];
      dataSource: MatTableDataSource<any> = new MatTableDataSource(this.loadTokens());
      id: any;
      // resultsLength = 0;
      // pageSize = 5;

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;


      tt = this.loadTokens()[0];

      keyss(obj: Object) {
        if(obj==undefined)
          return;
        console.log(Object.keys(obj));
        return Object.keys(obj);
      }


      constructor() {
        let ttt = this.loadTokens();
        this.displayedColumns = [...Object.keys(ttt[0])];
        console.log(this.displayedColumns);


       }

      ngOnInit() {
        this.loadTokens();
      }

      loadTokens() {
        let str = localStorage.getItem("myData");

        if(str)
          return ( str);
        else
          return null;

        return [
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
      }

      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }
    }





