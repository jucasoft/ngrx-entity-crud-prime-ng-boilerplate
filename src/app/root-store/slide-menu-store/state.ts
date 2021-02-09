import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [
    {
      label: 'User',
      items: [
        {label: 'New  (demonstrative)', icon: 'pi pi-fw pi-plus'},
        {label: 'Download  (demonstrative)', icon: 'pi pi-fw pi-download'}
      ]
    },
    {
      label: 'Address',
      items: [
        {label: 'Add User (demonstrative)', icon: 'pi pi-fw pi-user-plus'},
        {label: 'Remove User (demonstrative)', icon: 'pi pi-fw pi-user-minus'}
      ]
    }
  ]
};
