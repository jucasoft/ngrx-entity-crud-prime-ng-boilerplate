import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent} from './progress.component';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, ProgressBarModule],
  exports: [ProgressComponent]
})
export class ProgressModule {
}
