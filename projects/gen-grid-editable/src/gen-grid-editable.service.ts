import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenGridEditableService {


  constructor(public http: HttpClient) { }

  async  getData(jsonn : any[]) {
    const url = 'http://localhost:3000/data'; // Replace with your server's URL

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  saveData(jsonn : any[]) {
    const url = 'http://localhost:3000/data'; // Server's endpoint
    const data = jsonn.filter(t=> {delete t.action; delete t.isNewRow; delete t.isEditable; return t;  } ); // Your data

    this.http.post(url, data).subscribe({
      next: response => {
        console.log('Response:', response);
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

  saveData33(jsonn : any[]) {
    const url = 'http://localhost:3000/data'; // Replace with your server's URL
    /* const data = { key: 'value' }; // Replace with your data */
    const data = jsonn ;

    /* this.http.post(url, data).subscribe(
      response => {
        console.log('Response:', response);
      },
      error => {
        console.error('Error:', error);
      }
    ); */
  }

  async saveData2(jsonn : any[])  {
    const url = 'http://localhost:3000/data'; // Replace with your server's URL
    const data = jsonn ; /* {
      id: 1,
      name: 'John'
    }; */

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  fetchDataSynchronously() {
    const url = 'http://localhost:3000/data'; // Replace with your server's URL

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // Third parameter 'false' indicates a synchronous request
    xhr.send();

    if (xhr.status === 200) {
      return JSON.parse(xhr.responseText);
    } else {
      throw new Error(`Error: ${xhr.status} ${xhr.statusText}`);
    }
  }
}
