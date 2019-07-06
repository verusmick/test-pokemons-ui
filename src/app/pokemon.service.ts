import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private  http: HttpClient) {
  }

  getPokemons(pokemonName) {
    return new Promise((resolver, reject) => {
      this.http.get(`${API_URL}/pokemon/${pokemonName}/`)
        .subscribe(response => {
          resolver(response);
        }, err => {
          reject(err);
        });
    });
  }
}
