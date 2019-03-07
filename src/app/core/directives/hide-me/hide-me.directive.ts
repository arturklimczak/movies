import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appHideMe]'
})
export class HideMeDirective implements OnInit {

  @Input() appHideMe: number = null;

  constructor(private $element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    console.log(`time: ${this.appHideMe}`);
    this.renderer.listen(this.$element.nativeElement, "click", () => {
      this.remove();
    });
  }

  remove() {
    setTimeout(() => {
      this.$element.nativeElement.remove();
    }, this.appHideMe * 1000);
  }
}
