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
  display(SSL)
  WhatDoesThisProgramDo(SSL)
  display(SSL)
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
    currNode = currNode.next;
  }
  values += currNode.value;
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
  return console.log(count);
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

main();




