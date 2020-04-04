import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.html',
    styles:[`
        .card-custom {width: 5em; height: 5em; }
        .card-style {
            opacity: 0.95;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            &:hover {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
        }
    `]
})
export class PokemonCardComponent implements OnInit {
    @Input() pokemon:any
    constructor() { }

    ngOnInit(): void { }
}
