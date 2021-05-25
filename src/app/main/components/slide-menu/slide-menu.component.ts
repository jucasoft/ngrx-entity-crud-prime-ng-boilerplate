import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, SlideMenuStoreActions, SlideMenuStoreSelectors} from '../../../root-store/';
import {MenuItem} from 'primeng/api';
import {Observable} from 'rxjs';
import {menuItemsDecorator} from '@root-store/slide-menu-store/operators';

@Component({
  selector: 'app-slide-menu',
  template: `
    <div class="slide-header"><i class="fas fa-heart"></i> Menù</div>
    <!--    <p-panelMenu [model]="items" [style.width.%]="100"></p-panelMenu>-->
    <p-scrollPanel #scrollPanel [style]="{height: '100%'}">
      <p-menu [model]="items$ | async" styleClass="slide-menu" [style.width.%]="100"></p-menu>
    </p-scrollPanel>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SlideMenuComponent implements OnInit, OnDestroy {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  items$: Observable<MenuItem[]>;

  ngOnDestroy(): void {
  }

  // todo: completare profilazione dei pulsanti.
  ngOnInit(): void {
    this.items$ = this.store$.pipe(
      select(SlideMenuStoreSelectors.selectItems),
      menuItemsDecorator(this.store$)
    );

    this.store$.dispatch(SlideMenuStoreActions.Select({
      item: {
        data: {},
        breadcrumb: ['Home']
      }
    }));
  }
}
