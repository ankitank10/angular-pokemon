import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TYPE_COLORS} from '../../constants/mappings';
import {IPkDetail} from './pokemon-detail.model'

@Component({
    templateUrl: './pokemon-detail.html',
    styleUrls: ['./pokemon-detail.css']
})
export class PokemonDetailComponent implements OnInit {
    pokemonData
    pokemon
    pokemonProfile
    pokemonDetail
    pokemonEvolution
    constructor(private activatedRoute:ActivatedRoute) { }
    themeColors

    ngOnInit(): void { 
        debugger;
        this.themeColors = TYPE_COLORS;
        this.pokemonData = this.activatedRoute.snapshot.data['pokemonData'];
        this.pokemon = this.pokemonData[2];
        this.pokemonProfile = this.pokemonData[0];
        this.pokemonEvolution = this.pokemonData[1];
        console.log(this.pokemonEvolution);
        
        const pokemonIndex = this.pokemon.id;

        const name = this.pokemon.name;
        const imageUrl = this.pokemon.sprites.front_default;

        let hp = '',
            attack = '',
            defense= '',
            speed= '',
            specialAttack= '',
            specialDefense= '';

        this.pokemon.stats.map(stat => {
        switch (stat.stat.name) {
            case 'hp':
            hp = stat['base_stat'];
            break;
            case 'attack':
            attack = stat['base_stat'];
            break;
            case 'defense':
            defense = stat['base_stat'];
            break;
            case 'speed':
            speed = stat['base_stat'];
            break;
            case 'special-attack':
            specialAttack = stat['base_stat'];
            break;
            case 'special-defense':
            specialDefense = stat['base_stat'];
            break;
            default:
            break;
        }
        });
        const height =
        Math.round((this.pokemon.height * 0.328084 + 0.00001) * 100) / 100;

        const weight =
        Math.round((this.pokemon.weight * 0.220462 + 0.00001) * 100) / 100;

        const types = this.pokemon.types.map(type => type.type.name);

        const themeColor = `${this.themeColors[types[types.length - 1]]}`;
        console.log(themeColor);
        const abilities = this.pokemon.abilities
        .map(ability => {
            return ability.ability.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        })
        .join(', ');

        const evs = this.pokemon.stats
        .filter(stat => {
            if (stat.effort > 0) {
            return true;
            }
            return false;
        })
        .map(stat => {
            return `${stat.effort} ${stat.stat.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}`;
        })
        .join(', ');

        let description = '';
        this.pokemonProfile.flavor_text_entries.some(flavor => {
            if (flavor.language.name === 'en') {
            description = flavor.flavor_text;
            return;
            }
        });
        const femaleRate = this.pokemonProfile['gender_rate'];
        const genderRatioFemale = 12.5 * femaleRate;
        const genderRatioMale = 12.5 * (8 - femaleRate);

        const catchRate = Math.round((100 / 255) * this.pokemonProfile['capture_rate']);

        const eggGroups = this.pokemonProfile['egg_groups']
            .map(group => {
            return group.name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ');
            })
            .join(', ');

        const hatchSteps = 255 * (this.pokemonProfile['hatch_counter'] + 1);
        const evolutionLevel = this.pokemonEvolution.chain.evolves_to[0].evolution_details[0].min_level;
        const evoulutionImg = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.pokemonEvolution.chain.evolves_to[0].species.url.split('/').slice(-2)[0]}.png?raw=true`;
        const evolutionName = this.pokemonEvolution.chain.evolves_to[0].species.name;
        this.pokemonDetail = {...this.pokemonDetail, name, pokemonIndex, imageUrl, types, description, height, weight, eggGroups, catchRate, abilities, genderRatioMale, genderRatioFemale, evs, hatchSteps, themeColor, evolutionLevel, evoulutionImg, evolutionName}
        this.pokemonDetail.stats = {hp, attack, defense, speed, specialAttack, specialDefense};
        console.log(this.pokemonDetail);

    }
}
