import {Component} from '@angular/core';
import {PokemonService} from './pokemon.service';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testTitle = 'hello word';
  pokeList = [] as any;
  pokeName: string;
  listo = true;
  name:string = '';
  name2:string = '';
  lista: any = [
    {plan: "pagado", cercania: 3, distancia: 1, active : true, companyName : 'company1'},
    {plan: "gratuito", cercania: 1, distancia: 1.8, active : false, companyName : 'company2'},
    {plan: "pagado", cercania: 2, distancia: 5, active : true, companyName : 'company3'},
    {plan: "gratuito", cercania: 1, distancia: 10, active : true, companyName : 'company4'},
    {plan: "pagado", cercania: 3, distancia: 35, active : true, companyName : 'company5'},
    {plan: "gratuito", cercania: 1, distancia: 120, active : true, companyName : 'company6'}
  ];

  constructor(private pokemonService: PokemonService) {
    console.log('llega');
    setTimeout(() => {
      this.listo = false;
    }, 3000);
  }

  activateAlert() {
    alert ('bum bum chau');
  }

  catchPokemon() {
    this.pokemonService.getPokemons(this.pokeName).then(pokemon => {
      alert('Pokemon caught  :)');
      this.pokeList.push(pokemon);
    }).catch(error => {
      alert('Pokemon not found  :(');
    });
  }
  ngOnInit() {}
}

