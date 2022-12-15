var Twitter = function () {
    this.tweets = new Map();
    this.followerMap = new Map();
    this.followeeMap = new Map();
    this.timer = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (this.tweets.has(userId)) {
        this.tweets.get(userId).unshift([tweetId, this.timer++]);
    } else {
        this.tweets.set(userId, [[tweetId, this.timer++]]);
    }
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let feed = [];
    if (this.tweets.has(userId)) {
        feed = this.tweets.get(userId).slice(0, 10);
    }
    if (this.followerMap.get(userId)) {
        const followers = this.followerMap.get(userId);
        for (const uId of followers) {
            if (this.tweets.has(uId)) {
                feed = feed.concat(this.tweets.get(uId).slice(0, 10));
            }
        }
    }
    return feed.sort((a, b) => b[1] - a[1]).map(v => v[0]).slice(0, 10);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (this.followerMap.has(followerId)) {
        this.followerMap.get(followerId).add(followeeId);
    } else {
        this.followerMap.set(followerId, new Set([followeeId]));
    }

    if (this.followeeMap.has(followeeId)) {
        this.followeeMap.get(followeeId).add(followerId);
    } else {
        this.followeeMap.set(followeeId, new Set([followerId]));
    }
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.followerMap.has(followerId)) {
        this.followerMap.get(followerId).delete(followeeId);
    }

    if (this.followeeMap.has(followeeId)) {
        this.followeeMap.get(followeeId).delete(followerId);
    }
};

const twitter = new Twitter();
twitter.postTweet(1, 5);
twitter.postTweet(1, 3);
twitter.getNewsFeed(1);