import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PlayerListItemComponent} from "../player-list-item/player-list-item.component";
import {UFCPlayersService} from "../services/ufcplayers.service";
import {Player} from "../Shared/Modules/player";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    PlayerListItemComponent,
    RouterLink
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.css'
})
export class PlayerListComponent implements OnInit {
  userList: Player[] = [];
  error: string | null = null;
  //this constructor is used for dependancy injection
  constructor(private ufcplayerService: UFCPlayersService,private router: Router) {

  }

  ngOnInit(): void{
    //using our service to retrieve our array of data
    this.ufcplayerService.getPlayers().subscribe({
      next: (data: Player[]) => {
        this.userList = data;
        this.error= null;
      },
      error:err => {
        this.error = 'Error retrieving data from Playerrs';
        console.error("Error retrieving data from Playerrs", err)
      },
      complete:() => console.log("Data is retrieved successfully")
    });
  }

  // eddit and delete methods
  editPlayer(id: number): void {
    this.router.navigate(['edit', id]);
  }

  deletePlayer(id: number): void {
    this.ufcplayerService.deletePlayer(id).subscribe(() => {
      this.userList = this.userList.filter(player => player.id !== id);
    });
  }
}
