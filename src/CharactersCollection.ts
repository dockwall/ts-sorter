import type { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number): boolean {
    return this.data[leftIndex].localeCompare(this.data[leftIndex + 1]) > 0;
  }

  swap(leftIndex: number): void {
    const characters = this.data.split("");
    const leftElement = characters[leftIndex];

    characters[leftIndex] = characters[leftIndex + 1];
    characters[leftIndex + 1] = leftElement;

    this.data = characters.join("");
  }
}
