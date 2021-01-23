import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Coin} from '@models/vo/coin';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-coin',
  template: `
    <button type="button" pButton icon="fa fa-fw fa-plus"
            label="New Coin" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewCoinComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Coin = new Coin();

    const data: PopUpData<Coin> = {
      item,
      props: {title: 'New Coin', route: 'coin'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['coin', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
