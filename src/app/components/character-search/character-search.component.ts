import { CharactersService } from './../../services/characters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css']
})
export class CharacterSearchComponent {

  constructor(private service: CharactersService){}

  getCharacter(searchName: string) {
    console.log(searchName)
  }

}
