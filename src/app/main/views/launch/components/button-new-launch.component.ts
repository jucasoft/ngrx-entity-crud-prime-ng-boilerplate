import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Launch} from '@models/vo/launch';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-launch',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Launch" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewLaunchComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Launch = new Launch();

    const data: PopUpData<Launch> = {
      item,
      props: {title: 'New Launch', route: 'launch'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['launch', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
