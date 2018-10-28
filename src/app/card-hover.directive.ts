import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray'); 
   }

}
