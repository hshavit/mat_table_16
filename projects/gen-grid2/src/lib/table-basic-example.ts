/* import { TableBasicExample } from 'src/mat-paginator-goto/table-basic-example'; */
/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

    /// <reference types="@types/chrome" />

    /* import * as chrome from 'chrome'; */
    import { MatTable, MatTableDataSource } from '@angular/material/table';
    import {  MatSort } from '@angular/material/sort';
    import {  MatPaginator } from '@angular/material/paginator';
    import { Component, ViewChild, OnInit, ElementRef, OnChanges } from '@angular/core';

    import { Router } from '@angular/router';
import { GenGrid2Service } from './gen-grid2.service';

    @Component({
      selector: 'table-basic-example',
      styleUrls: ['table-basic-example.css'],
      templateUrl: 'table-basic-example.html',
    })
    export  class TableBasicExample implements OnInit {

      name = 'Angular 5';

      displayedColumns:any = [];
      dataSource: MatTableDataSource<any> = new MatTableDataSource(this.loadTokens());
      id: any;
      // resultsLength = 0;
      // pageSize = 5;

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;


      tt; /*  = this.loadTokens()[0];S */

      keyss(obj: Object) {
        if(obj==undefined)
          return;
        console.log(Object.keys(obj));
        return Object.keys(obj);
      }


      constructor( ) {
        /* let ttt = this.loadTokens();
        this.displayedColumns = [...Object.keys(ttt[0])];
        console.log(this.displayedColumns); */


       }

      ngOnInit() {
        this.loadTokens();
      }


      storedObArr = [];
      loadTokensFlg=false;
      loadTokens():any {

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

          if(request.popupActive || request.checkPopup)
                return;

          console.log('typescript communication');

          this.storedObArr = JSON.parse(request.jsonString);
          this.storedObArr.splice(this.storedObArr.length-1, 1);

          if( Object.keys( this.storedObArr[0]).length < Object.keys( this.storedObArr[2]).length )
               this.storedObArr.splice(0, 1);
          if( Object.keys( this.storedObArr[0]).length < Object.keys( this.storedObArr[2]).length )
               this.storedObArr.splice(0, 1);

         /*  this.displayedColumns = ["name", "description"]; */
          /* this.dataSource = new rV(this.storedObArr); */
          /* this.dataSource = this.storedObArr; */
          this.dataSource = new MatTableDataSource<any>(this.storedObArr);

          this.tt = this.storedObArr[0];

          let e = this.storedObArr;
          this.displayedColumns = [...Object.keys(e[3])];

          if(this.displayedColumns[0].trim() == "")
            this.displayedColumns.splice(0, 1);

          console.log(this.displayedColumns);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        this.loadTokensFlg=true;


        /* setInterval(
         () =>  {
          this.storedObArr = localStorage.getItem("myData");
          this.storedObArr = JSON.parse(this.storedObArr);
        }
        ,4000) */

        /* let storedObArr = [];
        if(storedValue){
          storedObArr = JSON.parse(storedValue);
        } */

        return this.storedObArr;

        //if (storedValue !== null) {
          // Use the stored value
          //let  result: string = storedValue; // TypeScript knows it's a string
          //return  result;
        //} else {//
//          console.log('Value not found in localStorage.');
  //        return  null;
    //    }



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

      applyFilter(event:any ) {
        /* !.target as   !.value */
        let filterValue = event.target.value
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }
    }






