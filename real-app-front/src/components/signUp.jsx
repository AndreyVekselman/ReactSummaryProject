import { Form } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";
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
        <Input />
      </form>
    </>
  );
};

export default SignUp;
