import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Player} from "../Shared/Modules/player";
import {ActivatedRoute, Router} from "@angular/router";
import {UFCPlayersService} from "../services/ufcplayers.service";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  playerForm: FormGroup;
  player: Player | undefined;
  error: string | null = null;

  //making the constructor and importing form builder,form group and validators in it
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private playerService: UFCPlayersService,
    private router: Router
  ) {
    this.playerForm = this.fb.group({
      id: [playerService.generateNewId()],
      name: ['', Validators.required],
      age: ['', Validators.required],
      favSport: ['', Validators.required],
      benchPR: ['', Validators.required],
      favFood: ['']
    })
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
      this.playerService.getItemById(id).subscribe({
        next: player => {
          if(player){
            this.playerForm.patchValue(player);
          }
        },
        error: err => {
          this.error = "There was an error displaying Player";
          console.error("There was an error displaying Player:",err);
        }
      });
    }
  }

  onSubmit():void{
    const player: Player = this.playerForm.value;
    if(player.id){
      this.playerService.updatePlayer(player);
    } else{
      player.id = this.playerService.generateNewId();
      this.playerService.addPlayer(player).subscribe(()=> this.router.navigate(['/players']));
    }
  }

  onDelete(): void{
    const id = this.playerForm.value.id;
    if(id){
      this.playerService.deletePlayer(id).subscribe(()=> this.router.navigate(['/players']));
    }
  }
  navigateToPlayerList():void{
    this.router.navigate(['/players']);
  }
}
