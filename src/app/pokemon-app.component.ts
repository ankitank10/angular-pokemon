import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pokemon-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class PokemonAppComponent implements OnInit {
    constructor() { }
    ngOnInit(): void { }
}
