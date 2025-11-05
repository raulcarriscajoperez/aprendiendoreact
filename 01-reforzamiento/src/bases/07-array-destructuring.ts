const characterNames: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [,,trunks] = characterNames;
const [...character] = characterNames; // Completa el destructuring
console.log(trunks, character[2]); // 'Trunks'

const returnsArrayFn = () => {
    return ['ABC', 123] as const;
} 

const [letters, numbers] = returnsArrayFn(); // Completa el destructuring
console.log(letters, numbers); // 'ABC' 123


/**
 * TAREA
*/

const useState = (value:string) => {
    return [value, (newValue: string) => {
        console.log('Valor actual: ', newValue);
    }] as const
}

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"





