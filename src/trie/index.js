import React from 'react';
/**
 * 
 * https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0
 * 
 * 
consider all usecases then it is simple solution to write
check out my javascript solution

if both are empty return true;
if only one of them is empty then return false;
if both are non-empty, go further and write code

text / pattern
"" / a      false
"" / *      true
a / a       true
aa / a*     true
ab / a.     true
ab / .b     true     
ab / .*     true
aaa / .*    true
aaa / a*    true
aaa / c*a*  true
aaa / c*.*  true
 */

/**
 * 
 * @param {*} text 
 * @param {*} pattern 
 */
function isMatch(text, pattern) {
    if (!pattern && !text) {
        return true;
    } else if (!pattern && text) {
        return false;
    }
    
    //write code
    const first_match = (text && text.charAt(0) === pattern.charAt(0) || pattern.charAt(0) === ".");
    if (pattern.length >= 2 && pattern.charAt(1) === "*") {
        if (isMatch(text, pattern.substring(2))) {
            return true;
        } else if (first_match && isMatch(text.substring(1), pattern)) {
            return true;
        } else {
            return false;
        }

    } else {
        return (first_match && isMatch(text.substring(1), pattern.substring(1)));
    }
}

class SolutionClass extends React.Component {
    render() {
        debugger;

        // Trie.js - super simple JS implementation
// https://en.wikipedia.org/wiki/Trie

// -----------------------------------------

// we start with the TrieNode
function TrieNode(key) {
    // the "key" value will be the character in sequence
    this.key = key;
    
    // we keep a reference to parent
    this.parent = null;
    
    // we have hash of children
    this.children = {};
    
    // check to see if the node is at the end
    this.end = false;
  }
  
  // iterates through the parents to get the word.
  // time complexity: O(k), k = word length
  TrieNode.prototype.getWord = function() {
    var output = [];
    var node = this;
    
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
    
    return output.join('');
  };
  
  // -----------------------------------------
  
  // we implement Trie with just a simple root with null value.
  function Trie() {
    this.root = new TrieNode(null);
  }
  
  // inserts a word into the trie.
  // time complexity: O(k), k = word length
  Trie.prototype.insert = function(word) {
    var node = this.root; // we start at the root 😬
    
    // for every character in the word
    for(var i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (!node.children[word[i]]) {
        // if it doesn't exist, we then create it.
        node.children[word[i]] = new TrieNode(word[i]);
        
        // we also assign the parent to the child node.
        node.children[word[i]].parent = node;
      }
      
      // proceed to the next depth in the trie.
      node = node.children[word[i]];
      
      // finally, we check to see if it's the last word.
      if (i == word.length-1) {
        // if it is, we set the end flag to true.
        node.end = true;
      }
    }
  };
  
  // check if it contains a whole word.
  // time complexity: O(k), k = word length
  Trie.prototype.contains = function(word) {
    var node = this.root;
    
    // for every character in the word
    for(var i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false;
      }
    }
    
    // we finished going through all the words, but is it a whole word?
    return node.end;
  };
  
  // returns every word with given prefix
  // time complexity: O(p + n), p = prefix length, n = number of child paths
  Trie.prototype.find = function(prefix) {
    var node = this.root;
    var output = [];
    
    // for every character in the prefix
    for(var i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // there's none. just return it.
        return output;
      }
    }
    
    // recursively find all words in the node
    findAllWords(node, output);
    
    return output;
  };
  
  // recursive function to find all words in the given node.
  function findAllWords(node, arr) {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }
    
    // iterate through each children, call recursive findAllWords
    for (var child in node.children) {
      findAllWords(node.children[child], arr);
    }
  }
  
  // -----------------------------------------
  
  // instantiate our trie
  var trie = new Trie();
  
  // insert few values
  trie.insert("hello");
  trie.insert("helium");
  
  // check contains method
  console.log(trie.contains("helium"));  // true
  console.log(trie.contains("kickass")); // false
  
  // check find method
  console.log(trie.find("hel"));  // [ 'helium', 'hello' ]
  console.log(trie.find("hell")); // [ 'hello' ]

        return (
            <div className="problem">
                <div className="title">
                    Trie data structure
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