const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
/*
class Queue {*/

  class Queue {

    constructor () {
    this.elements = {};
    this.head = null;
    this.tail = null;
    }

  getUnderlyingList() {
    return this.elements[this.head];
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  dequeue(element) {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
  }
  
}


module.exports = {
  Queue
};
