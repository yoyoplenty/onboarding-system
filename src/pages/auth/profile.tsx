import * as Yup from "yup";
import { Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { convertImageToBase64, getAsset } from "../../utils/helper";

const Profile = () => {
  //we need to handle our file upload ourself
  const [file, setFile] = useState<any>(null);

  const schema = Yup.object({
    email: Yup.string().email(),
    firstname: Yup.string().min(3).max(50),
    lastname: Yup.string().min(3).max(50),
    phone_number: Yup.string().length(11),
    address: Yup.string(),
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
            <h2>Profile</h2>
            <p>You can update the details.</p>
          </div>

          <div className="text-secondary px-lg-3 p-2">
            <Formik
              initialValues={{ firstname: "", lastname: "", phone_number: "", email: "", address: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                values = await Object.assign(values, { profile: file || "" });
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-lg-2 py-1">
                    <label htmlFor="profile">
                      <img src={file || getAsset("profile.png")} className="profile-img img-thumbnail" alt="avatar" />
                    </label>
                    <input type="file" onChange={onUpload} id="profile" name="profile" />
                  </div>

                  <div className="d-flex gap-2">
                    <FormInput id="firstname" placeholder="FirstName" />
                    <FormInput id="lastname" placeholder="LastName" />
                  </div>

                  <div className="d-flex gap-2">
                    <FormInput id="phone_number" placeholder="Mobile No." />
                    <FormInput id="email" placeholder="Email" />
                  </div>

                  <FormInput id="address" placeholder="Address" />
                  <FullButton text="Update" />

                  <div className="d-flex justify-content-center p-lg-2 mb-lg-3 mb-2">
                    <p className="nav-link p-lg-1">Come back later?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/login">
                      Logout
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

export default Profile;
