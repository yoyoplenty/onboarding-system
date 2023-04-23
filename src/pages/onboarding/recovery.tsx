import { BasicInput, FullButton } from "../../components";

const ConfirmEmail = () => {
  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-4 card text-center">
          <div>
            <h2>ConfirmEmail</h2>
            <p></p>
          </div>

          <div className="px-lg-4">
            <form>
              <span className="text-muted">Enter 6 digit 0TP sent to your Email Address</span>
              <BasicInput value="OTP" />

              <FullButton text="Let's Go" />
              <div className="d-flex justify-content-center p-2 mb-lg-5 my-2">
                <p className="pt-3 pe-1">Can't get OTP?</p>
                <button className="nav-link text-danger">Resend</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
