import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { createUser } from "../services/usersService";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/auth.context";

const SignUp = ({ rederect = "/" }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(5)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("Email"),
      password: Joi.string().min(5).max(1024).required().label("Password"),
      name: Joi.string().min(5).max(255).required().label("Name"),
    }),

    async onSubmit(values) {
      try {
        console.log("submited: ", values);
        await createUser({ ...values, biz: false }).then(console.log);
        navigate(rederect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
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
            Sign Up <i className="bi bi-boxes"></i> to Real App
          </>
        }
        description={"Create a new account, it is free"}
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
        <Input
          {...form.getFieldProps("name")}
          label="Name"
          type="text"
          required
          error={form.touched.name && form.errors.name}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign UP
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
