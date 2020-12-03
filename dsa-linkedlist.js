/* Create a linked list class
 */

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(newItem, item) {
    let prevNode = '???';
    let nextNode = prevNode.next;
    if (item === this.head) {
      this.insertFirst(newItem);
    } else {
      while (newItem.value !== item) {
        if (currNode.next === null) {
          return null;
        } else {
          currNode = currNode.next;
        }
        return currNode;
      }
    }

    // set variable for prev node ( let currentNode = this.find(item))
    // if statement
    // traverse to the current 'item'
    // create a new node given the 'newItem'
    // insert the 'newItem' before the 'item'
    // change the pointer of the previous node
    // to point to the new one
    // change the pointer of the new node to point to
    // the next one
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
      return currNode;
    }
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = {
  _Node,
  LinkedList,
};
