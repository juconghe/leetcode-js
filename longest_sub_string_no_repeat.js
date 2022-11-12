/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let leftPtr = 0;
   let rightPtr= 0;
   let max = 0;
   const lookup = new Set([]);
   while(rightPtr < s.length) {
        const current = s[rightPtr];
        while(lookup.has(current) && leftPtr <= rightPtr) {
            lookup.delete(s[leftPtr++]);
        }
        lookup.add(current);
        max = Math.max(max, lookup.size);
        rightPtr += 1;
   }
   return max;
};

const s = " ";

lengthOfLongestSubstring(s);