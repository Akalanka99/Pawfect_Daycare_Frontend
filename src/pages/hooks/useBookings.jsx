import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useBookings = () => {
    const axiosPublic = useAxiosPublic();

    const { data: bookings = [], isPending: loading, refetch } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await axiosPublic.get("/api/cage-bookings"); 
            return res.data;
        },
    });

    return [bookings, loading, refetch]; 
};

export default useBookings;
