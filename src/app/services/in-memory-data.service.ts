import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {userList} from "../../data/mock-player";
import {Player} from "../Shared/Modules/player";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  // @ts-ignore
  createDb():{userList: Player[]}{
    // @ts-ignore
    const userList: Player[] =[
      {id:1, name: "Pratham", age:20, benchPR: 225, favSport:"UFC", favFood:"Chicken and Rice", imageUrl:"Pratham.png"},
      {id:2, name: "Alex", age:37, benchPR: 345, favSport:"Kickboxing", favFood:"Strips",imageUrl:"Alex.png"},
      {id:3, name: "Khabib", age:36, benchPR: 275, favSport:"football", favFood:"Burger",imageUrl:"Khabib.jpg"},
      {id:4, name: "Ilia", age:29, benchPR: 200, favSport:"dancing", favFood:"Steak and Rice",imageUrl:"Ilia.png"},
      {id:5, name: "Max", age:23, benchPR: 115, favSport:"Basketball", favFood:"Platian",imageUrl:"Max.png"},
      {id:6, name: "Connor", age:36, benchPR: 310, favSport:"soccer", favFood:"Shrimp",imageUrl:"Connor.png"}
    ];
    return {userList};
  }
}
