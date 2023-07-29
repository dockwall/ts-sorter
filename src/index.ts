import { Sorter } from "./Sorter";
import { NumbersArrayCollection } from "./NumbersArrayCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedListCollection } from "./LinkedListCollection";

const numbersCollection = new NumbersArrayCollection([50, 10, 3, -5, 0, 1]);
const charactersCollection = new CharactersCollection("zABCDoÖOZabcd");
const linkedListCollection = new LinkedListCollection();
linkedListCollection.push(50);
linkedListCollection.push(10);
linkedListCollection.push(3);
linkedListCollection.push(-5);
linkedListCollection.push(0);
linkedListCollection.push(1);

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

console.log("\nlinked list bubble sorting");
const linkedListSorter = new Sorter(linkedListCollection);
console.log("linked list before sort:");
linkedListCollection.print();
linkedListSorter.bubbleSort();
console.log("linked list after sort:");
linkedListCollection.print();
