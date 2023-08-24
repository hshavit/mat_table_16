import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenGrid2Service {
  public isDragging: boolean = false;
  public startX: number = 0;
  public startY: number = 0;
  constructor() { }
}
