import {Component, Input} from '@angular/core';
import {Player} from "../Shared/Modules/player";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {UFCPlayersService} from "../services/ufcplayers.service";

@Component({
  selector: 'app-player-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './player-list-item.component.html',
  styleUrl: './player-list-item.component.css'
})
export class PlayerListItemComponent {
  //Adding a property that can be accepted as an input to the component
  @Input() player?: Player;
  protected readonly UFCPlayersService = UFCPlayersService;
}
