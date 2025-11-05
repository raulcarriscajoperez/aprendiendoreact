interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

}

interface Address {
    postalCode: string;
    city: string;
}

// const ironman = {
//     firstName: 'Tony',
//     lastName: 'Stark',
//     age: 45,
//     address:{
//         postalCode: 'ABC123',
//         city: 'New York',
//     }
// }

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: "A123",
        city: ""
    }
}

//const spiderman = { ...ironman };
// const spiderman = structuredClone(ironman);

const spiderman: Person ={
    firstName: 'Peter',
    lastName: 'Parker',
    age: 21,
    address: {
        postalCode: "B123",
        city: ""
    }
}

const captainAmercia: Person = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 100,
    address: {
        postalCode: "C123",
        city: ""
    }
}

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 21;
// spiderman.address.city = 'Queens';


console.log (ironman)
console.log (spiderman)
console.log (captainAmercia)