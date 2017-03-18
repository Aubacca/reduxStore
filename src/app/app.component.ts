import { CounterComponent } from './counter/counter.component';
import { CurseActions } from './curse/curse-actions';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, select, NgRedux } from 'ng2-redux';
import { Component } from '@angular/core';

import combineReducers from './store/combineReducers'
import logger from './store/combineReducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ CurseActions ]
})
export class AppComponent {
  title = 'app works!';
  @select() curse: Observable<number>;

  constructor(
    private curseActions: CurseActions,
    redux: NgRedux<any>) {
      const initialState = {};
      const middleware = [ logger ];
      redux.configureStore(combineReducers, initialState);
    }

}
