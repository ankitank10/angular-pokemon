import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of, forkJoin } from 'rxjs'
import { flatMap, map, mergeMap, take, catchError } from 'rxjs/operators'

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {
  }
  // getPokemonList() {
  //   const PokemonObjCalls = [];
  //   return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0').pipe(
  //     map(result => {
  //       const pokemonList = result['results'];
  //       return pokemonList;
  //     }),
  //     mergeMap(pokemonList => {
  //       pokemonList.forEach((item: any, index: number) => {
  //         // const `pokeObj${index+1}` = this.http.get(`https://pokeapi.co/api/v2/pokemon?id=${index+1}`);
  //         PokemonObjCalls.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`))
  //       })
  //       return forkJoin(PokemonObjCalls);
  //     }),
  //     take(1)
  //   );
  // }
  getPokemonList(pageOffset, pageLimit) {
    const PokemonObjCalls = [];
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${pageLimit}&offset=${pageOffset}`)
  }
  getPokemonDetail(param: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${param}`).pipe(
      mergeMap((data) => {
        var profileCall = this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${data['id']}`);
        var evolutionCall = this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${data['id']}`)
        return forkJoin([profileCall, evolutionCall, of(data)])
      }),
      take(1)
    )
  }
  checkPokemonId(param: any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
  }


}