import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyStyle]',
})
export class MyStyleDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.color = 'hotpink';
  }
}
