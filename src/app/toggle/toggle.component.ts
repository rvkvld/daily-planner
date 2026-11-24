import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  templateUrl: './toggle.component.html',
  // template: `

  // `,
})
export class ToggleComponent {
    @Input() toggle:boolean = false;
    @Output() toggleChange = new EventEmitter<boolean>();

}







//   @Input() toggle: boolean = false;
//   @Output() toggleChange = new EventEmitter<boolean>();


//     <button type="button" (click)="toggleChange.emit(!toggle)">
//       {{ toggle ? 'On' : 'Off' }}
//     </button>