import { NumbersArrayCollection } from "./NumbersArrayCollection";

export class Sorter {
  collection: NumbersArrayCollection;

  constructor(collection: NumbersArrayCollection) {
    this.collection = collection;
  }

  sort(): void {
    const collectionLength = this.collection.length;

    for (let i = 0; i < collectionLength; i++) {
      let isSwapped = false;

      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
          isSwapped = true;
        }
      }

      if (!isSwapped) break;
    }
  }
}
