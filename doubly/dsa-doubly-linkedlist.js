const { _Node } = require('../singly/dsa-linkedlist');

class DLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    let node = new _Node(item, this.head, null);
    if (this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }

  insertLast(item) {
    let node = new _Node(item, null, this.tail);
    if (this.head === null) {
      this.head = node;
    }

    if (this.tail !== null) {
      this.tail.next = node;
    }
    this.tail = node;
  }

  insertBefore(newItem, item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.next.value !== item) {
      if (currNode.next.value === null) {
        this.insertFirst(newItem);
      } else {
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newItem, currNode.next, currNode);
  }

  insertAfter(newItem, item) {
    let currNode = this.head;
    if (!this.head) {
      this.insertFirst(newItem);
    }

    while (currNode.value !== item) {
      if (currNode.next.value === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    currNode.next = new _Node(newItem, currNode.next);
  }

  insertAt(item, pos) {
    let i = 0;
    let currNode = this.head;

    if (pos === 0) {
      this.insertFirst(item);
    }
    if (!this.head) {
      return null;
    }
    while (i < pos) {
      currNode = currNode.next;
      i++;
    }
    this.insertBefore(item, currNode.value);
  }

  find(item) {
    let currNode = this.head;
    if (!this.tail) {
      return null;
    }
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.prev === null) {
        return null;
      } else {
        currNode = currNode.prev;
      }
      return currNode;
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let prevNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
    currNode.next.prev = prevNode;
  }
}

module.exports = {
  DLinkedList,
};
