export interface Sortable {
  length: number;
  compare(leftIndex: number): boolean;
  swap(leftIndex: number): void;
}

export class Sorter {
  collection: Sortable;

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  bubbleSort(): void {
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
