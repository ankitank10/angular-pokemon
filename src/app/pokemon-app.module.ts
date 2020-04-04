import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import {appRoutes} from './pokemon-app.route'
import {PokemonAppComponent} from './pokemon-app.component'
import {NavBarComponent} from './navigation/navbar.component'
import {PokemonListComponent,
        PokemonCardComponent,
        PokemonDetailComponent,
        PokemonService,
        PokemonListResolver,
        PokemonDetailResolver
} from './pokemon/index'
import {CreateProductComponent, ProductListComponent} from './product/index'


@NgModule({
  declarations: [
    PokemonAppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    NavBarComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PokemonService, PokemonListResolver, PokemonDetailResolver],
  bootstrap: [PokemonAppComponent]
})
export class PokemonAppModule { }
