// Your task is to create a simple linked list implementation.
// You can find the theory in Wikipedia: https://en.wikipedia.org/wiki/Linked_list
// LinkedList should support insertion (simple and after / before node), deletion and search
// Once you are done with this you should create a double linked list. What's the benefit in that?
// Other extension goals: Circular Linked List, Circular Double Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  add(value) {
    var node = new Node(value);
    var currentNode = this.head;

    if (!currentNode) {
      this.head = node;
      this.tail = node;
      this._length++;

      return node;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.tail = node;
    this._length++;

    return node;
  }

  insertBefore(position, value) {
    var currentNode = this.head;
    var beforeInsertedNode = null;
    var node = new Node(value);
    var count = 1;

    if (position > this._length || position < 1) {
      throw new Error("Node can not be inserted after this position");
    }

    if (position === 1) {
      node.next = currentNode;
      this.head = node;
      this._length++;

      return this._length;
    }

    while (count < position) {
      beforeInsertedNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    beforeInsertedNode.next = node;
    node.next = currentNode;
    this._length++;

    return this._length;
  }

  insertAfter(position, value) {
    var currentNode = this.head;
    var node = new Node(value);
    var reattachNode = null;
    var count = 1;

    if (position > this._length || position < 1) {
      throw new Error("Node can not be inserted after this position");
    }

    while (count < position) {
      currentNode = currentNode.next;
      reattachNode = currentNode.next;
      count++;
    }

    node.next = reattachNode;
    currentNode.next = node;
    this._length++;

    if (node.next === null) {
      this.tail = node;
    }

    return this._length;
  }

  remove(position) {
    var currentNode = this.head;
    var beforeDeletedNode = null;
    var deletedNode = null;
    var count = 1;

    if (position > this._length || position < 1) {
      throw new Error("Node does not exist at this position");
    }

    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this._length--;

      return deletedNode;
    }

    while (count < position) {
      beforeDeletedNode = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    beforeDeletedNode.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;

    return deletedNode;
  }

  searchNodeAt(position) {
    var currentNode = this.head;
    var count = 1;

    if (this._length === 0 || position > this._length || position < 1) {
      throw new Error("Node does not exist at this position");
    }

    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }
}
