import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlightDirective]',
  standalone: true
})
export class HoverHighlightDirectiveDirective {
  @Input() appHoverHighlight = '';
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHoverHighlight || 'green');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
