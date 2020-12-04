const { Node, LinkedList } = require('../singly/dsa-linkedlist');

function main() {
  const SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Boomer');
  SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');

  display(SSL);
  size(SSL);
  isEmpty(SSL);
  findPrevious(SSL, 'Starbuck');
  findLast(SSL);
  thirdFromEnd(SSL, 3);
  middleOfList(SSL);

  const CycleList = new LinkedList();

  CycleList.insertFirst('Achilles');
  CycleList.insertLast('Zeus');
  CycleList.insertLast('Hercules');

  display(CycleList);
  cycleList(CycleList);
}

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

function size(list) {
  let count = 0;
  let currNode = list.head;
  if (!currNode) {
    return null;
  }
  while (currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }
  return count;
}

function isEmpty(list) {
  let result;
  !list.head ? (result = true) : (result = false);
  console.log(result);
}

function findPrevious(list, item) {
  let currNode = list.head;

  if (!list.head) {
    return null;
  }

  while (currNode.next.value !== item) {
    currNode = currNode.next;
  }
  return console.log(currNode.value);
}

function findLast(list) {
  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return console.log(currNode.value);
}

function reverseList() {}

function thirdFromEnd(list, num) {
  let currNode = list.head;
  let i = 0;
  let count = size(list) - num;
  while (i < count) {
    currNode = currNode.next;
    i++;
  }
  return console.log(currNode.value);
}

function middleOfList(list) {
  let currNode = list.head;
  let i = 0;
  let count = Math.floor(size(list) / 2);
  while (i < count) {
    currNode = currNode.next;
    i++;
  }
  return console.log(currNode.value);
}

function cycleList(list) {
  let currNode = list.head;
  let map = {};
  while (currNode) {
    if (map[currNode.value]) {
      return { Found: currNode };
    } else {
      map[currNode.value] = true;
    }
    currNode = currNode.next;
  }
  console.log(map, false);
  return false;
}

function dblLink() {}

function dllReverse() {}

main();
