import {CommentStoreState} from '@root-store/comment-store';
import {AddressStoreState} from '@root-store/address-store';
import {CompanyStoreState} from '@root-store/company-store';
import {UserStoreState} from '@root-store/user-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
comment:CommentStoreState.State;
address:AddressStoreState.State;
company:CompanyStoreState.State;
user:UserStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
