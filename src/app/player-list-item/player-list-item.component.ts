import {Component, Input} from '@angular/core';
import {Player} from "../Shared/Modules/player";
import {CurrencyPipe, DatePipe, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {UFCPlayersService} from "../services/ufcplayers.service";
import {MypipePipe} from "../pipes/mypipe.pipe";

@Component({
  selector: 'app-player-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    MypipePipe
  ],
  templateUrl: './player-list-item.component.html',
  styleUrl: './player-list-item.component.css'
})
export class PlayerListItemComponent {
  //Adding a property that can be accepted as an input to the component
  @Input() player?: Player;
  protected readonly UFCPlayersService = UFCPlayersService;
  protected readonly Date = Date;
  protected readonly MypipePipe = MypipePipe;
}
