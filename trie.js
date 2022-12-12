const { input, expected, action } = require('./trie_test_data');
function TrieNode(val) {
    this.val = val;
    this.isTerminal = false;
    this.children = [];
}

var Trie = function () {
    this.root = new TrieNode(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
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
Trie.prototype.search = function (word) {
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
        const newNode = node.children.find(v => v.val === word[i]);
        if (newNode) {
            node = newNode;
        } else {
            return false;
        }
    }

    return node.isTerminal;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for(let i = 0; i < prefix.length; i++) {
        const newNode = node.children.find(v => v.val === prefix[i]);
        if (newNode) {
            node = newNode;
        } else {
            return false;
        }
    }
    return true;
};

const trie = new Trie();
for (let i = 1; i < action.length; i++) {
    const a = action[i];
    const ipt = input[i][0];
    const e = expected[i];
    if (a === 'insert') {
        trie.insert(ipt);
    } else if (a === 'search') {
        const r = trie.search(ipt);
        if (r !== e) {
            console.log('error');
        }
    } else {
        const r = trie.startsWith(ipt);
        if (r !== e) {
            console.log('error');
        }
    }
}
