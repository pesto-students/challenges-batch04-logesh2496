import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    this.head = new LinkListNode(value, this.head);
  }

  append(value) {
    const newNode = new LinkListNode(value);
    let pointer = this.head;
    if (!pointer) {
      this.head = newNode;
      return;
    }
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }
  /*
    this.head = linked list . value
                            . next = 
  */
  delete(value) {
    // code here
    let prevNode;
    let pointer = this.head;
    if (!pointer) {
      return;
    }
    if (pointer.value === value) {
      this.head = pointer.next;
    }
    while (pointer && pointer.value !== value) {
      prevNode = pointer;
      pointer = pointer.next;
    }
    if (!pointer) {
      return;
    }
    prevNode.next = pointer.next;
  }

  traverse() {
    // code here
  }

  contains(value) {
    let pointer = this.head;
    if (!pointer) {
      return;
    }
    while (pointer && pointer.value !== value) {
      pointer = pointer.next;
    }
    return pointer && pointer.value === value;
  }

  length() {
    let length = 0;
    let pointer = this.head;
    while (pointer) {
      pointer = pointer.next;
      length += 1;
    }
    return length;
  }
}
