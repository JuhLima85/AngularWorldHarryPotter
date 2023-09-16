import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';
import { CharacterData } from 'src/app/models/characterData';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {

  character: CharacterData = {
    data: {
      attributes: {
          image: '',
          name: '',
          house: '',
          born: '',
          blood_status: '',
          patronus: '',
          boggart: '',
          species: ''
      }
    }
  }
  errorMessage: string | null = null;

  constructor(private service: CharactersService) {
  }

  ngOnInit(): void {
    this.getCharacter('harry potter')
  }

  getCharacter(searchName: string) {

    const formattedName = searchName.toLowerCase().replace(/ /g, '-');
    this.errorMessage = null;

    this.service.getCharacter(formattedName).subscribe(
      {
        next: (res) => {
          this.character = {
            data: {
              attributes: {
                image: res.data.attributes.image,
                name: res.data.attributes.name,
                house: res.data.attributes.house,
                born: res.data.attributes.born,
                blood_status: res.data.attributes.blood_status,
                patronus: res.data.attributes.patronus,
                boggart: res.data.attributes.boggart,
                species: res.data.attributes.species
              }
            }
          }
          console.log(this.character)
        },
        error: (err) => {
          this.errorMessage = "O personagem não foi encontrado na API. Tente novamente.";
        }
      }
    )
  }
}
