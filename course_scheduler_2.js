function ListNode(val) {
    this.val = val;
    this.nextCourse = [];
    this.preReq = [];
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var findOrder = function(numCourses, prerequisites) {
    const map = new Map();
    const frontier = new Set([]);
    const result = [];

    // initialize course
    for (let i = 0; i < numCourses; i++) {
        if (!map.has(i))  map.set(i, new ListNode(i));
    }
    
    // map prerequisites
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, preReq] = prerequisites[i];
        const courseNode = map.get(course);
        const preReqNode = map.get(preReq);
        courseNode.preReq.push(preReqNode);
        preReqNode.nextCourse.push(courseNode);
    }

    const queue = Array.from(map.values()).filter(v => v.preReq.length === 0);
    let count = 0;
    while(queue.length && result.length < numCourses) {
        const current = queue.shift();
        frontier.add(current.val);
        current.nextCourse.forEach(v => {
            if (!frontier.has(v.val) && v.preReq.every(v => frontier.has(v.val))) {
                queue.push(v);
            };
        });
        result.push(current.val);
    }
    return result.length === numCourses ? result : [];
};

const numCourses = 4;
const prerequisites = [[1,0],[2,0],[3,1],[3,2]];
findOrder(numCourses, prerequisites);