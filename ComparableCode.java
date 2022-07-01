import java.util.ArrayList;
import java.util.Collections;

/*
 * when you compare instance of same class.
 * implemented by class which needs to define natural ordering for its objects.
 * time complexity - either O(1) or O(2^n) depending upon implementation
*/

class Movie implements Comparable<Movie> {
    double rating;
    String name;
    int year;
    Movie(double rating, String name, int year) {
        this.rating = rating;
        this.name = name;
        this.year = year;
    }
    @Override
    public String toString() {
        return "details: " + this.year + " " + this.rating + " " + this.name;
    }
    @Override
    public int compareTo(Movie obj) {
        // return +1 : current object (this._) is smaller than obj
        // return -1 : current object (this._) is large than obj
        // return 0 : current object (this._) is equals to obj
        return this.year - obj.year; // ascending order
    }
}

public class ComparableCode {
    public static void main(String[] args) {
        ArrayList<Movie> movies = new ArrayList<Movie>();
        movies.add(new Movie(4.5, "ABC", 2018));
        movies.add(new Movie(4.9, "WXY", 2020));
        movies.add(new Movie(3.2, "PQR", 2019));

        Collections.sort(movies);

        System.out.println(movies.toString());

    }
}
