import { useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import { z } from "zod";
import { getUsers, registerUser } from "@/entities/user";
import { ROUTE_PATHS } from "@/app/routes";

const registerSchema = z.object({
  login: z.string().min(3, "Login is required"),
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

function validateRegister(values: RegisterFormValues) {
  const parsed = registerSchema.safeParse(values);
  return parsed.success ? {} : parsed.error.flatten().fieldErrors;
}

export const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (
    values: RegisterFormValues,
    helpers: FormikHelpers<RegisterFormValues>,
  ) => {
    helpers.setStatus(undefined);

    try {
      const users = await getUsers();
      const existingUser = users.some((user) => user.login === values.login);

      if (existingUser) {
        helpers.setStatus("A user with this login is already registered.");
        helpers.setSubmitting(false);
        return;
      }

      await registerUser({
        ...values,
        onBalance: 1500,
        img: "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png",
        cardData: null,
        isVip: false,
      });

      navigate(ROUTE_PATHS.login);
    } catch {
      helpers.setStatus("Registration failed. Please try again later.");
      helpers.setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgcolor flex items-center justify-center font-[Inter]">
      <Formik
        initialValues={{ login: "", name: "", surname: "", password: "" }}
        validate={validateRegister}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="w-[420px] bg-neutral p-6 rounded-2xl border border-white/10">
            <h1 className="text-white text-2xl font-semibold mb-6">Create account</h1>

            {status && (
              <p className="mb-4 text-sm text-tertiary bg-tertiary/10 px-4 py-2 rounded-lg">
                {status}
              </p>
            )}

            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="login" className="sr-only">
                  Login
                </label>
                <Field
                  id="login"
                  name="login"
                  placeholder="Login"
                  className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary w-full"
                />
                <ErrorMessage
                  name="login"
                  component="p"
                  className="text-sm text-tertiary mt-1"
                />
              </div>

              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary w-full"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-sm text-tertiary mt-1"
                />
              </div>

              <div>
                <label htmlFor="surname" className="sr-only">
                  Surname
                </label>
                <Field
                  id="surname"
                  name="surname"
                  placeholder="Surname"
                  className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary w-full"
                />
                <ErrorMessage
                  name="surname"
                  component="p"
                  className="text-sm text-tertiary mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="bg-appinput-bg text-white p-3 rounded-lg outline-none border border-transparent focus:border-primary w-full"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-sm text-tertiary mt-1"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-primary hover:bg-primary-2 text-white font-medium p-3 rounded-lg transition disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSubmitting}
            >
              Register
            </button>

            <p className="text-paragraph text-sm mt-4 text-center">
              Balance starts from $1500
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
