import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Player} from "../Shared/Modules/player";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {

  player: Player | undefined;
  error: string | null = null;

  //making the constructor and importing form builder,form group and validators in it
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private fg: FormGroup,

  ) {
  }
  ngOnInit(): void {
  }

}
