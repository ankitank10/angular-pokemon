export interface IPkDetail {
        name: string,
        pokemonIndex: number,
        imageUrl: string,
        types: any[],
        description: string,
        statTitleWidth: 3,
        statBarWidth: 9,
        stats: {
          hp: string,
          attack: string,
          defense: string,
          speed: string,
          specialAttack: string,
          specialDefense: string
        },
        height: number,
        weight: number,
        eggGroups: string,
        catchRate: number,
        abilities: string,
        genderRatioMale: number,
        genderRatioFemale: number,
        evs: string,
        hatchSteps: number,
        themeColor: string,
        evolutionLevel: number,
        evoulutionImg: string,
        evolutionName: string
}