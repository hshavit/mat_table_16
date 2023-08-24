import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { GenGrid2Service } from '../gen-grid2.service';

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective {


  constructor(public srvce: GenGrid2Service,  private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.srvce.isDragging = true;
    this.srvce.startX = event.clientX - this.el.nativeElement.offsetLeft;
    this.srvce.startY = event.clientY - this.el.nativeElement.offsetTop;
    this.renderer.addClass(this.el.nativeElement, 'dragging');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.srvce.isDragging) {
      const x = event.clientX - this.srvce.startX;
      const y = event.clientY - this.srvce.startY;
      this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);
      this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.srvce.isDragging = false;
    this.renderer.removeClass(this.el.nativeElement, 'dragging');
  }
}
