import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {POKEMON_LIST_CONST} from '../constants/mappings'
import {PokemonService} from './shared/pokemon.service'
@Component({
    selector: 'pokemon-list',
    template: `
    <div>
        <h1>Pokemon List</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let pokemon of pokemonList" class="col-md-3 mb-5">
                <pokemon-card [name]="pokemon.name" [url]="pokemon.url"></pokemon-card>
            </div>
        </div>
        <div class="btn-group mb-4 float-right" role="group">
            <button type="button" [(disabled)]="disablePrevious" class="btn btn-primary mr-2" (click)="fetchNextPrevious('previous')">Previous</button>
            <button type="button" [(disabled)]="disableNext" class="btn btn-primary mr-2" (click)="fetchNextPrevious('next')">Next</button>
        </div>
    </div>
    `
})
export class PokemonListComponent implements OnInit {
    pokemonList: any
    disablePrevious: boolean = true
    disableNext: boolean = false
    currentOffset: number = 0
    constructor(private activatedRoute: ActivatedRoute, private pokServiceObj: PokemonService) { }

    ngOnInit() {
        const pokData = this.activatedRoute.snapshot.data['pokemons'];
        this.handleResponseValues(pokData);
        
    }
    handleResponseValues(pokData){
        this.pokemonList = pokData.results;
        if((pokData.count-(POKEMON_LIST_CONST.noOfListItems*(this.currentOffset+1))) > 0){
            this.disableNext = false;
        }else{
            this.disableNext = true;
        }
        if(this.currentOffset===0){
            this.disablePrevious = true;
        }
    }
    fetchNextPrevious(type){
        if(type=== 'next'){
            this.currentOffset += 1;
            this.disablePrevious = false;
        }else{
            this.currentOffset -= 1;
        }
        this.pokServiceObj.getPokemonList(this.currentOffset, POKEMON_LIST_CONST.noOfListItems).subscribe((data) => {
            this.handleResponseValues(data);
        },
        (error) => {console.log(error)}
        )
    }
}
