import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TableBasicExample } from 'src/mat-paginator-goto/table-basic-example';
import { TableBasicExample2 } from 'src/mat-paginator-goto/table-basic-example 2';
import { MAT_MDC_DIALOG_DATA } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat_table_16';

  constructor(
    @Inject(MAT_MDC_DIALOG_DATA) public dialogData: any,

     private dialog: MatDialog) {


      let inttttt = setInterval(() => {

        let msg;
        if(msg = localStorage.getItem("myData")){
          this.modalGrid(msg);
          console.log('vvvvv');
          clearInterval(inttttt);
        }
      }, 1000);

  }

  modalGrid(msg = null) {

    const ELEMENT_DATA =  msg;
    /* const ELEMENT_DATA = (msg)?msg:
      [
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
      ] */


    const dialogRef = this.dialog.open(TableBasicExample, {data: ELEMENT_DATA });

    /* this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
  }

  modalGrid2() {
    const ELEMENT_DATA =
      [
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
      ]


    /* const dialogRef = this.dialog.open(TableBasicExample2, {data: ELEMENT_DATA }); */

  /*   this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }); */
  }
}

