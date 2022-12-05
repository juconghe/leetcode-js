const { input, result } = require('./lru_test');
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.lookup = new Map();
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.lookup.has(key)) {
        // remove node from the linkedlist
        const node = this.lookup.get(key);
        if (node === this.head) return node.value;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

        this.head.prev = this.tail;
        this.tail.next = this.head;
        return node.value;
    } else {
        return -1;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.lookup.has(key)) {
        // remove node from the linkedlist
        const node = this.lookup.get(key);
        node.value = value;
        if (node === this.head) {
            node.value = value;
            return;
        }
        node.prev.next = node.next;
        node.next.prev = node.prev;
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;

        this.head.prev = this.tail;
        this.tail.next = this.head;
    } else {
        if (this.lookup.size === this.capacity) {
            const evictKey = this.tail.key;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = null;
            } else {
                const temp = this.tail;
                this.tail = this.tail.prev;
                temp.prev.next = temp.next;
                this.head.prev = this.tail;
            }
            this.lookup.delete(evictKey);
        }
        const node = {
            value,
            key,
            prev: null,
            next: null
        };
        if (this.head && this.tail) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }
        this.head.prev = this.tail;
        this.tail.next = this.head;
        this.lookup.set(key, node);
    }
};

const lRUCache = new LRUCache(3000);
input.forEach((v, i) => {
    if (v === 'put') {
        lRUCache.put(result[i][0], result[i][1]);
    } else if (v === 'get') {
        lRUCache.get(result[i][0]);
    }
});

console.log(lRUCache);
