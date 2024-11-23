import {Player} from "./Shared/Modules/player";
import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";

import {PlayerListComponent} from "./player-list/player-list.component";
import {UFCPlayersService} from "./services/ufcplayers.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf, PlayerListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = "UFC Players";
  userList: Player[] = [
    {id:1, name: "Pratham", age:20, benchPR: 225, favSport:"UFC", favFood:"Chicken and Rice", date:"15-11-2024", netWorth:10000, imageUrl:"Pratham.png"},
    {id:2, name: "Alex", age:37, benchPR: 345, favSport:"Kickboxing", favFood:"Strips", date:"15-11-2024", netWorth:10000, imageUrl:"Alex.png"},
    {id:3, name: "Khabib", age:36, benchPR: 275, favSport:"football", favFood:"Burger",date:"15-11-2024", netWorth:10000, imageUrl:"Khabib.jpg"},
    {id:4, name: "Ilia", age:29, benchPR: 200, favSport:"dancing", favFood:"Steak and Rice",date:"15-11-2024", netWorth:10000,imageUrl:"Ilia.png"},
    {id:5, name: "Max", age:23, benchPR: 115, favSport:"Basketball", favFood:"Platian",date:"15-11-2024", netWorth:10000,imageUrl:"Max.png"},
    {id:6, name: "Connor", age:36, benchPR: 310, favSport:"soccer", favFood:"Shrimp",date:"15-11-2024", netWorth:10000,imageUrl:"Connor.png"}
  ]
  clickPlayer?: Player;

  //adding new service using dependency injection
  constructor(private ufcplayerService: UFCPlayersService) {
  }
  ngOnInit() {
    this.getItemById(0);
  }
  showPlayer(id:number){
    this.getItemById(id);
  }


  getItemById(id: number) {
    this.ufcplayerService.getItemById(id).subscribe({
      next: (data: Player| undefined) => this.clickPlayer = data,
      error:err => console.error("Error retrieving data from Playerrs", err),
      complete:() => console.log("Data is retrieved successfully")
    });
  }
}
