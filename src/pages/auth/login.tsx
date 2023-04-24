import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormInput, FullButton } from "../../components";
import { appStore } from "../../store";
import { getAsset } from "../../utils/helper";
import { postData } from "../../utils/request";
import { setLocalStorage } from "../../utils/services/local-storage";
import { getCurrentUser } from "../../utils/services/auth";

const Login = () => {
  const store = appStore();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    store.setLoading(true);
    const { data, statusCode, response = {} } = await postData("auth/signin", values);

    store.setLoading(false);

    if (data && statusCode === 200) {
      const user = await Object.assign(data.user, { accessToken: data.accessToken });

      setLocalStorage("user", user);
      store.setAuthUser(getCurrentUser());

      toast.success("Signin successful");
      navigate("/dashboard");
    } else toast.error(response.data.message);
  };

  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password cannot be less than 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain english letters."),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-3 card text-center">
          <div>
            <h2>Hello Again!!!</h2>
            <p>Please Login to Access your Account</p>
          </div>

          <div className="text-secondary my-2 mb-lg-4">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                await handleLogin(values);
              }}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="profile flex justify-center py-lg-4 py-1">
                    <img src={getAsset("profile.png")} className="profile-img img-thumbnail" alt="avatar" />
                  </div>

                  <FormInput id="email" placeholder="Email Address" />
                  <FormInput id="password" type="password" placeholder="Password" />

                  <FullButton text="Sign In" isSubmitting={store.loading} />

                  <div className="d-flex justify-content-evenly mt-1 p-lg-2 mb-lg-4 mb-1">
                    <span>
                      Not a member?
                      <Link className="nav-link text-danger p-lg-1" to="/register">
                        Register
                      </Link>
                    </span>

                    <span>
                      Forgot Password?
                      <Link className="nav-link text-danger p-lg-1" to="/forgot">
                        Reset Password
                      </Link>
                    </span>
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

export default Login;
