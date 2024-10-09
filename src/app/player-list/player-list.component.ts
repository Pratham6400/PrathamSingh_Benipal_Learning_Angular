import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PlayerListItemComponent} from "../player-list-item/player-list-item.component";
import {UFCPlayersService} from "../services/ufcplayers.service";
import {Player} from "../Shared/Modules/player";

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
export class PlayerListComponent implements OnInit {
  userList: Player[] = [];
  //this constructor is used for dependancy injection
  constructor(private ufcplayerService: UFCPlayersService) {

  }

  ngOnInit(): void{
    //using our service to retrieve our array of data
    this.ufcplayerService.getPlayers().subscribe({
      next: (data: Player[]) => this.userList = data,
      error:err => console.error("Error retrieving data from Playerrs", err),
      complete:() => console.log("Data is retrieved successfully")
    })
  }


}
