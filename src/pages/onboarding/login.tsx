import * as Yup from "yup";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AlertMessage, FormInput, FullButton } from "../../components";
import { getAsset } from "../../utils/helper";
import { postData } from "../../utils/request";
import { useState } from "react";
import { setLocalStorage } from "../../utils/services/local-storage";

const defaultState = { loading: false, message: "" };

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(defaultState);

  const handleLogin = async (values) => {
    setState({ ...defaultState, loading: true });

    const { data, statusCode, response = {} } = await postData("auth/signin", values);

    if (data && statusCode === 200) {
      const user = await Object.assign(data.user, { accessToken: data.accessToken });
      setLocalStorage("user", user);

      navigate("/dashboard");
    } else setState({ loading: false, message: response.data.message });
  };

  const schema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-3 card text-center">
          {state.message && <AlertMessage text={state.message} />}

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

                  <FullButton text="Let's Go" isSubmitting={state.loading} />

                  <div className="d-flex justify-content-center p-lg-2 mb-lg-5 mb-2">
                    <p className="nav-link p-lg-1">Not a Member?</p>

                    <Link className="nav-link text-danger p-lg-1" to="/register">
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

export default Login;
