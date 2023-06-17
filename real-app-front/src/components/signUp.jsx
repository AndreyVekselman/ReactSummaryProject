import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import { useFormik } from "formik";

const SignUp = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate({ email, password, name }) {
      const errors = {};
      let isValid = true;
      if (!email) {
        errors.email = "email field is required";
        isValid = false;
      }
      if (!password) {
        errors.password = "password field is required";
        isValid = false;
      }
      if (!name) {
        errors.name = "name field is required";
        isValid = false;
      }
      return isValid ? null : errors;
    },
    onSubmit(values) {
      console.log("submited", values);
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
