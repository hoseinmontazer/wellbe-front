import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import AuthForm from "../components/AuthForm";

export type AuthMode = "login" | "register";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get("mode") as AuthMode) || "login"
  );

  useEffect(() => {
    setMode(searchParams.get("mode") as AuthMode);
  }, [searchParams]);

  return (
    <section className="flex flex-col justify-center gap-12 overflow-hidden md:flex-row-reverse">
      {/* <div className="md:flex-2">
        <img src={authLight} className="dark:hidden" alt="Auth image" />
        <img src={authDark} className="hidden dark:block" alt="Auth image" />
      </div> */}
      <div className="flex-1">
        <h1 className="text-xl font-bold">
          {mode === "login" ? "login" : "register"}
        </h1>
        <AuthForm mode={mode} />
        <div className="flex items-center gap-2">
          <p className="text-sm">
            {mode === "login" ? "are you not a member?" : "Are you a member?"}
          </p>
          <button
            className="btn btn-soft btn-primary"
            onClick={() => {
              if (mode === "login") setSearchParams("mode=register");
              else setSearchParams("mode=login");
            }}
          >
            {mode === "login" ? "register" : "login"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
