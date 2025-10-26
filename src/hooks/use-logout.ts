import { axiosInstance } from "@/lib/utils";
import useAuthStore from "@/store/use-Auth-store";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const useLogout = () => {
    const reset = useAuthStore((state) => state.reset);
    const navigate = useNavigate();


    return useMutation({
        mutationFn: () => axiosInstance.post("/users/logout"),
        onSuccess: () => {
            reset();
            toast.success("You logged out successfully");
            navigate("/auth");
        },
        onError: () => {
            reset();
            toast.error("Something went wrong during logout");
            navigate("/auth");

        }
    })
};
export default useLogout