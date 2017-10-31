import { Directive,HostListener,HostBinding  } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpeon:boolean = false;
 
  constructor() { }

  @HostListener('click') toggleOpen() {
   this.isOpeon = !this.isOpeon; 
  }
}
