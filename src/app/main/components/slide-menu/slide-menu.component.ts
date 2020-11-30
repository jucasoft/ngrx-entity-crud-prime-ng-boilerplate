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
    this.items = [
      {
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
      }
    ];

    this.store$.dispatch(SlideMenuStoreActions.Select({
      item: {
        data: {},
        breadcrumb: ['Home']
      }
    }));
  }
}
