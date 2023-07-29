import { Sorter } from "./Sorter";

class LinkedListNode {
  value: number;
  next: LinkedListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class LinkedListCollection extends Sorter {
  head: LinkedListNode | null = null;

  get length() {
    if (!this.head) {
      return 0;
    }

    let currentNode = this.head;
    let length = 1;
    while (currentNode.next) {
      length++;
      currentNode = currentNode.next;
    }

    return length;
  }

  compare(leftIndex: number): boolean {
    if (!this.head) {
      return false;
    }

    const leftElement = this.at(leftIndex);
    const rightElement = leftElement?.next;

    if (!leftElement || !rightElement) {
      return false;
    }
    return leftElement.value > rightElement.value;
  }

  swap(leftIndex: number): void {
    // Small cheating (or optimisation) - it swaps node values, not nodes itself

    const leftElement = this.at(leftIndex);
    const rightElement = leftElement?.next;

    if (!leftElement || !rightElement) return;

    const leftValue = leftElement.value;
    leftElement.value = rightElement.value;
    rightElement.value = leftValue;
  }

  push(value: number): void {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  at(index: number): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      if (!currentNode.next) {
        return null;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  print(): void {
    if (!this.head) return;

    let currentNode: LinkedListNode | null = this.head;
    let values: number[] = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" => "));
  }
}
