import { Injectable } from '@angular/core';
import {userList} from "../../data/mock-player";
import {Player} from "../Shared/Modules/player";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UFCPlayersService {
  private apiUrl = 'api/players';

  //adding a local copy for CRUD operations
  private ufcplayers: Player[] = userList;
  constructor(private http: HttpClient) { }
  //adding a method that will return an Observable of the IContent array
  // from the mock-content file in my data folder.

  //instead of local data, CRUD operations will be managed using HTTP requests
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  //adding a method that accepts a number and returns the content item in the array
  //methods are already added
  getItemById(id: number): Observable<Player | undefined> {
    //const player = this.ufcplayers.find(player=>player.id === id);
    return this.http.get<Player>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  //add method
  addPlayer(newPlayer: Player): Observable<Player> {
    this.ufcplayers.push(newPlayer);
    return this.http.post<Player>(this.apiUrl, newPlayer).pipe(catchError(this.handleError));
  }
  //update method
  updatePlayer(updatedPlayer: Player): Observable<Player> {
    // const index = this.ufcplayers.findIndex(player=>player.id === updatedPlayer.id);
    // if (index !== -1){
    //   this.ufcplayers[index] = updatedPlayer;
    // }
    const url = `${this.apiUrl}/${updatedPlayer.id}`;
    return this.http.put<Player>(url, updatedPlayer).pipe(catchError(this.handleError));
  }

  //Delete method
  deletePlayer(playerId: number): Observable<{}> {
    const url = `${this.apiUrl}/${playerId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId() {
    return this.ufcplayers.length > 0 ? Math.max(...this.ufcplayers.map(player => player.id)) + 1 : 1;
  }

  //handleError function
  private handleError(error: HttpErrorResponse){
    console.error('API error:', error);
    return throwError(()=> new Error('This is a Server error, try again later.'));
  }
}

