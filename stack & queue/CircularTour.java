
public class CircularTour {
    // (amount of petrol, distance from another pump)
    static class PetrolPump{
        int petrol;
        int distance;
        PetrolPump(int petrol, int distance){
            this.petrol = petrol;
            this.distance = distance;
        }
    }

    static int tour(PetrolPump[] petrolPumps, int n){
        int start = 0;
        int end = 1;
        int current_petrol = petrolPumps[start].petrol - petrolPumps[start].distance;
        /*  If current amount of petrol in truck becomes less than 0, then
            remove the starting petrol pump from tour */
        while (current_petrol<0 || end!=start){
            /*  If current amount of petrol in truck becomes less than 0, then
                remove the starting petrol pump from tour */
            while (current_petrol<0 && start!=end){
                /* (making current_petrol zero), update start */
                current_petrol -= petrolPumps[start].petrol - petrolPumps[start].distance;
                start = (start + 1) % n;
                /*  If 0 is being considered as start again, then there is no
                    possible solution */
                if(start == 0)
                    return -1;
            }
            /* Add a petrol pump to current tour */
            current_petrol += petrolPumps[end].petrol - petrolPumps[end].distance;
            end = (end + 1)%n;
        }
        /* Return starting point */
        return start;
    }

    public static void main(String[] args) {
        PetrolPump[] petrolPumps = {
            new PetrolPump(4, 6),
            new PetrolPump(6, 5),
            new PetrolPump(7, 3),
            new PetrolPump(4, 5)
        };
        int start = tour(petrolPumps, petrolPumps.length);
        System.out.println(start == -1 ? "No Solution" : "Start = " + start);
    }
}
