import { useState, type FormEvent } from "react";
import useLogin from "../hooks/use-login";
import useRegister from "../hooks/use-register";
import toast from "react-hot-toast";
import { LucideLoader2 } from "lucide-react";
import type { AuthMode } from "@/PrivateRoutes";

interface IAuthFormProps {
  mode: AuthMode;
}

const AuthForm: React.FC<IAuthFormProps> = ({ mode }) => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
    sex: "female",
  });

  const { mutate: loginMutate, status: loginStatus } = useLogin();
  const { mutate: registerMutate, status: registerStatus } = useRegister();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (mode === "register") {
      const { username, email, password, re_password, sex } = formValues;
      if (
        username.trim() &&
        email.trim() &&
        password.trim() &&
        re_password.trim() &&
        sex
      ) {
        if (password !== re_password) {
          toast.error("Passwords don't match");
          return;
        }
        registerMutate({ username, email, password, re_password, sex });
      } else {
        toast.error("Please fill all fields");
      }
    } else {
      const { username, password } = formValues;
      if (username.trim() && password.trim()) {
        loginMutate({ username, password });
      } else {
        toast.error("Please fill all fields");
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={formValues.username}
          onChange={(e) =>
            setFormValues({ ...formValues, username: e.target.value })
          }
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-600 dark:text-gray-300"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {mode === "register" && (
        <div className="flex flex-col gap-2">
          <label
            htmlFor="re_password"
            className="text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Confirm Password
          </label>
          <input
            id="re_password"
            type="password"
            placeholder="Confirm password"
            value={formValues.re_password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                re_password: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
          />
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <label
            htmlFor="sex"
            className="text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Sex
          </label>
          <select
            id="sex"
            value={formValues.sex}
            onChange={(e) =>
              setFormValues({ ...formValues, sex: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition flex justify-center items-center gap-2 font-medium"
      >
        {loginStatus === "pending" || registerStatus === "pending" ? (
          <LucideLoader2 className="animate-spin w-4 h-4" />
        ) : null}
        {mode === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;
