import { useState } from "react";
import { registerUser } from "@/entities/user";

export const RegisterForm = () => {
  const [form, setForm] = useState({
    login: "",
    name: "",
    surname: "",
    password: "",
    onBalance: 1500,
    img: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    registerUser({
      ...form,
      onBalance: Number(form.onBalance),
      cardData: null,
      isVip: false
    });
  };

  return (
    <div className="min-h-screen bg-bgcolor flex items-center justify-center font-[Inter]">
      <form
        onSubmit={handleSubmit}
        className="w-[420px] bg-neutral p-6 rounded-2xl border border-white/10"
      >
        <h1 className="text-white text-2xl font-semibold mb-6">
          Create account
        </h1>

        <div className="flex flex-col gap-3">
          <input
            name="login"
            placeholder="Login"
            onChange={handleChange}
            className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary"
          />
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary"
          />
          <input
            name="surname"
            placeholder="Surname"
            onChange={handleChange}
            className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-primary hover:bg-primary-2 text-white font-medium p-3 rounded-lg transition cursor-pointer"
        >
          Register
        </button>

        <p className="text-paragraph text-sm mt-4 text-center">
          Balance starts from $1500
        </p>
      </form>
    </div>
  );
};
