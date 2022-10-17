const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  }
}

class BinarySearchTree {
  
  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;
  }

  
  add(value) {
    this.rootNode = addWithin (this.rootNode, value);

    function addWithin (node, value) {
      if(!node) {
        return new Node(value);
      }
      if (node.value === value) {
        return node;
      }
      if (value < node.value) {
        node.left = addWithin (node.left, value);
      } else {
        node.right = addWithin (node.right, value);
      }
      return node;
    }
  }

  /*const newNode = new Node(value)

    if(!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while(currentNode) {
      if(newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if(!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }*/

  has(value) {
   return searchWithin (this.rootNode, value)

   function searchWithin (node, value) {
    if (!node) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    return value < node.value?
    searchWithin(node.left, value):
    searchWithin(node.right, value);
   }
  }

  find(value) {
    return findWithin(this.rootNode, value);

    function findWithin(node, value) {
      if (!node) {
        return null;
      } 
      else if(node.value === value) {
        return node;
      } 
      else if (node.value > value) {
        return findWithin (node.left, value);
      } 
      else {
        return findWithin (node.right, value);
      }
    }
  }
  
  remove(value) {
    this.rootNode = removeNode(this.rootNode, value);

    function removeNode(node, value) {
      if (!node) {
        return null
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
        node = node.right;
        return node;
      } 
      
        if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.value = minFromRight.value;

      node.right = removeNode(node.right, minFromRight.value);

      return node;
    }
  }
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;
    while(node.left) {
      node = node.left
    }
    return node.value;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    
    let node = this.rootNode;
    while(node.right) {
      node = node.right
    }
    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};

