import {SlideMenuItem} from '@models/vo/slide-menu-item';

export interface State {
  open: boolean;
  item: SlideMenuItem;
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
};
