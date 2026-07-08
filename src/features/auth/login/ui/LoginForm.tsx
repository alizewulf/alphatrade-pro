import { useLocation, useNavigate } from "react-router";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import { z } from "zod";
import { loginUser } from "../api/login";
import { Button } from "@/shared/ui/button";
import { useAuth } from "@/app/providers/AuthContext";
import { DEFAULT_AUTH_REDIRECT, ROUTE_PATHS } from "@/app/routes";

const loginSchema = z.object({
  login: z.string().min(1, "Login is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function validateLogin(values: LoginFormValues) {
  const parsed = loginSchema.safeParse(values);
  return parsed.success ? {} : parsed.error.flatten().fieldErrors;
}

function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (
    values: LoginFormValues,
    helpers: FormikHelpers<LoginFormValues>,
  ) => {
    helpers.setStatus(undefined);

    const result = await loginUser(values.login, values.password);

    if (!result.success) {
      helpers.setStatus(result.error);
      helpers.setSubmitting(false);
      return;
    }

    login(result.user);

    const params = new URLSearchParams(location.search);
    const redirectTo = params.get("redirect") ?? DEFAULT_AUTH_REDIRECT;
    navigate(redirectTo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgcolor px-4">
      <Formik
        initialValues={{ login: "", password: "" }}
        validate={validateLogin}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="w-full max-w-md rounded-2xl bg-neutral border border-appinput-bg p-8 shadow-lg">
            <h1 className="mb-2 text-3xl font-bold text-white">Login</h1>
            <p className="mb-8 text-paragraph">Sign in to continue.</p>

            {status && (
              <p className="mb-4 text-sm text-tertiary bg-tertiary/10 px-4 py-2 rounded-lg">
                {status}
              </p>
            )}

            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="login" className="text-sm font-medium text-paragraph">
                Login
              </label>
              <Field
                id="login"
                name="login"
                type="text"
                placeholder="Enter your login"
                className="rounded-xl border border-transparent bg-appinput-bg px-4 py-3 text-white outline-none transition focus:border-primary"
              />
              <ErrorMessage
                name="login"
                component="p"
                className="text-sm text-tertiary"
              />
            </div>

            <div className="mb-3 flex flex-col gap-2">
              <label htmlFor="password" className="text-sm font-medium text-paragraph">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="rounded-xl border border-transparent bg-appinput-bg px-4 py-3 text-white outline-none transition focus:border-primary"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-sm text-tertiary"
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

            <Button
              variant="primary"
              size="lg"
              className="w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </Button>

            <p className="mt-6 text-center text-sm text-paragraph">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-secondary hover:underline cursor-pointer"
                onClick={() => navigate(ROUTE_PATHS.signup)}
              >
                Register
              </button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
