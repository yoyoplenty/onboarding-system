interface IProps {
  text: string;
  color?: string;
  disabled?: boolean;
  isSubmitting?: boolean;
  type?: "submit" | "button" | "reset";
}

const FullButton = ({ text, type = "submit", isSubmitting, disabled, color = "#6610f2" }: IProps) => {
  return (
    <div className="mt-3 rounded-3" style={{ width: "inherit", backgroundColor: color }}>
      <button type={type} className="btn fw-bold w-100 h-100 text-light p-3 full-btn" disabled={isSubmitting || disabled}>
        {isSubmitting ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default FullButton;
