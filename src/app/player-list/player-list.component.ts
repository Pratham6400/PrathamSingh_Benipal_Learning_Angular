import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PlayerListItemComponent} from "../player-list-item/player-list-item.component";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PlayerListItemComponent
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent {

}
