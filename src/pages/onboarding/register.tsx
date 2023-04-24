import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { convertImageToBase64, getAsset } from "../../utils/helper";
import { postData } from "../../utils/request";
import { appStore } from "../../store";

const Register = () => {
  const store = appStore();
  const navigate = useNavigate();

  const [file, setFile] = useState<any>(null);

  const handleRegister = async (values) => {
    store.setLoading(true);
    const { data, statusCode, response = {} } = await postData("auth/signup", values);

    store.setLoading(false);

    if (data && statusCode === 201) {
      toast.success("A verification email has been sent to the email address provided");

      navigate("/login");
    } else toast.error(response.data.message, { duration: 3000 });
  };

  const schema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required(),
    phoneNumber: Yup.string().min(11).max(11).required(),
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
        <div className="p-3 px-5 card text-center">
          <div className="mt-1">
            <h2>Register Here</h2>
            <p>We are Happy to Have you on Board</p>
          </div>

          <div className="text-secondary px-lg-3 p-2">
            <Formik
              initialValues={{ firstName: "", lastName: "", email: "", phoneNumber: "", password: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                values = await Object.assign(values, { profile: file || "", role: "643f49b498f855ea67b1e758" });
                await handleRegister(values);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center">
                    <label htmlFor="profile">
                      <img src={file || getAsset("avatar.jpeg")} className="profile-img img-thumbnail" alt="avatar" />
                    </label>
                    <input type="file" onChange={onUpload} id="profile" name="profile" />
                  </div>

                  <FormInput id="firstName" InputStyle="py-2" />

                  <FormInput id="lastName" InputStyle="py-2" />

                  <FormInput id="email" placeholder="Email Address" InputStyle="py-2" />

                  <FormInput id="phoneNumber" placeholder="Mobile No." InputStyle="py-2" />

                  <FormInput id="password" type="password" InputStyle="py-2" />

                  <FullButton text="Sign Up" InputStyle="py-2" isSubmitting={store.loading} />

                  <div className="d-flex justify-content-center p-lg-2 mb-1">
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
