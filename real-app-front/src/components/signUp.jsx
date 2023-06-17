import { Form } from "react-router-dom";
import PageHeader from "./common/pageHeader";
const SignUp = () => {
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

      <form>
        <div class="form-group my-1">
          <label for="email" class="form-label">
            Email
            <span className="text-danger"> *</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control is-invalid"
          />
          <span className="invalid-feedback">some error</span>
        </div>
      </form>
    </>
  );
};

export default SignUp;
