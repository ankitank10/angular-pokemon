import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { PokemonService } from './pokemon.service'


@Injectable()
export class PokemonDetailResolver implements Resolve<any> {
  constructor(private pokServiceObj:PokemonService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.pokServiceObj.getPokemonDetail(route.params['id'])
  }
}