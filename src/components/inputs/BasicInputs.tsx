interface IProps {
  value: string;
  label?: string;
}

const BasicInputs = ({ value, label }: IProps) => {
  return (
    <>
      <label htmlFor={value} className="bg-danger ps-2">
        {label}
      </label>
      <input type="text" className="py-3 border border-white rounded-3 fw-bold text-muted form-control" placeholder={value} value={value} />
    </>
  );
};

export default BasicInputs;
