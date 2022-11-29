
var TimeMap = function() {
    this.lookup = Object.create(null);

    this.search = function(nums, timestamp) {
        let low = 0;
        let high = nums.length;
        while(low < high) {
            const mid = Math.floor((low + high) / 2);
            if (timestamp < nums[mid][0]) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return high;
    };
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.lookup[key]) {
        this.lookup[key] = [];
    }
    this.lookup[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.lookup[key]) return '';
    if (timestamp < this.lookup[key][0][0]) return '';
    const index = this.search(this.lookup[key], timestamp);
    if (index === 0) return '';
    return this.lookup[key][index - 1][1];
};

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5); 