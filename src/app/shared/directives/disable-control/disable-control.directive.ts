import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[DisableControl]'
})
export class DisableControlDirective implements OnChanges {


  @Input() DisableControl = false
  constructor(private ngControl: NgControl) { }


  public ngOnChanges(changes: SimpleChanges): void{
    if(changes['DisabledControl']) {
      const action =  this.DisableControl ? 'disable' : 'enable'
      this.ngControl.control![action]()
    }
  }
}
