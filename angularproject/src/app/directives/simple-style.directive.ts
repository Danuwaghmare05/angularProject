import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSimpleStyle]',
})
export class SimpleStyleDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'hotpink';
  }
}
