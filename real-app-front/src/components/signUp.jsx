import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { createUser } from "../services/usersService";

const SignUp = () => {
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

    onSubmit(values) {
      console.log("submited: ", values);
      createUser({ ...values, biz: false }).then(console.log);
      // createUser({ ...values, biz: false });
    },
  });

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
