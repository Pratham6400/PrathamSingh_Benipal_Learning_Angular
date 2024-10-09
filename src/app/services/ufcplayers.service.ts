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
}
