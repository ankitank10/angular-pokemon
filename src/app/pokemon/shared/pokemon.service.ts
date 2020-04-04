import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable, of, forkJoin } from 'rxjs'
import {flatMap, map, mergeMap,take} from 'rxjs/operators'

@Injectable()
export class PokemonService {
    constructor(private http: HttpClient){

    }
    // getPokemonList(): any {
    //     return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0')
    // }
      getPokemonList() {
        const PokemonObjCalls = [];
        return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0').pipe(
          map( result => {
            const pokemonList = result['results'];
            return pokemonList;
          }),
          mergeMap( pokemonList => {
            pokemonList.forEach((item:any, index:number) => {
                // const `pokeObj${index+1}` = this.http.get(`https://pokeapi.co/api/v2/pokemon?id=${index+1}`);
                PokemonObjCalls.push(this.http.get(`https://pokeapi.co/api/v2/pokemon/${index+1}`))
            })
            return forkJoin(PokemonObjCalls);
          }),
          take(1)
        );
      }
      getPokemonDetail(id:number){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
          mergeMap((data) => {
            var profileCall = this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            var evolutionCall = this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
            return forkJoin([profileCall, evolutionCall, of(data)] )
          }),
          take(1)
        )
      }
      

}