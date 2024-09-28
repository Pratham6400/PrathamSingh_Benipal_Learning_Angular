import { Component } from '@angular/core';
import {Player} from "../Shared/Modules/player";
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
  //creating instances of the object
  user1: Player = {name: "Pratham", age:20, benchPR: 225, favSport:"UFC", favFood:"Chicken and Rice"};
  user2: Player = {name: "Alex", age:37, benchPR: 345, favSport:"Kickboxing", favFood:"Strips"};
  user3: Player = {name: "Khabib", age:36, benchPR: 275, favSport:"football", favFood:"Burger"};
  user4: Player = {name: "Omar", age:29, benchPR: 200, favSport:"dancing", favFood:"Steak and Rice"};
  user5: Player = {name: "Irene", age:23, benchPR: 115, favSport:"Basketball", favFood:"Platian"};
  user6: Player = {name: "Leo", age:36, benchPR: 310, favSport:"soccer", favFood:"Shrimp"};

  //declaring
  userList: Player[] = [this.user1, this.user2, this.user3, this.user4, this.user5, this.user6];

}

