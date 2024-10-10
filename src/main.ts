import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import {PlayerListComponent} from "./app/player-list/player-list.component";
const routes: Routes = [
  {path:'', redirectTo: '/players', pathMatch: 'full'}, //default route
  { path: 'players', component: PlayerListComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
