import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PokemonService} from './pokemon.service';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CountClicksDirective } from './directives/contar-clicks.directives';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'lugares', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    CountClicksDirective
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGsoFevMN2J-dXWtD_31AN4UkraR4Hq0'
    })
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
