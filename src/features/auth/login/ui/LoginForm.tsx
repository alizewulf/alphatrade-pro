import { useState } from "react";
import { useNavigate } from "react-router";
import checkForm from "../LoginSystem";

function LoginForm() {
  const navigate = useNavigate();
  const [form, setFormData] = useState({
    login: "",
    password: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await checkForm(form.login, form.password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgcolor px-4">
      <form className="w-full max-w-md rounded-2xl bg-neutral border border-appinput-bg p-8 shadow-lg" onSubmit={handleSubmit}>
        <h1 className="mb-2 text-3xl font-bold text-white">Login</h1>

        <p className="mb-8 text-paragraph">Sign in to continue.</p>

        <div className="mb-5 flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-paragraph">
            Email
          </label>

          <input
            id="email"
            type="text"
            value={form.login}
            onChange={(e) => {
              setFormData({
                ...form,
                login: e.target.value,
              });
            }}
            placeholder="Enter your email"
            className="rounded-xl border border-transparent bg-appinput-bg px-4 py-3 text-white outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-3 flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-paragraph"
          >
            Password
          </label>

          <input
            id="password"
            value={form.password}
            onChange={(e) => {
              setFormData({
                ...form,
                password: e.target.value,
              });
            }}
            type="password"
            placeholder="Enter your password"
            className="rounded-xl border border-transparent bg-appinput-bg px-4 py-3 text-white outline-none transition focus:border-primary"
          />
        </div>

        <div className="mb-6 flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-paragraph">
            <input type="checkbox" className="accent-primary" />
            Remember me
          </label>

          <button
            type="button"
            className="text-primary transition hover:text-primary-2 cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-3 font-semibold cursor-pointer text-white transition hover:bg-primary-2 active:scale-[0.99]"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-paragraph">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-secondary hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
