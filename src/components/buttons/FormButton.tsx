interface IProps {
  text: string;
  color?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  type?: "submit" | "button" | "reset";
}

const FormButton = ({ text, type = "submit", isSubmitting, disabled, color = "#6610f2" }: IProps) => {
  return (
    <div className="mt-3 ps-2">
      <button type={type} className="btn btn-lg fw-bold text-light px-5" disabled={isSubmitting || disabled} style={{ backgroundColor: color }}>
        {isSubmitting ? <span style={{ display: "inline" }}>Loading...</span> : text}
      </button>
    </div>
  );
};

export default FormButton;
