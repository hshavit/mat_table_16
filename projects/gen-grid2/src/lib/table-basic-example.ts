/// <reference types="@types/chrome" />
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {

  @ViewChild('rows') rows: ElementRef | undefined;

  name = 'Angular 5';

  displayedColumns: any = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.getDataSource());

  storedObArr: any[] = [];
  tt;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  keyss(obj: Object) {
    if (obj == undefined)
      return;
    /* console.log(Object.keys(obj)); */
    return Object.values(obj);
  }

  constructor(private dataService: DataService) {
  }

  data: any[] = [];
  ngOnInit() {

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

    jsonData.menu  = jsonData.menu.reduce((acc: any, curr: any, index, arr) => {
      /* acc.push(Object.values(curr));  */
      if(acc=='[]' || acc.length==0  )
        acc = [...arr];
      acc[index]['hovered'] = false;
      acc[index]['highlighted'] = false;
      return acc;
    }, []);

    /* setInterval(() => { */
      /* console.log(this.dataSource); */
    /* }, 4500); */

    return jsonData.menu;
  }

  selectedRows(){
    console.log(this.rows);
    alert('ss');
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






