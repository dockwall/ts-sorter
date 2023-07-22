import type { Sortable } from "./Sorter";

export class NumbersArrayCollection implements Sortable {
  data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex] > this.data[leftIndex + 1];
  }

  swap(leftIndex: number) {
    const leftElement = this.data[leftIndex];
    this.data[leftIndex] = this.data[leftIndex + 1];
    this.data[leftIndex + 1] = leftElement;
  }
}
