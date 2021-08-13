import {CoinStoreState} from '@root-store/coin-store';
import {Graphql} from '@models/vo/graphql';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
coin:CoinStoreState.State;
graphql:Graphql;
  slide_menu: SlideMenuStoreState.State;
}
