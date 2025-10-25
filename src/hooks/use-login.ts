import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuthStore from "../store/use-Auth-store";
import type { AuthResponseModel, LoginPayloadModel } from "./types/auth-model";
import { axiosInstance } from "../lib/utils";

const useLogin = () => {
  const navigate = useNavigate();
  const { setId, setUserName} = useAuthStore();

  return useMutation({
    mutationFn: async (payload: LoginPayloadModel) => {
      const res = await axiosInstance.post<
        LoginPayloadModel,
        AxiosResponse<AuthResponseModel>
      >("/users/auth", payload);

      setId(res.data._id);
      setUserName(res.data.username);

      return res.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("Welcome");
    },
    onError() {
      toast.error("Login unsuccessfull");
    },
  });
};

export default useLogin;
