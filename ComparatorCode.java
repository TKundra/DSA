import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

/*
 * comparator pass at runtime when you don't want natural ordering
 * one class can have multiple comparator
 * allow precise control over sort order
*/

class Movie implements Comparable<Movie> {
    private double rating;
    private String name;
    private int year;
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
        return obj.year - this.year; // descending order
    }
    /* getters to access private elements */
    public int getYear(){ return this.year; }
    public double getRating() { return rating; }
    public String getName() { return name; }
}

class NameComparator implements Comparator<Movie> {
    @Override
    public int compare(Movie o1, Movie o2) {
        return o1.getName().compareTo(o2.getName()); // ascending order
    }
}

class RatingComparator implements Comparator<Movie> {
    @Override
    public int compare(Movie o1, Movie o2) {
        if (o1.getRating() > o2.getRating())
            return 1;
        else if (o1.getRating() < o2.getRating())
            return -1;
        return 0;
    }
}

public class ComparatorCode {
    public static void main(String[] args) {
        ArrayList<Movie> movies = new ArrayList<Movie>();
        movies.add(new Movie(4.5, "ABC", 2018));
        movies.add(new Movie(4.9, "WXY", 2020));
        movies.add(new Movie(3.2, "PQR", 2019));

        Collections.sort(movies);
        System.out.println("by year: " + movies.toString());

        NameComparator nameComparator = new NameComparator();
        Collections.sort(movies, nameComparator);
        System.out.println("name based: " + movies.toString());

        RatingComparator ratingComparator = new RatingComparator();
        Collections.sort(movies, ratingComparator);
        System.out.println("rating based: " + movies.toString());
    }
}
