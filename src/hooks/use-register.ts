
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import type { AuthResponseModel, RegisterPayloadModel } from "../types/auth-model";
import { axiosInstance } from "../lib/utils";
import useAuthStore from "../store/use-Auth-store";

const useRegister = () => {
  const navigate = useNavigate();
  const { setId, setUserName, setEmail, setSex } = useAuthStore();

  return useMutation({
    mutationFn: async (payload: RegisterPayloadModel) => {
      const res = await axiosInstance.post<
        RegisterPayloadModel,
        AxiosResponse<AuthResponseModel>
      >("/users", payload);

      setId(res.data._id);
      setUserName(res.data.username);
      setEmail(res.data.email);
      setSex(res.data.sex);

      return res.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("welcome");
    },
    onError: () => {
      toast.error("register was unsuccessful");
    },
  });
};

export default useRegister;
