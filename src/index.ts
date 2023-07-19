import { Sorter } from "./Sorter";
import { NumbersArrayCollection } from "./NumbersArrayCollection";

const numbersCollection = new NumbersArrayCollection([10, 3, -5, 0, 1]);

const numbersArraySorter = new Sorter(numbersCollection);
console.log("Number array before sort:", numbersCollection.data);
numbersArraySorter.sort();
console.log("Number array after sort:", numbersCollection.data);
