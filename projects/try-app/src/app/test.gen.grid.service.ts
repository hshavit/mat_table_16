import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestGenGridService {

  isDragging: boolean = true;
  startX:number=-1;
  startY:number=-1;

  constructor() { }
}
