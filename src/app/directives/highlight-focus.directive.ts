import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightFocus]',
  standalone: true
})
export class HighlightFocusDirective implements AfterViewInit {
  @Input() border:string='';

  constructor(private el:ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
  @HostListener('focus') onFocus(){
    this.setBorder(this.border || '2px solid blue');
  }
  @HostListener('blur') onBlur(){
    this.setBorder('');
  }

  private setBorder(border: string) {
    console.log(border)
    this.el.nativeElement.style.border = border;
  }
}
