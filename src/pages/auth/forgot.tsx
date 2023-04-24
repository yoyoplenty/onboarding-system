import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { getAsset } from "../../utils/helper";
import { postData } from "../../utils/request";
import { appStore } from "../../store";

const Forgot = () => {
  const store = appStore();
  const navigate = useNavigate();

  const schema = Yup.object({
    email: Yup.string().email().required(),
  });

  const handleForgotPassword = async (values) => {
    store.setLoading(true);
    const { statusCode, response = {} } = await postData("auth/forgot_password", values);

    store.setLoading(false);

    if (statusCode === 200) {
      toast.success("Please enter your password");

      navigate("/reset");
    } else toast.error(response.data.message, { duration: 2000 });
  };

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-4 card text-center">
          <div>
            <h2>Forgot Password!!!</h2>
            <p>Explore More By Connecting with Us!!!</p>
          </div>

          <div className="text-secondary my-2 mb-lg-4">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                await handleForgotPassword(values);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-lg-4 py-1">
                    <img src={getAsset("profile.png")} className="profile-img img-thumbnail" alt="avatar" />
                  </div>

                  <FormInput id="email" placeholder="Email Address" />

                  <FullButton text="Forgot Password" isSubmitting={store.loading} />

                  <div className="d-flex justify-content-center p-2 mb-lg-5 my-2">
                    <p className="nav-link p-lg-1">Not A Member?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/register">
                      Register Now
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

export default Forgot;
