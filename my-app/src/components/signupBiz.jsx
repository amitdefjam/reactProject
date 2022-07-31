import Joi from "joi";
import { useFormik } from "formik";
import { formikValidationByJoi } from "../utilities/formikValidation";

import Input from "./common/input";
import PageHeader from "./common/page-header";

import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

import { toast } from "react-toastify";

import { useAuthContext } from "../context/authContext";

const SignUpBiz = ({ redirect }) => {
  const navigate = useNavigate();
  const { user, createUser, login } = useAuthContext();
  const [error, setError] = useState("");

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: formikValidationByJoi({
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("Email"),
      password: Joi.string().min(6).required().label("Password"),
      name: Joi.string().min(2).required().label("Name"),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: true });
        await login({ email: values.email, password: values.password });

        toast("Your Premium account is ready yay!👏");

        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response?.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign Up as Premium User with Real Love App ❤️"
        description="Open a new premium account, it is free!"
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
          // onChange={form.handleChange}
          // onBlur={form.handleBlur}
          // value={form.values.name}
          // name="name"
        />

        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-danger"
          >
            Premium Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpBiz;
