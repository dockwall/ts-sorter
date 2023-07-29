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
console.log("Number array before sort:", numbersCollection.data);
numbersCollection.bubbleSort();
console.log("Number array after sort:", numbersCollection.data);

console.log("\nstring bubble sorting");
console.log("string before sort:", charactersCollection.data);
charactersCollection.bubbleSort();
console.log("string after sort:", charactersCollection.data);

console.log("\nlinked list bubble sorting");
console.log("linked list before sort:");
linkedListCollection.print();
linkedListCollection.bubbleSort();
console.log("linked list after sort:");
linkedListCollection.print();
