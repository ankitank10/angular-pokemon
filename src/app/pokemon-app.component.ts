import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pokemon-app',
    template: `
    <div class="pokemonApp" [loaderDirective]="{isLoading:isLoading, id:route}">
        <nav-bar></nav-bar>
        <router-outlet ></router-outlet>
    </div>
    `,
    styles: [
        `
            .pokemonApp { position: relative; display: block;}
        `
    ]
})
export class PokemonAppComponent implements OnInit {
    private isLoading = true;
    constructor(private _router: Router, private activatedRoute: ActivatedRoute) {
        this._router.events.subscribe((routerEvent: Event) => {

            if (routerEvent instanceof NavigationStart) {
                this.isLoading = true;
            }
            if (routerEvent instanceof NavigationEnd ||
                routerEvent instanceof NavigationCancel ||
                routerEvent instanceof NavigationError) {
                this.isLoading = false;
            }

        });
        this.activatedRoute.data.forEach((data) => {

        })
    }
    ngOnInit(): void { }
}
