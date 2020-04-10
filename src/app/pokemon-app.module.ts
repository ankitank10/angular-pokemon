import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms'

import {appRoutes} from './pokemon-app.route'
import {PokemonAppComponent} from './pokemon-app.component'
import {NavBarComponent} from './navigation/navbar.component'
import {PokemonListComponent,
        PokemonDetailComponent,
        PokemonService,
        PokemonListResolver,
        PokemonDetailResolver
} from './pokemon/index'
import {CreateProductComponent, ProductListComponent} from './product/index'
import {RouteActivatorService} from './shared/services/activator-service';
import {FirstUpperPipe} from './shared/utilities/firstUpper-pipe'
import {LoaderDirective} from './shared/utilities/loader-directive'
import {UserService} from './shared/services/user-service';
import {Error404Component} from './shared/components/404.component'
import {CardComponent} from './shared/components/card.component';
import {httpInterceptorProviders} from './shared/interceptors/index'


@NgModule({
  declarations: [
    PokemonAppComponent,
    PokemonListComponent,
    CardComponent,
    PokemonDetailComponent,
    NavBarComponent,
    CreateProductComponent,
    ProductListComponent,
    Error404Component,
    FirstUpperPipe,
    LoaderDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [PokemonService, PokemonListResolver, PokemonDetailResolver, RouteActivatorService, UserService, httpInterceptorProviders],
  bootstrap: [PokemonAppComponent]
})
export class PokemonAppModule { }
