import { Routes } from '@angular/router'
import {
  PokemonListComponent,
  PokemonDetailComponent,
  PokemonListResolver,
  PokemonDetailResolver
} from './pokemon/index'

import { CreateProductComponent, ProductListComponent } from './product/index';
import { RouteActivatorService } from './shared/services/activator-service';
import { Error404Component } from './shared/components/404.component'
export const appRoutes: Routes = [
  { path: 'home', component: PokemonListComponent, resolve: { pokemons: PokemonListResolver } },
  { path: 'detail/:term', component: PokemonDetailComponent, canActivate: [RouteActivatorService], resolve: { pokemonData: PokemonDetailResolver } },
  { path: 'product/new', component: CreateProductComponent },
  { path: 'product/list', component: ProductListComponent, canActivate: [RouteActivatorService] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: "**", redirectTo: "/404"
  }


]