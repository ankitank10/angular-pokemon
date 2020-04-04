
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import {UserService} from '../common/services/user-service';
import {PokemonService} from '../pokemon/shared/pokemon.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924 !important; background: white;}
        .error-nav {border: 2px solid red;}
  `]
})
export class NavBarComponent implements OnInit {
  searchTerm: number
  navSearchGroup: FormGroup
  constructor(private auth: UserService, private pokSerObj: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.navSearchGroup = new FormGroup({
      search: new FormControl('', [Validators.minLength(3), Validators.pattern('^[a-zA-Z]*$')])
    })
   }

  searchItems(searchTerm) {
    if(this.navSearchGroup.valid){
      this.pokSerObj.checkPokemonId(this.navSearchGroup.value.search.toLowerCase()).subscribe((data) => {
        this.router.navigate(['/detail', this.navSearchGroup.value.search.toLowerCase()])
      },
      (error) => {console.log(error)}
      )
    }
  }
}
