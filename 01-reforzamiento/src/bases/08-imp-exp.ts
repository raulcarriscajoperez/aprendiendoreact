import { heroes, type Hero, Owner } from "../data/heroes.data"

const getHeroById = (id : number) : Hero => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    })

    if (!hero){
        throw new Error(`Hero with id ${id} not found`);
    }
    return hero;
}

// console.log(getHeroById(7));

// export const getHereosByOwener = (Owener : string) : Hero[] => {
//     const hero = heroes.filter((hero) => hero.owner === Owener);
//     return hero;
// }

export const getHereosByOwener = (owner : Owner) : Hero[] => {
    const heroesByOwner = heroes.filter((hero) => hero.owner === owner);
    return heroesByOwner;
}


// console.log(getHereosByOwener('Marvel'))

