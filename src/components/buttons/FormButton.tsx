interface IProps {
  text: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  type?: "submit" | "button" | "reset";
}

const FormButton = ({ text, type = "submit", isSubmitting, disabled }: IProps) => {
  return (
    <div className="mt-3 ps-2">
      <button type={type} className="btn fw-bold bg-secondary text-light" disabled={isSubmitting || disabled}>
        {isSubmitting ? <span style={{ display: "inline" }}>Loading...</span> : text}
      </button>
    </div>
  );
};

export default FormButton;
