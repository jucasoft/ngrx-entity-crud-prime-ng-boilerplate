import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HamburgerButtonModule} from '@components/hamburger-button/hamburger-button.module';
import {OverlayPanelModule} from 'primeng/overlaypanel';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HamburgerButtonModule, OverlayPanelModule],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
