function TrieNode(val) {
    this.val = val;
    this.isTerminal = false;
    this.children = [];
}

var WordDictionary = function () {
    this.root = new TrieNode(null);

    /**
     * 
     * @param {TrieNode} node 
     * @param {string} word 
     * @returns {boolean}
     */
    this.searchHelper = (node, word) => {
        if (word.length === 0) return node.isTerminal;
        const children = node.children;
        for (let i = 0; i < children.length; i++) {
            if (word[0] === '.') {
                if (this.searchHelper(children[i], word.slice(1))) {
                    return true;
                }
            } else if (word[0] === children[i].val) {
                 return this.searchHelper(children[i], word.slice(1));
            }
        }
        return false;
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let current = this.root;
    let i = 0;
    while (i < word.length) {
        const node = current.children.find(v => v.val === word[i]);
        if (node) {
            current = node;
        } else {
            const newNode = new TrieNode(word[i]);
            current.children.push(newNode);
            current = newNode;
        }
        i += 1;
    }
    current.isTerminal = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.searchHelper(this.root, word);
};

const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True