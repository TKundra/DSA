package stack_queue;

import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

/*
size of cache 3
1 2 3
put 4
2 3 4 (1 removed as it's least recently used)
*/
public class LRUCache {

    int capacity;
    LinkedHashMap<Integer, Integer> cache;
    // LinkedHashMap maintains doubly linked list and insertion order i.e HashMap result in random order where LinkedHashMap maintains order of insertion

    LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new LinkedHashMap<>();
    }

    void put(int key, int value) {
        if (cache.containsKey(key))
            cache.remove(key);
        else {
            if (capacity == cache.size()) {
                int last_key = cache.keySet().iterator().next();
                cache.remove(last_key);
            }
        }
        cache.put(key, value);
    }

    int get(int key) {
        if (!cache.containsKey(key))
            return -1;
        int value = (int)cache.get(key);
        cache.remove(key);
        cache.put(key, value);
        return value;
    }

    void print(){
        Set<Integer> keys = cache.keySet();
        for (Integer key : keys)
            System.out.print(cache.get(key) + " ");
    }

    public static void main(String[] args) {
        LRUCache lrucCache = new LRUCache(3);
        lrucCache.put(1, 1200);
        lrucCache.put(2, 2200);
        lrucCache.put(1, 3200);
        lrucCache.print();
        lrucCache.put(4, 4200);
        System.out.println();
        lrucCache.print();
    }
}

// ------------------------------ using overriden method removeEldestEntry() to remove oldest mapping when size goes above CAPACITY

class LRU {
    private LinkedHashMap<Integer, Integer> map;
    private final int CAPACITY;

    public LRU(int capacity) {
        this.CAPACITY = capacity;
        this.map = new LinkedHashMap<Integer, Integer>(capacity, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
                return size() > CAPACITY;
            }
        };
    }

    public int get(int key) {
        return map.getOrDefault(key, -1);
    }

    public void set(int key, int value) {
        map.put(key, value);
    }   
}

class Program {
    public static void main(String[] args) {
        LRU cache = new LRU(3);
        cache.set(1, 100);
        cache.set(2, 200);
        cache.set(2, 250);
        cache.set(3, 300);
        cache.set(4, 400);
        System.out.println(cache.get(2));
        System.out.println(cache.get(4));
    }
}