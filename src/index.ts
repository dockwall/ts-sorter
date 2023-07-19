import { Sorter } from "./Sorter";

const sorter = new Sorter([10, 3, -5, 0, 1]);
console.log("Collection before sort:", sorter.collection);
sorter.sort();
console.log("Collection after sort:", sorter.collection);
