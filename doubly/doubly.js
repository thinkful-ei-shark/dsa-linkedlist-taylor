const { DLinkedList } = require('../doubly/dsa-doubly-linkedlist');

function mainDLL() {
  const DLL = new DLinkedList();

  DLL.insertFirst('Xena');
  DLL.insertLast('Kent');
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertAt('Tauron', 5);
  DLL.remove('Picon');

  display(DLL);
  reverse(DLL);
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

function reverse(list) {
  let currNode = list.head;

  while (currNode.next !== null) {
    list.insertFirst(currNode.next.value);
    currNode = currNode.next;
  }
}

mainDLL();
