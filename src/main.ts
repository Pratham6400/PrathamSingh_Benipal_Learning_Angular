import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import {PlayerListComponent} from "./app/player-list/player-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
const routes: Routes = [
  //this is the default route
  {path:'', redirectTo: '/players', pathMatch: 'full'},
  { path: 'players', component: PlayerListComponent },
  { path: 'players/:id', component: PlayerListComponent },
  { path: 'modify-list-item', component: ModifyListItemComponent },
  //adding the wildcard routes
  {path: '**', component: PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
