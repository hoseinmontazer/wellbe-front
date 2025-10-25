import { useState, type FormEvent } from "react";
import type { AuthMode } from "../PrivateRoutes";
import useLogin from "../hooks/use-login";
import useRegister from "../hooks/use-register";
import toast from "react-hot-toast";
import { LucideLoader2, LucideLoader } from "lucide-react";

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
        toast.error("Please fill all feilds");
      }
    } else {
      const { email, password } = formValues;

      if (email.trim() && password.trim()) {
        loginMutate({ email, password });
      } else {
        toast.error("Please fill all feilds");
      }
    }
  };

  return (
    <form className="my-8 space-y-6" onSubmit={handleSubmit}>
      {mode === "register" && (
        <div className="space-y-3">
          <input type="text" placeholder="Medium" className="input input-md" />
          <span>نام</span>
          <input
            id="name"
            type="text"
            placeholder="Please enter your name"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
        </div>
      )}
      <div className="space-y-3">
        <input type="text" placeholder="Medium" className="input input-md" />
        <span>ایمیل</span>
        <input
          id="email"
          type="email"
          placeholder="Please enter your email"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
      </div>
      <div className="space-y-3">
        <input type="text" placeholder="Medium" className="input input-md" />
        <span>ایمیل</span>
        <input
          id="password"
          type="password"
          placeholder="Please enter password"
          value={formValues.password}
          onChange={(e) =>
            setFormValues({ ...formValues, password: e.target.value })
          }
        />
      </div>
      {mode === "register" && (
        <div className="space-y-3">
          <input type="text" placeholder="Medium" className="input input-md" />
          <span>ایمیل</span>
          <input
            id="repeat-password"
            type="password"
            placeholder="Please confirm password"
            value={formValues.confirm_Password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                confirm_Password: e.target.value,
              })
            }
          />
        </div>
      )}
      <button className="btn btn-soft btn-primary">
        type="submit" className="cursor-pointer text-white"
        {mode === "login" ? "login" : "register"}
        {loginStatus === "pending" && (
          <LucideLoader2 className="animate-spin" />
        )}
        {registerStatus === "pending" && (
          <LucideLoader className="animate-spin" />
        )}
      </button>
    </form>
  );
};

export default AuthForm;
