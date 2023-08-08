
import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenGrid2Component } from 'genGrid2';
import { TestGenGridService } from './test.gen.grid.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


    


closeGrid() {
  this.dialog.closeAll();
}


 yyy(){
    
    let ttt: string | null; 
    ttt = localStorage.getItem("myData");
    if(ttt){
        this.modalGrid( ttt );
    }
return;

    const waitForMyData = () => {
      const myData = localStorage.getItem("myData");
      if (!myData) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(localStorage.getItem("myData"));
          }, 15000); 
        });
      }
      return myData;
    };
    
    const myData = waitForMyData();
    console.log("myData is now available:", myData);
    let tt = localStorage.getItem("myData");
    this.modalGrid(tt?.toString() );
 }


 constructor( public serv: TestGenGridService, private dialog: MatDialog, ii2: GenGrid2Component) {
    
    this.yyy();

    setTimeout(() => {
        
        const element2 = document.querySelector('#ddd');
        element2?.setAttribute('style', 'position:absolute; background: cyan;');  
        const element = document.querySelector('.mat-mdc-dialog-surface');
        element?.setAttribute('style', "min-width: 100vw;   min-height: 100vh;    top: 0px;     left: 0px;  position: absolute;");  
        
       /* element?.classList.add('full-screen-div'); */
       /* alert('ddddd');  */
   }, 1000);

 }

  
  title = 'tryApp';
flg = false;
  modalGrid( msg:string = '' ) {

    
    console.log('modalGrid...............');
    
    const ELEMENT_DATA = (msg!='')?msg:null;
      /* [
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


    /* const dialogRef = this.dialog.open(GenGrid2Component, { 
        data: ELEMENT_DATA,
        panelClass: 'draggable-dialog',
    });
    console.log('open');
    console.log(dialogRef);
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
      console.log(`Dialog result: ${result}`);
    });

    dialogRef.afterOpened().subscribe(() => {
        dialogRef._containerInstance._config.panelClass = 'draggable-dialog';
      });
  } */

  

}




 
/* function waitForMyData() {
  return new Promise((resolve) => {
    const handleDataReady = (event) => {
      const myData = event.detail;
      resolve(myData);
      document.removeEventListener("myDataReady", handleDataReady);
    };

    document.addEventListener("myDataReady", handleDataReady);
  });
}

(async () => {
  try {
    const myData = await waitForMyData();
    console.log("myData is now available:", myData);
    // Continue with your logic that uses myData
  } catch (error) {
    console.error("Error while waiting for myData:", error);
  }
})();
 */  

}