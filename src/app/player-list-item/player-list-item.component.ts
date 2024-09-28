import {Component, Input} from '@angular/core';
import {Player} from "../Shared/Modules/player";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-player-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './player-list-item.component.html',
  styleUrl: './player-list-item.component.css'
})
export class PlayerListItemComponent {
  //Adding a property that can be accepted as an input to the component
  @Input() player?: Player;
}
