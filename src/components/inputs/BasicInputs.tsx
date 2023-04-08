interface IProps {
  label?: string;
  placeholder: string;
  name: string;
  value: string | number;
  required?: boolean;
  onChange?: any;
  onBlur?: any;
  error?: string;
  readonly?: boolean;
  disabled?: boolean;
}

const BasicInputs = ({ label, placeholder, name, value, required, onChange, onBlur, error, readonly, disabled }: IProps) => {
  return (
    <div className="my-0">
      <label htmlFor={label} className="form-label ps-2">
        {label}
      </label>
      <input
        type="text"
        className="py-3 border border-white rounded-3 fw-bold text-muted form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        readOnly={readonly}
        disabled={disabled}
      />

      <div className="form-text">{error && <span className="text-danger ps-2">{error}</span>}</div>
    </div>
  );
};

export default BasicInputs;
