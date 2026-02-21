import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]'
})
export class AppShowIfDirective {

  constructor(
    private templateRef: TemplateRef<any>, // Blueprint
    private viewContainer: ViewContainerRef // place to insert view
  ) { }


  @Input() set appShowIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
