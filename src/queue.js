const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

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
      object = {
      value: null,
      next: null
    }

  getUnderlyingList() {
    return this.object;
  }

  enqueue(value) {
    let obj = this.object;
    while(obj.next) {
      obj = obj.next;
    }
    if(obj.value) {
      obj.next = {
        value: value,
        next: null
      }
    } else {
      obj.value = value;
    }
    return this;
  }

  dequeue(value) {
    let node = this.object;
    this.object = node.next;
    return node.value;
  }
}


module.exports = {
  Queue
};
