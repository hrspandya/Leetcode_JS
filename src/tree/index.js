import React from 'react';
/**
 * 
 * Look at your java solution for reference
 * 
 * 
 * */

class SolutionClass extends React.Component {
    render() {
        debugger;

        /**
         * Tree Node
         */
        class Node {
          constructor(value) {
            this.value = value;
            this.leftNode = null;
            this.rightNode = null;
          }

          displayNode() {
            console.log(this.value);
          }
        }

        class Tree {
          constructor() {
            this.root = null;
          }

          insert(value) {
            const node = new Node(value);

            if (this.root == null) {
              this.root = node;
            } else { 
              let current = this.root;
              let parent = this.root;

              while (true) {
                if (value < parent.value) {
                  current = parent.leftNode;
                  if (current === null) {
                    parent.leftNode = node;
                    return;
                  } else {
                    parent = current;
                  }
                } else {
                  current = parent.rightNode;
                  if (current === null) {
                    parent.rightNode = node;
                    return;
                  } else {
                    parent = current;
                  }
                }
              }
            }
          }

          inAscOrderTraversal() {
            function inAscOrder(node) {
              if (node === null) {
                return;
              } else {
                inAscOrder(node.leftNode);
                result.push(node.value);
                inAscOrder(node.rightNode);
              }
            }

            let result = [];
            inAscOrder(this.root);
            return result;
          }

          inDescOrderTraversal() {
            function inDescOrder(node) {
              if (node === null) {
                return;
              } else {
                inDescOrder(node.rightNode);
                result.push(node.value);
                inDescOrder(node.leftNode);
              }
            }

            let result = [];
            inDescOrder(this.root);
            return result;
          }

          findMaximum() {
            // to find maximum go all the way to right
            // if right is null, parent is answer
            function findMax(node) {
              if (node === null) {
                return null;
              } else {
                let parent = node;
                let current = node;

                while(true) {
                  current = parent.rightNode;
                  if (current === null) {
                    return parent.value;
                  } else {
                    parent = current;
                  }
                }
              }
            }

            return findMax(this.root);
          }


          findMinimum() {
            function findMin(node) {
              if (node === null) {
                return null;
              } else {
                let current = node;
                let parent = node;

                while (true) {
                  current = parent.leftNode;
                  if (current === null) {
                    return parent.value;
                  } else {
                    parent = current;
                  }
                }
              }
            }

            return findMin(this.root);
          }

          search(value) {
            // since this is binary search tree, 
            // you check search value smaller then go left, otherwise go right
            function find (node, value) {
              if (!value || node === null) {
                return false;
              } else {
                let current = node;
                let parent = node;

                while (true) {
                  if (parent.value === value) {
                    return true;
                  }

                  if (value < parent.value) {
                    current = parent.leftNode;
                    if (current === null) {
                      return false;
                    } else {
                      parent = current;
                    }
                  } else {
                    current = parent.rightNode;
                    if (current === null) {
                      return false;
                    } else {
                      parent = current;
                    }
                  }
                }
              }

            }

            return find(this.root, value);
          }

          isBST() {
            function _isBST(node) {
              if (node != null && node.leftNode != null && node.leftNode.value < node.value && !_isBST(node.leftNode)) {
                return false;
              }

              if (node != null && node.rightNode != null && node.rightNode.value > node.value && !_isBST(node.rightNode)) {
                return false;
              }

              return true;
            }

            return _isBST(this.root);
          }

          getHeight() {
            function _getHeight(node) {
              if (node === null) {
                return 0;
              } else {
                // go all the way to left, calc height
                // go all the way to right, calc height
                // Math.max(leftHeight, rightHeight);
                let leftHeight = _getHeight(node.leftNode);
                let rightHeight = _getHeight(node.rightNode);
                return Math.max(leftHeight, rightHeight) + 1;
              }
            }

            return _getHeight(this.root);
          }

          // Pre requisite of creating Minimal BST is to have sorted Array and no duplicates
          createMinimalBST(array) {
            function _createMinimalBST(array, start, end) {
              if (array != null && array.length > 0) {
                if (start > end) {
                  return;
                } else {
                  const mid = (start + end) / 2;
                  const node = new Node(array[mid]);

                  node.leftNode = _createMinimalBST(array, start, mid - 1);
                  node.rightNode = _createMinimalBST(array, mid + 1, end);

                  return node;
                }
              } else {
                return null;
              }
            }

            if (array != null && array.length > 0) {
              let start = 0;
              let end = array.length - 1;
              return _createMinimalBST(array, start, end);
            } else {
              return null;
            }            
          }

        }

        const tree = new Tree();
        tree.insert(4);
        tree.insert(2);
        tree.insert(3);
        tree.insert(1);
        tree.insert(6);
        tree.insert(5);
        tree.insert(7);

        console.log(tree);

        console.log("in Asc order ", tree.inAscOrderTraversal());

        console.log("in Desc order ", tree.inDescOrderTraversal());

        console.log("Find Maxium ", tree.findMaximum());

        console.log("Find Minimum ", tree.findMinimum());

        console.log("Search 5 ", tree.search(5));
        console.log("Search 10 ", tree.search(10));

        console.log("is BST ", tree.isBST());

        console.log("get Height ", tree.getHeight());

        console.log("Create Minimal BST ", tree.createMinimalBST([1, 2, 3, 4, 5, 6, 7]));


        return (
            <div className="problem">
                <div className="title">
                    Tree data structure
                </div>
                <pre>{`
                
                `}</pre>

                <div className="solution">
                    Solution:  
                    <br />
                </div>
            </div>
        );
    }
}

export default SolutionClass;