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
        <Input label="Email" name="email" type="email" required />
        <Input label="Password" name="password" type="password" required />
        <Input label="Name" name="name" type="text" required />
      </form>
    </>
  );
};

export default SignUp;
