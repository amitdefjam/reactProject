import Input from "./common/input";
import PageHeader from "./common/page-header";
import { formikValidationByJoi } from "../utilities/formikValidation";
import { useFormik } from "formik";
import Joi from "joi";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";

const SignUp = ({ redirect }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, createUser } = useAuthContext();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: false });
        toast.success("⭐ User created successfully ⭐", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
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
      name: Joi.string().min(2).max(50).label("Name").required(),
    }),
  });
  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <PageHeader
        title="Sign Up to Love App ❤️"
        description="Open a new account, and enjoy our exclusive access to your favorite content."
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
        <Input
          type="text"
          label="Name"
          error={form.touched.name && form.errors.name}
          {...form.getFieldProps("name")}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-danger me-1"
          >
            Sign Up
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
