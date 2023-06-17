const Input = ({ label, name, error, ...rest }) => {
  return (
    <div class="form-group my-1">
      <label for={name} class="form-label">
        {label}
        {rest.required && <span className="text-danger"> *</span>}
      </label>
      <input
        {...rest}
        name={name}
        id={name}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
};

export default Input;
