
import { NgModule } from '@angular/core';
import { ReduxComponent } from './redux.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reduxModuleReducer } from './store/redux-reducer';

@NgModule({
  declarations: [
    ReduxComponent,
  ],
  imports: [
    StoreModule.forFeature('reduxModuleState', reduxModuleReducer),
    RouterModule.forChild([{
        path: '',
        component: ReduxComponent,
      }]),
  ],
  providers: [
  ],
})
export class ReduxModule { }
