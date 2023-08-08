import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { TestGenGridService } from './test.gen.grid.service';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {

  /* isDragging: boolean = true;
  startX:number=-1;
  startY:number=-1; */

  constructor( public serv: TestGenGridService, private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.serv.isDragging = true;
    this.serv.startX = event.clientX - this.el.nativeElement.offsetLeft;
    this.serv.startY = event.clientY - this.el.nativeElement.offsetTop;
    this.renderer.addClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.serv.isDragging) {
      const x = event.clientX - this.serv.startX;
      const y = event.clientY - this.serv.startY;
      this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
      this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.serv.isDragging = false;
    this.renderer.removeClass(this.el.nativeElement, 'dragging');
  }
}
