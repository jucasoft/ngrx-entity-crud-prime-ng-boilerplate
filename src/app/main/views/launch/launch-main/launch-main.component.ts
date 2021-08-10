import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LaunchStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Launch} from '@models/vo/launch';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-launch-main',
  templateUrl: 'launch-main.component.html',
  styles: []
})
export class LaunchMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>,
              private apollo: Apollo) {
  }

  actions: Actions<Launch> = LaunchStoreActions.actions;

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
        {
          launchesPast(limit: 10) {
            launch_date_local
            ships {
              name
              home_port
              image
            }
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
      console.log('result', result);
      debugger
    });
  }
}
