import { Pipe, PipeTransform } from '@angular/core';
import {Player} from "../Shared/Modules/player";

@Pipe({
  name: 'MypipePipe',
  standalone: true
})
export class MypipePipe implements PipeTransform {

  transform(player: Player): string {
    return `${player.name} ${player.favSport}`;
  }

}
