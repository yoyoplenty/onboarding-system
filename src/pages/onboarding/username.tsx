import * as Yup from "yup";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { BasicInput, FullButton } from "../../components";
import { errorParser, getAsset } from "../../utils/helper";

const Username = () => {
  const schema = Yup.object({
    username: Yup.string().required(),
  });

  return (
    <div className="container-fluid bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-5 card text-center">
          <div>
            <h2>Hello Again!!!</h2>
            <p>Explore More By Connecting with Us!!!</p>
          </div>

          <div className="text-secondary my-2 mb-4">
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
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="profile flex justify-center py-4">
                    <img src={getAsset("profile.png")} className="profile-img" alt="avatar" />
                  </div>
                  <BasicInput
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    error={errorParser(errors, touched, "username")}
                  />

                  <FullButton text="Let's Go" />
                  <div className="d-flex justify-content-center p-2 mb-5">
                    <Link className="nav-link p-1" to="/register">
                      Not a Member?
                    </Link>

                    <Link className="nav-link text-danger p-1" to="/register">
                      Register
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

export default Username;
