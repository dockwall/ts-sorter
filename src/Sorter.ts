export interface Sortable {
  length: number;
  compare(leftIndex: number): boolean;
  swap(leftIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;

  bubbleSort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      let isSwapped = false;

      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
          isSwapped = true;
        }
      }

      if (!isSwapped) break;
    }
  }
}
