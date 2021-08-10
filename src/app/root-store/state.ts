import {LaunchStoreState} from '@root-store/launch-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
launch:LaunchStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
