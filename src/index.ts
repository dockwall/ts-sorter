class Sorter {
  collection: number[] | string;

  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  sort(): void {
    const { length: collectionLength } = this.collection;

    for (let i = 0; i < collectionLength; i++) {
      let isSwapped = false;

      for (let j = 0; j < collectionLength - i - 1; j++) {
        // Logic for array collection
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
            isSwapped = true;
          }
        }

        // Logic for string collection
        if (typeof this.collection === "string") {
        }
      }

      if (!isSwapped) break;
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0, 1]);
console.log("Collection before sort:", sorter.collection);
sorter.sort();
console.log("Collection after sort:", sorter.collection);
