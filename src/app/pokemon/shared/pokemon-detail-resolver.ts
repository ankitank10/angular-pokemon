import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { PokemonService } from './pokemon.service'
import { Observable } from 'rxjs'


@Injectable()
export class PokemonDetailResolver implements Resolve<any> {
  constructor(private pokServiceObj:PokemonService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.pokServiceObj.getPokemonDetail(route.params['term'])
  }
}