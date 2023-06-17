const Input = () => {
  return (
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
  );
};

export default Input;
