import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { PokemonService } from './pokemon.service'
import {POKEMON_LIST_CONST} from '../../constants/mappings'

@Injectable()
export class PokemonListResolver implements Resolve<any> {
  constructor(private pokServiceObj:PokemonService) {

  }

  resolve() {
    return this.pokServiceObj.getPokemonList(0, POKEMON_LIST_CONST.noOfListItems)
  }
}