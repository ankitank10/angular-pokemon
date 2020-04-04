import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PokemonService } from './pokemon.service'

@Injectable()
export class PokemonListResolver implements Resolve<any> {
  constructor(private pokServiceObj:PokemonService) {

  }

  resolve() {
    return this.pokServiceObj.getPokemonList()
  }
}