import { Component } from '@angular/core';
import { DayPlannerComponent } from './day-planner/day-planner.component';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [DayPlannerComponent, UserComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Daily Planner';

}
