import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { convertImageToBase64, getAsset } from "../../utils/helper";

const Register = () => {
  const [file, setFile] = useState<any>(null);

  const schema = Yup.object({
    email: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  /**Formik Needs to support file upload */
  const onUpload = async (e) => {
    const base64 = await convertImageToBase64(e.target.files[0]);

    setFile(base64);
  };

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-3 card text-center">
          <div>
            <h2>Register Here</h2>
            <p>We are Happy to Have you on Board</p>
          </div>

          <div className="text-secondary px-lg-3 p-2">
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                values = await Object.assign(values, { profile: file || "" });

                console.log(values);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-lg-2 py-1">
                    <label htmlFor="profile">
                      <img src={file || getAsset("avatar.jpeg")} className="profile-img img-thumbnail" alt="avatar" />
                    </label>
                    <input type="file" onChange={onUpload} id="profile" name="profile" />
                  </div>

                  <FormInput id="email" />
                  <FormInput id="username" />
                  <FormInput id="password" type="password " />

                  <FullButton text="Let's Go" />
                  <div className="d-flex justify-content-center p-lg-2 mb-lg-3 mb-2">
                    <p className="nav-link p-lg-1">Already Registered?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/login">
                      Login Now
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
