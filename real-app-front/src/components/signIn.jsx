import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/auth.context";

const SignIn = ({ rederect = "/" }) => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },

    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(5)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string().min(6).max(1024).required().label("Password"),
    }),

    async onSubmit(values) {
      try {
        await login(values);
        navigate(rederect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
          console.log(error);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title={
          <>
            Sign In <i className="bi bi-boxes"></i> to Real App
          </>
        }
        description={"Sign in to your account"}
      />

      <form onSubmit={form.handleSubmit} noValidate>
        {error && <div className="alert alert-danger ">{error}</div>}

        <Input
          {...form.getFieldProps("email")}
          label="Email"
          type="email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          label="Password"
          type="password"
          required
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
