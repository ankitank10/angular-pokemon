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
import {RouteActivatorService} from '../app/common/services/activator-service';
import {FirstUpperPipe} from '../app/common/utilities/FirstUpper-pipe'
import {UserService} from '../app/common/services/user-service';
import {Error404Component} from '../app/common/errors/404.component'


@NgModule({
  declarations: [
    PokemonAppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    NavBarComponent,
    CreateProductComponent,
    ProductListComponent,
    Error404Component,
    FirstUpperPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PokemonService, PokemonListResolver, PokemonDetailResolver, RouteActivatorService, UserService],
  bootstrap: [PokemonAppComponent]
})
export class PokemonAppModule { }
