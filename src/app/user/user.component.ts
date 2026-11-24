import { Component } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ToggleComponent],
  styleUrl: './user.component.css',
  template: `
    <p> --------------------- </p>
    <p class="status"> User is {{user.active? 'active':'inactive' }}</p>

      <app-toggle
      [toggle]="user.active"
      (toggleChange) = "onToggleChange($event)"
      ></app-toggle>

      <button (click)="user.active = false">Reset</button>
  `
})
export class UserComponent {
  user = { active: false};

  onToggleChange(event: boolean){
    this.user.active = event;
  }

}









    // <app-toggle [(toggle)]="user.active" />
    //(toggleChange)="user.active = $event" => onToggleChange($event)

//      <p>-----------------------------</p>
//   <p>User is {{ user.active ? 'active' : 'inactive' }}.</p>
  
//         <app-toggle
//             [toggle]="user.active"
//             (toggleChange)="onToggleChange($event)"
//         />

//         <button type="button" (click)="user.active = false">
//             Reset from parent
//         </button>


//   onToggleChange(event: boolean) {
//     this.user.active = event;
//   }