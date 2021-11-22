import {CssVarStoreState} from '@root-store/css-var-store';
import {CssSourceStoreState} from '@root-store/css-source-store';
import {CssItemStoreState} from '@root-store/css-item-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
css_var:CssVarStoreState.State;
css_source:CssSourceStoreState.State;
  css_name: CssItemStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
