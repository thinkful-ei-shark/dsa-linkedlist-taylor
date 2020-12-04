const { _Node, LinkedList } = require('./dsa-linkedlist');

function main() {
  const SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  //SSL.remove('squirrel');


  // insertBefore method
  // SSL.insertBefore('Athena', 'Boomer');
  // SSL.insertAfter('hotdog', 'Helo');
  // SSL.insertAt('Kat', 3)
  // findPrevious(SSL, 'Boomer')
  // size(SSL)
  // isEmpty(SSL)
  // display(SSL)
  // findLast(SSL)
  // size(SSL)
  // display(SSL)
  // fromEnd(SSL, 3)
  //display(SSL)
  //WhatDoesThisProgramDo(SSL)
  //middleOfList(SSL)



  const CycleList = new LinkedList();

  CycleList.insertFirst('Apollo');
  CycleList.insertLast('Boomer');
  CycleList.insertLast('Helo');
  CycleList.insertLast('Helo');
  CycleList.insertLast('Husker');
  CycleList.insertLast('Apollo');
  CycleList.insertLast('Starbuck');
  CycleList.insertLast('Tauhida');



  console.log(cycleList(CycleList))
}

// display: displays the linked list
function display(list) {
  let values = '';
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode.next !== null) {

    values += currNode.value + ' ';
    currNode = list.head;
  }
  values += currNode.value;
  cycleList(list)
  console.log(values);

}

// returns size of a list
function size(list) {
  if (!list.head) {
    return null;
  }
  let count = 0;
  let currNode = list.head;

  while (currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }
  return count;
}

// checks if list is empty
function isEmpty(list) {
  let result;
  (!list.head) ? result = true : result = false
  console.log(result)
}

function findPrevious(list, item) {
  let currNode = list.head;
  if (!list.head) {
    return null;
  }
  while (currNode.next.value !== item) {
    currNode = currNode.next;
    console.log('while loop')
  }
  return console.log(currNode.value)
}

function findLast(list) {

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return console.log(currNode.value)
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function fromEnd(list, num) {
  let currNode = list.head;
  let i = 0;
  let count = (size(list) - num)

  while (i < count) {
    currNode = currNode.next;
    i++;
  }
  console.log(currNode.value);
}

function middleOfList(list) {
  let currNode = list.head;
  let i = 0;
  let count = Math.floor(size(list) / 2);
  while (i < count) {
    currNode = currNode.next;
    i++;
  }
  return console.log(currNode.value)
}

function cyclecList(list) {
  let currNode = list.head;
  let map = {};
  while (currNode) {

  }
}

function cycleList(list) {
  let current = list.head;
  while (current !== null) {
    let listItem = current;
    while (listItem.next !== null) {
      if (current === listItem.next) {
        return true;
      } else {
        listItem = listItem.next;
      }
    }
    current = current.next;
  }
  return false
}

main();




