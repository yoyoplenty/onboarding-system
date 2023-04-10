import { useFormikContext } from "formik";

interface IProps {
  id: string;
  type?: string;
  label?: string;
}

const FormInputs = ({ id, label, type = "text" }: IProps) => {
  const context = useFormikContext<IProps>();
  const error: string = context.errors[id];

  return (
    <div className="my-0">
      <label htmlFor={id} className="form-label ps-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="py-3 border border-white rounded-3 fw-bold text-muted form-control"
        placeholder={id}
        value={context.values[id]}
        onBlur={context.handleBlur}
        onChange={context.handleChange}
      />

      <div className="form-text">{!!(context.errors[id] && context.touched[id]) && <span className="text-danger ps-2">{error}</span>}</div>
    </div>
  );
};

export default FormInputs;
