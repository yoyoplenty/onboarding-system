import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { getAsset } from "../../utils/helper";

const Register = () => {
  const schema = Yup.object({
    username: Yup.string().required(),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-3 card text-center">
          <div>
            <h2>Register Here</h2>
            <p>We are Happy to Have you on Board</p>
          </div>

          <div className="text-secondary my-2 mb-lg-4 px-lg-4 p-2">
            <Formik
              initialValues={{ username: "" }}
              validationSchema={schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-lg-4 py-1">
                    <img src={getAsset("profile.png")} className="profile-img img-thumbnail" alt="avatar" />
                  </div>
                  <FormInput id="username" />

                  <FullButton text="Let's Go" />
                  <div className="d-flex justify-content-center p-lg-2 mb-lg-5 mb-2">
                    <p className="nav-link p-lg-1">Already Registered?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/login">
                      Login
                    </Link>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
