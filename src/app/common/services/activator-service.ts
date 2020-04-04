import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {PokemonService} from '../../pokemon/shared/pokemon.service'

@Injectable()
export class RouteActivatorService implements CanActivate{
    constructor(private routerObj: Router, private pokServiceObj: PokemonService ){

    }
    
    canActivate(activeRoute:ActivatedRouteSnapshot){
        switch (activeRoute.routeConfig.path) {
            case 'product/list':
                if(localStorage.getItem('products')){
                    return true;
                }else{
                    this.routerObj.navigate(['/product/new'])
                }
                break;
            case 'detail/:term':
                this.pokServiceObj.checkPokemonId(activeRoute.params['term']).subscribe(data => {
                    if(data){
                        return true;
                    }
                },
                err => {
                    this.routerObj.navigate(['/404'])
                },
                );
                break;
                
            default:
                break;
        }
        return true;
    }
}