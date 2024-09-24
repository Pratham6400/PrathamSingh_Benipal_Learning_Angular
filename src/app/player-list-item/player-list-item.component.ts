import {Component, Input} from '@angular/core';
import {User} from "../Shared/Modules/user";

@Component({
  selector: 'app-player-list-item',
  standalone: true,
  imports: [],
  templateUrl: './player-list-item.component.html',
  styleUrl: './player-list-item.component.css'
})
export class PlayerListItemComponent {
  //Adding a property that can be accepted as an input to the component
  @Input() player?:User;
}
