import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //injecting HttpClient as a dependency
  //HttpClient is  a class the allows us to perform Http requests (GET POST DELETE)
  http = inject(HttpClient)
  
  getPokemon(userInput = 'bulbasaur'){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
  }
}
