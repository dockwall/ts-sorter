class Sorter {
  collection: number[];

  constructor(collection: number[]) {
    this.collection = collection;
  }

  sort(): void {
    const { length: collectionLength } = this.collection;

    for (let i = 0; i < collectionLength; i++) {
      for (let j = 0; j < collectionLength - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const temp = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0, 1]);
console.log("Collection before sort:", sorter.collection);
sorter.sort();
console.log("Collection after sort:", sorter.collection);
