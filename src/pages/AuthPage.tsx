import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import AuthForm from "../components/AuthForm";
import { Heart } from "lucide-react";
import type { AuthMode } from "@/PrivateRoutes";

const AuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<AuthMode>(
    () => (searchParams.get("mode") as AuthMode) || "login"
  );

  useEffect(() => {
    setMode(searchParams.get("mode") as AuthMode);
  }, [searchParams]);

  return (
    <div className="max-w-md mx-auto pb-16">
      {/* Gradient header */}
      <section className="bg-gradient-to-b from-pink-300 to-pink-500 text-white rounded-3xl p-6 shadow-md mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {mode === "login" ? "Welcome Back 💕" : "Join Our Community 💕"}
          </h2>
          <Heart className="w-8 h-8 opacity-90" />
        </div>
        <p className="text-sm opacity-90 mt-2">
          {mode === "login"
            ? "Track your cycles and daily insights easily."
            : "Create your account to start tracking your cycles."}
        </p>
      </section>

      {/* Auth card */}
      <section className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
          {mode === "login" ? "Login to your account" : "Create an account"}
        </h3>

        <AuthForm mode={mode} />

        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {mode === "login"
              ? "Don’t have an account?"
              : "Already have an account?"}
          </p>
          <button
            onClick={() =>
              setSearchParams(`mode=${mode === "login" ? "register" : "login"}`)
            }
            className="text-pink-600 font-semibold hover:underline"
          >
            {mode === "login" ? "Register" : "Login"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthPage;
