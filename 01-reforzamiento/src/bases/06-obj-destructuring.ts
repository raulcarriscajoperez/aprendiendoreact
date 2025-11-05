const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

const { name:ironanName, age , key} = person;

console.log({key, ironanName, age})

interface Hero{
    name: string;
    age: number;
    key: string;
    rank?: string
}

const userContext = ({ key, name, age, rank } : Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank
    }
}

// const context = userContext(person);

const { rank, keyName, user: {name} } = userContext(person);

// console.log(context);
console.log({rank, keyName, name});