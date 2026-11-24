import { Directive, ElementRef, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlight) {
      this.el.nativeElement.style.backgroundColor = "yellow";
    }
  }

  @Input() appHighlight: boolean = false;
}
