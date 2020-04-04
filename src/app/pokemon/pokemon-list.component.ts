import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {PokemonService} from './index'

@Component({
    selector: 'pokemon-list',
    template: `
    <div>
        <h1>Pokemon List</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let pokemon of pokemonList" class="col-md-3 mb-5">
                <pokemon-card [pokemon]="pokemon"></pokemon-card>
            </div>
        </div>
    </div>
    `
})
export class PokemonListComponent implements OnInit {
    pokemonList:any
    constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

    ngOnInit(){ 
        this.pokemonList = this.activatedRoute.snapshot.data['pokemons'];
        // this.pokemonService.getPokemonList().subscribe((result) => {
        //     this.pokemonList = result;
        // })
    }
}
