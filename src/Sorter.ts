export class Sorter {
  collection: number[] | string;

  constructor(collection /* TODO: fix types */) {
    this.collection = collection;
  }

  sort(): void {
    const { length: collectionLength } = this.collection;

    for (let i = 0; i < collectionLength; i++) {
      let isSwapped = false;

      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
          isSwapped = true;
        }
      }

      if (!isSwapped) break;
    }
  }
}
