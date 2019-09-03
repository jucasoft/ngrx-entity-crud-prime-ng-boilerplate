import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, SlideMenuStoreActions, SlideMenuStoreSelectors} from '../../../root-store/';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hamburger-button',
  template: `
    <div *ngLet="(open$ | async) as open">
      <em class="fas fa-2x fa-button p-1" style="color: #FFF;" [ngClass]="open ? 'fa-times' : 'fa-bars'"
          (click)="onShowMenu($event,open)"></em>
    </div>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HamburgerButtonComponent implements OnInit, OnDestroy {

  open$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.open$ = this.store$.pipe(select(SlideMenuStoreSelectors.selectOpen));
  }

  onShowMenu($event, value) {
    $event.stopPropagation();
    this.store$.dispatch(SlideMenuStoreActions.Open({open: !value}));
  }
}
