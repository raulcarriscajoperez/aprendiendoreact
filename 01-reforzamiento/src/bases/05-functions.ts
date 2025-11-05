function greet(name:string): string{
    return `Hola ${name}`;
}

const greet2 = (name : string) => `Hola ${name}`;

const message = greet('Raúl');
const message2 = greet2('María');
console.log(message);
console.log(message2);

interface User{
    uid: string;
    username: string;
}

function getUser(): User{
    return{
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

const getUser2 = () => ({ uid: 'ABC123', username: 'El_PapiTwo'
    })

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

const myNumerbrs: number[] = [1,2,3,4,5];
//  myNumerbrs.forEach(function(value){
//     console.log({value});
//  })
// myNumerbrs.forEach((value) => {console.log({value})});
myNumerbrs.forEach(console.log);
