const Message = ({ text }: any) => {
  return (
    <div className="alert alert-secondary" role="alert">
      <div className="fw-bold text-dark">{text}</div>
    </div>
  );
};

export default Message;
