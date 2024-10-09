import { Injectable } from '@angular/core';
import {userList} from "../../data/mock-player";
import {Player} from "../Shared/Modules/player";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UFCPlayersService {
  private ufcplayers: Player[] = userList;
  constructor() { }
  //adding a method that will return an Observable of the IContent array
  // from the mock-content file in my data folder.
  getPlayers(): Observable<Player[]> {
    return of(userList);
  }
  //adding a method that accepts a number and returns the content item in the array
  getItemById(id: number): Observable<Player | undefined> {
    const player = this.ufcplayers.find(player=>player.id === id);
    return of(player);
  }
  //add method
  addPlayer(newPlayer: Player): Observable<Player[]> {
    this.ufcplayers.push(newPlayer)
    return of(this.ufcplayers)
  }
  //update method
  updatePlayer(updatedPlayer: Player): Observable<Player[]> {
    const index = this.ufcplayers.findIndex(player=>player.id === updatedPlayer.id);
    if (index !== -1){
      this.ufcplayers[index] = updatedPlayer;
    }
    return of(this.ufcplayers);
  }

  //Delete method
  deletePlayer(playerId: number): Observable<Player[]> {
    this.ufcplayers = this.ufcplayers.filter(player=>player.id !== playerId);
    return of(this.ufcplayers);
  }

}
