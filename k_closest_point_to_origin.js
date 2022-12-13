/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const list = [];
    const compareFunc = (a, b) => {
        return (Math.pow(b[0], 2) + Math.pow(b[1], 2)) - (Math.pow(a[0] , 2) + Math.pow(a[1], 2));
    }
    for (let i = 0; i< points.length; i++) {
        const current = points[i];
        if (list.length < k) {
            list.push(current);
            list.sort(compareFunc);
        } else if (
            (Math.pow(current[0] , 2) + Math.pow(current[1], 2)) <
            (Math.pow(list[0][0], 2) + Math.pow(list[0][1], 2))
        ) {
            list.shift();
            list.push(current);
            list.sort(compareFunc);
        }
    }
    return list;
};

const points = [[3,3],[5,-1],[-2,4]];
const k = 2;

kClosest(points, k);