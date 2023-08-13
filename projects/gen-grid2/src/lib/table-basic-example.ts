    /// <reference types="@types/chrome" />
    import {  MatTableDataSource } from '@angular/material/table';
    import {  MatSort } from '@angular/material/sort';
    import {  MatPaginator } from '@angular/material/paginator';
    import { Component, ViewChild, OnInit } from '@angular/core';

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
      storedObArr = [];
      tt;

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

      keyss(obj: Object) {
        if(obj==undefined)
          return;
        console.log(Object.keys(obj));
        return Object.keys(obj);
      }



      constructor( ) {
       }

      ngOnInit() {
        this.loadTokens();
      }

      loadTokens():any {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

          if(request.popupActive || request.checkPopup)
                return;

          console.log('typescript communication');

          this.storedObArr = JSON.parse(request.jsonString);

          const result =  this.storedObArr.reduce((accumulator, currentValue) => {
            if (Object.keys(currentValue).length > accumulator.max) {
              accumulator.max = Object.keys(currentValue).length;
              accumulator.filteredArray = [currentValue];
            } else if (Object.keys(currentValue).length === accumulator.max) {
              accumulator.filteredArray.push(currentValue);
            }
            return accumulator;
          }, { max: -Infinity, filteredArray: [] });
          this.storedObArr = result.filteredArray;
          this.displayedColumns = ["name", "description"];
          this.dataSource = new MatTableDataSource<any>(this.storedObArr);

          this.tt = this.storedObArr[0];

          let e = this.storedObArr;
          this.displayedColumns = [...Object.keys(e[0])];

          if(this.displayedColumns[0].trim() == "")
            this.displayedColumns.splice(0, 1);

          console.log(this.displayedColumns);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        return this.storedObArr;
      }

      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

      applyFilter(event:any ) {
        let filterValue = event.target.value
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
      }
    }






