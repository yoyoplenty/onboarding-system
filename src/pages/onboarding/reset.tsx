import * as Yup from "yup";
import { Formik } from "formik";
import { useNavigate, useParams } from "react-router";
import { FullButton, PasswordInput } from "../../components";
import { appStore } from "../../store";

const Reset = () => {
  const store = appStore();
  const navigate = useNavigate();
  const { reset_token } = useParams();

  console.log(reset_token);

  const handleResetPassword = () => {};

  const schema = Yup.object({
    NewPassword: Yup.string()
      .required("No password provided.")
      .min(8, "Reset cannot be less than 8 characters")
      .matches(/[a-zA-Z]/, "Reset can only contain english letters."),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-4 card text-center">
          <div>
            <h2>Reset Password</h2>
            <p>Enter Your New Password</p>
          </div>

          <div className="text-secondary p-2 mb-lg-5 mb-3">
            <Formik
              initialValues={{ NewPassword: "", confirmPassword: "" }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <div className="p-0">
                  <form onSubmit={formik.handleSubmit}>
                    <PasswordInput id="NewPassword" />
                    <PasswordInput id="confirmPassword" />

                    <FullButton text="Reset Password" />
                  </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
