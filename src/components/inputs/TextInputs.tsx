interface IProps {
  suffix?: string;
  label: string;
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

export default function TextInput({ placeholder, label, onChange, onBlur, name, value, required, error, readonly, disabled, suffix }: IProps) {
  return (
    <div className="ps-2 py-1 form-group">
      <label className="ms-1" htmlFor="name">
        {label}
      </label>
      <div className="input-group my-2">
        <input
          type="text"
          className="form-control mx-0"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          readOnly={readonly}
          disabled={disabled}
        />
        {suffix && (
          <div className="input-group-append">
            <span className="input-group-text custom">{suffix}</span>
          </div>
        )}
      </div>
      {!!error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
    </div>
  );
}
