import { Routes } from '@angular/router'
import {
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonListResolver,
    PokemonDetailResolver
} from './pokemon/index'

import {CreateProductComponent, ProductListComponent} from './product/index';
export const appRoutes:Routes = [
  { path: 'home', component: PokemonListComponent, resolve: {pokemons:PokemonListResolver} },
  { path: 'detail/:id', component: PokemonDetailComponent, resolve: {pokemonData:PokemonDetailResolver} },
  { path: 'product/new', component: CreateProductComponent },
  { path: 'product/list', component: ProductListComponent },

]