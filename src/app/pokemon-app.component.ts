import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pokemon-app',
    template: `
    <div class="pokemonApp">
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    </div>
    `
})
export class PokemonAppComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
