import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../../utils/request";
import toast from "react-hot-toast";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const [verified, setVerified] = useState(false);
  const confirmEmail = async () => {
    return await getData(`auth/confirm_mail/${token}`);
  };

  useEffect(() => {
    confirmEmail()
      .then(({ statusCode }) => {
        if (statusCode && statusCode === 200) {
          setVerified(true);
          toast.success("Email verified successfully");

          navigate("/login");
        } else return;
      })
      .catch((error) => error);
  }, []);

  //TODO improve this User Experience Here
  //TODO create a new component, with loading, so unconfirmed email won't render first time
  return (
    <div>
      {!verified ? (
        <div className="container-fluid m-0 bg-img">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="p-lg-5 p-4 card text-center">
              <div>
                <h2>Email Confirmation Failed</h2>
                <p>This is to inform you, you're unable to verify your Email Address.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid m-0 bg-img">
          <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="p-lg-5 p-4 card text-center">
              <div>
                <h2>Confirm Email Address</h2>
                <p>
                  This is to inform you, you've successfully confirmed your email address, please proceed by logging in, we are happy to have you
                  here, Welcome on board.
                </p>
              </div>

              <div className="px-lg-4">
                <div className="d-flex justify-content-center p-2 mb-lg-5 my-2">
                  <p className="pt-3 pe-1">Already Verified?</p>

                  <Link className="nav-link text-danger p-lg-1" to="/login">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmEmail;
