import java.util.LinkedHashMap;
import java.util.Set;

/*
size of cache 3
1 2 3
put 4
2 3 4 (1 removed as it's least recently used)
*/
public class LRUCache {

    int capacity;
    LinkedHashMap<Integer, Integer> cache; // LinkedHashMap maintains doubly linked list and insertion order

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
