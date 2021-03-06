import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TYPE_COLORS } from '../../constants/mappings';
import {IPkDetail} from './pokemon-detail.model'

@Component({
    templateUrl: './pokemon-detail.html',
    styleUrls: ['./pokemon-detail.css']
})
export class PokemonDetailComponent implements OnInit {
    private pokemon
    private pokemonProfile
    private pokemonDetail:IPkDetail
    private pokemonEvolution
    private pokemonData
    private themeColors

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        document.getElementById('custom-active-detail').getElementsByTagName('a')[0].classList.add('active');
        this.themeColors = TYPE_COLORS;
        this.activatedRoute.data.forEach((data) => {
            this.pokemonData = data['pokemonData'];

            this.pokemon = this.pokemonData[2];
            this.pokemonProfile = this.pokemonData[0];
            this.pokemonEvolution = this.pokemonData[1];

            const pokemonIndex = this.pokemon.id;

            const name = this.pokemon.name;
            const imageUrl = this.pokemon.sprites.front_default;

            let hp = '',
                attack = '',
                defense = '',
                speed = '',
                specialAttack = '',
                specialDefense = '';

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
            const height = this.pokemon.height / 10;

            const weight = this.pokemon.weight * 0.1;

            const types = this.pokemon.types.map(type => type.type.name);

            const themeColor = `${this.themeColors[types[types.length - 1]]}`;
            const abilities = this.pokemon.abilities
                .map(ability => {return ability.ability.name})
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
                })
                .join(', ');

            const hatchSteps = 255 * (this.pokemonProfile['hatch_counter'] + 1);
            const evolutionLevel = this.pokemonEvolution.chain.evolves_to[0].evolution_details[0].min_level;
            const evoulutionImg = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.pokemonEvolution.chain.evolves_to[0].species.url.split('/').slice(-2)[0]}.png?raw=true`;
            const evolutionName = this.pokemonEvolution.chain.evolves_to[0].species.name;
            this.pokemonDetail = { ...this.pokemonDetail, name, pokemonIndex, imageUrl, types, description, height, weight, eggGroups, catchRate, abilities, genderRatioMale, genderRatioFemale, evs, hatchSteps, themeColor, evolutionLevel, evoulutionImg, evolutionName }
            this.pokemonDetail.stats = { hp, attack, defense, speed, specialAttack, specialDefense };
        })
    }
        
    ngOnDestroy(): void {
        document.getElementById('custom-active-detail').getElementsByTagName('a')[0].classList.remove('active');
        
    }
}
