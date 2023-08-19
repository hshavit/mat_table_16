/// <reference types="@types/chrome" />
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
/* import { DataService } from 'projects/gen-grid2/data.service'; */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  name = 'Angular 5';

  displayedColumns: any = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.getDataSource());
  //id: any;
  storedObArr: any[] = [];
  tt;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  keyss(obj: Object) {
    if (obj == undefined)
      return;
    console.log(Object.keys(obj));
    return Object.values(obj);
  }

  constructor(private dataService: DataService) {
  }

  data: any[] = [];
  ngOnInit() {
    /* this.loadTokens(); */
    /* this.dataService.getData().subscribe((response) => {
      this.data = response;
      this.dataSource = new MatTableDataSource(this.loadTokens(this.loadTokens(this.data))); */
      /* this.loadTokens(this.data); */
    /* }); */


  setTimeout(() => {
    console.log(this.displayedColumns );
    console.log(this.dataSource.data);
  }, 1000);





    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  getDataSource() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/pizzaData.json', false);
    xhr.send();
    if (xhr.status === 200) {
      var jsonData = JSON.parse(xhr.responseText);
      console.log(jsonData);
    } else {
      console.error('Error fetching JSON:', xhr.statusText);
    }
    this.displayedColumns = [...Object.keys(jsonData.menu[0])];
    return jsonData.menu;
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    let filterValue = event.target.value
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}






