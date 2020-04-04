import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.html',
    styles:[`
        .card-custom {width: 5em; height: 5em; }
        .card-style {
            opacity: 0.95;
            box-shadow: 0 0 11px rgba(33,33,33,.2);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .card-style:hover {
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            cursor: pointer;
        }
    `]
})
export class PokemonCardComponent implements OnInit {
    pokemonIndex: number
    imageUrl: string
    @Input() name:string
    @Input() url:string
    constructor() { }

    ngOnInit(): void {
        this.pokemonIndex = +(this.url.split('/')[this.url.split('/').length - 2]);
        //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
        this.imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.pokemonIndex}.png?raw=true`;
     }
}
