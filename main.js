const { _Node, LinkedList } = require('./dsa-linkedlist');

function main() {
  const SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  //SSL.remove('squirrel');


  // insertBefore method
  SSL.insertBefore('Athena', 'Boomer');
  SSL.insertAfter('hotdog', 'Helo');
  SSL.insertAt('Kat', 3)
  size(SSL)
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

function size(list) {
  let count = 0;
  let currNode = list.head;

  while (currNode.next !== null) {
    count++;
    currNode = currNode.next;
  }
  return console.log(count);
}


main();




