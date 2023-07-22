import { Sorter } from "./Sorter";
import { NumbersArrayCollection } from "./NumbersArrayCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersArrayCollection([50, 10, 3, -5, 0, 1]);
const charactersCollection = new CharactersCollection("zABCDoÖOZabcd");

console.log("\nnumber[] bubble sorting");
const numbersArraySorter = new Sorter(numbersCollection);
console.log("Number array before sort:", numbersCollection.data);
numbersArraySorter.bubbleSort();
console.log("Number array after sort:", numbersCollection.data);

console.log("\nstring bubble sorting");
const characterSorter = new Sorter(charactersCollection);
console.log("string before sort:", charactersCollection.data);
characterSorter.bubbleSort();
console.log("string after sort:", charactersCollection.data);
