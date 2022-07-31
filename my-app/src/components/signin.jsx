import Input from "./common/input";
import PageHeader from "./common/page-header";
import { formikValidationByJoi } from "../utilities/formikValidation";
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

const SignIn = ({ redirect }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, login } = useAuthContext(); //context now replace the login method.

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit(values) {
      try {
        await login(values);
        toast.info("Logged in successfully");
        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response?.status === 400) {
          setError(response.data);
        }
      }
    },
    validate: formikValidationByJoi({
      email: Joi.string()
        .email({
          tlds: {
            allow: false,
          },
        })
        .label("Email")
        .required(),
      password: Joi.string().min(6).max(255).label("Password").required(),
    }),
  });

  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <PageHeader
        title="Sign In to Love App ❤️"
        description="Sign In to Love App"
      />
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          type="email"
          label="Email"
          error={form.touched.email && form.errors.email}
          {...form.getFieldProps("email")}
        />
        <Input
          type="password"
          label="Password"
          error={form.touched.password && form.errors.password}
          {...form.getFieldProps("password")}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-danger me-1"
          >
            Sign In
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
