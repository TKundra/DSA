let LRUCacheUsingMap = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.size = 0;
}

LRUCacheUsingMap.prototype.get = function (key) {
    if (this.cache.has(key)) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    } else {
        return -1;
    }
}

LRUCacheUsingMap.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        if (this.cache.size > 1) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
    } else if (this.capacity === this.size) {
        const [firstKey] = this.cache.keys();
        this.cache.delete(firstKey);
        this.cache.set(key, value);
    } else {
        this.cache.set(key, value);
        this.size++;
    }
}

LRUCacheUsingMap.prototype.print = function () {
    return Array.from(this.cache)
}

/* O(1) - time complexity, O(n) - space complexity */

const cache = new LRUCacheUsingMap(4);