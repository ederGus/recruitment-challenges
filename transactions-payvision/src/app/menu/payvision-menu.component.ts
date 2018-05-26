import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payvision-menu',
  templateUrl: './payvision-menu.component.html'
})
export class MenuComponent  {
  // tslint:disable-next-line:no-inferrable-types
  public isNavbarCollapsed: boolean = false;
}
