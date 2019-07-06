import {Component} from '@angular/core';
import {PokemonService} from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokeList = [] as any;
  pokeName: string;

  constructor(private pokemonService: PokemonService) {
  }

  catchPokemon() {
    this.pokemonService.getPokemons(this.pokeName).then(pokemon => {
      alert('Pokemon caught  :)');
      this.pokeList.push(pokemon);
    }).catch(error => {
      alert('Pokemon not found  :(');
    });
  }

  ngOnInit() {

  }
}

