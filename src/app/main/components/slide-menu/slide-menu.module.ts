import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideMenuComponent} from '@components/slide-menu/slide-menu.component';
import {MenuModule} from 'primeng/menu';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [SlideMenuComponent],
  imports: [CommonModule, MenuModule, ScrollPanelModule],
  exports: [SlideMenuComponent]
})
export class SlideMenuModule {
}
