import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '../../../root-store/';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
            <div class="float-left">
              <small>&#160;footer&#160;</small>
            </div>
    </footer>
  `,
  styles: [`

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
  }
}
