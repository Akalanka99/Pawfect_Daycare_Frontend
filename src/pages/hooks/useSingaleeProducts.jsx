import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic();

    const { data: products = [], isPending: loading, refetch } = useQuery({
        queryKey: ["products"], // ✅ Query key should match API structure
        queryFn: async () => {
            const res = await axiosPublic.get("/api/product"); // ✅ Matches backend route
            return res.data;
        },
    });

    return [products, loading, refetch]; // ✅ Returning correct data
};

export default useProducts;
