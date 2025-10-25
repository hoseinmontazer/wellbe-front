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
    confirm_Password: "",
  });

  const { mutate: loginMutate, status: loginStatus } = useLogin();
  const { mutate: registerMutate, status: registerStatus } = useRegister();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (mode === "register") {
      const { username, email, password, confirm_Password } = formValues;
      if (
        username.trim() &&
        email.trim() &&
        password.trim() &&
        confirm_Password.trim()
      ) {
        registerMutate({ username, email, password, confirm_Password });
      } else {
        toast.error("Please fill all fields");
      }
    } else {
      const { email, password } = formValues;
      if (email.trim() && password.trim()) {
        loginMutate({ email, password });
      } else {
        toast.error("Please fill all fields");
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {mode === "register" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Name
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your name"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-600 dark:text-gray-300">
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

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-600 dark:text-gray-300">
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
          <label htmlFor="confirm_Password" className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Confirm Password
          </label>
          <input
            id="confirm_Password"
            type="password"
            placeholder="Confirm password"
            value={formValues.confirm_Password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                confirm_Password: e.target.value,
              })
            }
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:text-white"
          />
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
