import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { CharacterData } from '../models/characterData';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseURL: string = "";
  private characterData: CharacterData | any;

  constructor(
    private http: HttpClient
  ) {
    this.baseURL = environment.potterdb
  }

  getCharacter(characterName:string): Observable<CharacterData> {
    this.characterData = this
                          .http
                          .get<CharacterData>
                          (`${this.baseURL}${characterName}`)
                          .pipe(catchError(this.handleError))
    return this.characterData
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      // Tratamento para o caso de personagem não encontrado
      return throwError('Personagem não encontrado na API.');
    }
    // Outros tratamentos de erro podem ser adicionados aqui
    return throwError('Ocorreu um erro ao buscar o personagem.');
  }
}