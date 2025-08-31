import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'site-home',

  imports: [AnalogWelcomeComponent],
  template: ` <site-analog-welcome /> `,
})
export default class HomeComponent {}
