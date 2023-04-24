import * as Yup from "yup";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { FullButton, PasswordInput } from "../../components";
import { appStore } from "../../store";
import { patchData } from "../../utils/request";

const Reset = () => {
  const store = appStore();
  const navigate = useNavigate();

  const { token } = useParams();

  const handleResetPassword = async (values) => {
    store.setLoading(true);
    const { statusCode, response = {} } = await patchData(`auth/reset_password/${token}`, values);

    store.setLoading(false);

    if (statusCode === 201) {
      toast.success("Password Reset successfully");

      navigate("/login");
    } else toast.error(response.data.message);
  };

  const schema = Yup.object({
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Reset cannot be less than 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain english letters."),
  });

  return (
    <div className="container-fluid m-0 bg-img">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="p-lg-5 p-4 card text-center">
          <div>
            <h2>Reset Password</h2>
            <p className="fw-bold text-muted py-2">Enter Your New Password</p>
          </div>

          <div className="text-secondary p-2 mb-lg-5 mb-3">
            <Formik
              initialValues={{ password: "" }}
              validationSchema={schema}
              onSubmit={async (values) => {
                await handleResetPassword(values);
              }}
            >
              {(formik) => (
                <div className="p-0">
                  <form onSubmit={formik.handleSubmit}>
                    <PasswordInput id="password" placeholder="New Password" />

                    <FullButton text="Reset Password" isSubmitting={store.loading} />
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
