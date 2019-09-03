import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideMenuComponent} from '@components/slide-menu/slide-menu.component';
import {PanelMenuModule} from 'primeng/panelmenu';

@NgModule({
  declarations: [SlideMenuComponent],
  imports: [CommonModule, PanelMenuModule],
  exports: [SlideMenuComponent]
})
export class SlideMenuModule {
}
