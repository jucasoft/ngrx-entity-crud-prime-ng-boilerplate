import {CssItemStoreState} from '@root-store/css-item-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
css_name:CssItemStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
