import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { FullButton, PasswordInput } from "../../components";
import { getAsset } from "../../utils/helper";

const Password = () => {
  const schema = Yup.object({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password cannot be less than 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain english letters."),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-4 card text-center">
          <div>
            <h2>Hello Again!!!</h2>
            <p>Explore More By Connecting with Us!!!</p>
          </div>

          <div className="text-secondary my-2 mb-lg-4">
            <Formik
              initialValues={{ password: "Password@1" }}
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
                  <PasswordInput id="password" />

                  <FullButton text="Sign in" />
                  <div className="d-flex justify-content-center p-2 mb-lg-5 my-2">
                    <p className="nav-link p-lg-1">Forget Password?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/recovery">
                      Recover Now
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

export default Password;
