import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, SlideMenuStoreActions} from '../../../root-store/';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-slide-menu',
  template: `
    <div class="slide-header"><i class="fas fa-heart"></i> Menù</div>
    <!--    <p-panelMenu [model]="items" [style.width.%]="100"></p-panelMenu>-->
    <p-scrollPanel #scrollPanel [style]="{height: '100%'}">
      <p-menu [model]="items" styleClass="slide-menu" [style.width.%]="100"></p-menu>
    </p-scrollPanel>
  `,
  styles: [`
    .slide-header {
      height: 70px;
      top: 0;
      left: 0;
      right: 0;
      background-color: #0067b7;
      color: #FFF;
      font-size: x-large;
      padding: 18px;
    }

    .slide-header i {
      font-size: xx-large;
    }

    .p-menu {
      width: unset !important;
      border: unset !important;
    }

  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SlideMenuComponent implements OnInit, OnDestroy {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  items: MenuItem[];

  ngOnDestroy(): void {
  }

  // todo: completare profilazione dei pulsanti.
  ngOnInit(): void {
    this.items = [{
      label: 'File (demonstrative)',
      items: [
        {label: 'New  (demonstrative)', icon: 'pi pi-fw pi-plus'},
        {label: 'Download  (demonstrative)', icon: 'pi pi-fw pi-download'}
      ]
    },
      {
        label: 'Edit (demonstrative)',
        items: [
          {label: 'Add User (demonstrative)', icon: 'pi pi-fw pi-user-plus'},
          {label: 'Remove User (demonstrative)', icon: 'pi pi-fw pi-user-minus'}
        ]
      }];
    // const items = [
    //   {
    //     label: 'File',
    //     icon: 'pi pi-pw pi-file',
    //     items: [{
    //       label: 'New',
    //       icon: 'pi pi-fw pi-plus',
    //       items: [
    //         {
    //           label: 'User',
    //           icon: 'pi pi-fw pi-user-plus',
    //           command: (event$) => {
    //             // invoco il router per cambiare pagina
    //             // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //             // salvo nello store del menù l'elemento selezionato.
    //             this.store$.dispatch(SlideMenuStoreActions.Select({
    //               item: {
    //                 data: {},
    //                 breadcrumb: ['File', 'New', 'User']
    //               }
    //             }));
    //           }
    //         },
    //         {
    //           label: 'Filter',
    //           icon: 'pi pi-fw pi-filter',
    //           command: (event$) => {
    //             // invoco il router per cambiare pagina
    //             // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //             // salvo nello store del menù l'elemento selezionato.
    //             this.store$.dispatch(SlideMenuStoreActions.Select({
    //               item: {
    //                 data: {},
    //                 breadcrumb: ['File', 'New', 'Filter']
    //               }
    //             }));
    //           }
    //         }
    //       ]
    //     },
    //       {
    //         label: 'Open',
    //         icon: 'pi pi-fw pi-external-link',
    //         command: (event$) => {
    //           // invoco il router per cambiare pagina
    //           // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //           // salvo nello store del menù l'elemento selezionato.
    //           this.store$.dispatch(SlideMenuStoreActions.Select({
    //             item: {
    //               data: {},
    //               breadcrumb: ['File', 'Open']
    //             }
    //           }));
    //         }
    //       },
    //       {separator: true},
    //       {
    //         label: 'Quit',
    //         icon: 'pi pi-fw pi-times',
    //         command: (event$) => {
    //           // invoco il router per cambiare pagina
    //           // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //           // salvo nello store del menù l'elemento selezionato.
    //           this.store$.dispatch(SlideMenuStoreActions.Select({
    //             item: {
    //               data: {},
    //               breadcrumb: ['File', 'Quit']
    //             }
    //           }));
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //       {
    //         label: 'Delete',
    //         icon: 'pi pi-fw pi-trash',
    //         command: (event$) => {
    //           // invoco il router per cambiare pagina
    //           // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //           // salvo nello store del menù l'elemento selezionato.
    //           this.store$.dispatch(SlideMenuStoreActions.Select({
    //             item: {
    //               data: {},
    //               breadcrumb: ['Edit', 'Delete']
    //             }
    //           }));
    //         }
    //       },
    //       {
    //         label: 'Refresh',
    //         icon: 'pi pi-fw pi-refresh',
    //         command: (event$) => {
    //           // invoco il router per cambiare pagina
    //           // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //           // salvo nello store del menù l'elemento selezionato.
    //           this.store$.dispatch(SlideMenuStoreActions.Select({
    //             item: {
    //               data: {},
    //               breadcrumb: ['Edit', 'Refresh']
    //             }
    //           }));
    //         }
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Help',
    //     icon: 'pi pi-fw pi-question',
    //     items: [
    //       {
    //         label: 'Contents',
    //         icon: 'pi pi-pi pi-bars',
    //         command: (event$) => {
    //           // invoco il router per cambiare pagina
    //           // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //           // salvo nello store del menù l'elemento selezionato.
    //           this.store$.dispatch(SlideMenuStoreActions.Select({
    //             item: {
    //               data: {},
    //               breadcrumb: ['Help', 'Contents']
    //             }
    //           }));
    //         }
    //       },
    //       {
    //         label: 'Search',
    //         icon: 'pi pi-pi pi-search',
    //         items: [
    //           {
    //             label: 'Text',
    //             items: [
    //               {
    //                 label: 'Workspace',
    //                 command: (event$) => {
    //                   // invoco il router per cambiare pagina
    //                   // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //                   // salvo nello store del menù l'elemento selezionato.
    //                   this.store$.dispatch(SlideMenuStoreActions.Select({
    //                     item: {
    //                       data: {},
    //                       breadcrumb: ['Help', 'Search', 'Text', 'Workspace']
    //                     }
    //                   }));
    //                 }
    //               }
    //             ]
    //           },
    //           {
    //             label: 'User',
    //             icon: 'pi pi-fw pi-file',
    //             command: (event$) => {
    //               // invoco il router per cambiare pagina
    //               // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //               // salvo nello store del menù l'elemento selezionato.
    //               this.store$.dispatch(SlideMenuStoreActions.Select({
    //                 item: {
    //                   data: {},
    //                   breadcrumb: ['Help', 'Search', 'Text', 'User']
    //                 }
    //               }));
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Actions',
    //     icon: 'pi pi-fw pi-cog',
    //     items: [
    //       {
    //         label: 'Edit',
    //         icon: 'pi pi-fw pi-pencil',
    //         items: [
    //           {
    //             label: 'Save', icon: 'pi pi-fw pi-save',
    //             command: (event$) => {
    //               // invoco il router per cambiare pagina
    //               // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //               // salvo nello store del menù l'elemento selezionato.
    //               this.store$.dispatch(SlideMenuStoreActions.Select({
    //                 item: {
    //                   data: {},
    //                   breadcrumb: ['Actions', 'Edit', 'Save']
    //                 }
    //               }));
    //             }
    //           },
    //           {
    //             label: 'Update', icon: 'pi pi-fw pi-save',
    //             command: (event$) => {
    //               // invoco il router per cambiare pagina
    //               // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //               // salvo nello store del menù l'elemento selezionato.
    //               this.store$.dispatch(SlideMenuStoreActions.Select({
    //                 item: {
    //                   data: {},
    //                   breadcrumb: ['Actions', 'Edit', 'Update']
    //                 }
    //               }));
    //             }
    //           },
    //         ]
    //       },
    //       {
    //         label: 'Other',
    //         icon: 'pi pi-fw pi-tags',
    //         items: [
    //           {
    //             label: 'Delete', icon: 'pi pi-fw pi-minus',
    //             command: (event$) => {
    //               // invoco il router per cambiare pagina
    //               // this.store$.dispatch(RouterStoreActions.RouterGo({path: ['????']}));
    //
    //               // salvo nello store del menù l'elemento selezionato.
    //               this.store$.dispatch(SlideMenuStoreActions.Select({
    //                 item: {
    //                   data: {},
    //                   breadcrumb: ['Actions', 'Other', 'Delete']
    //                 }
    //               }));
    //             }
    //           }
    //         ]
    //       }
    //     ]
    //   }
    // ];
    // this.items = items;
    this.store$.dispatch(SlideMenuStoreActions.Select({
      item: {
        data: {},
        breadcrumb: ['Home']
      }
    }));
  }
}
