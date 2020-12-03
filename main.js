const { Node, LinkedList } = require('./dsa-linkedlist');

function main() {
  const SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
//   SSL.insertBefore('Athena', 'Boomer');

  console.log(SSL.head);
}

main();
