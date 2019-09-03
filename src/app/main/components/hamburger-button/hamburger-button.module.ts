import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HamburgerButtonComponent} from '@components/hamburger-button/hamburger-button.component';
import {NgLetModule} from '@core/directive/ng-let.directive';


@NgModule({
  declarations: [HamburgerButtonComponent],
  imports: [CommonModule, NgLetModule],
  exports: [HamburgerButtonComponent]
})
export class HamburgerButtonModule {
}
