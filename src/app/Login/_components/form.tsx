"use client";

import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

const LoginSchema = yup.object().shape({
  login: yup.string().email("Invalid login").required("Login is required"),
  password: yup
    .string()
    .min(6, "min 6 character")
    .required("Password is required"),
});

interface ILoginForm {
  login: string;
  password: string;
}

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: ILoginForm = {
    login: "",
    password: "",
  };

  const dispatch = useDispatch();
  const router = useRouter();

  const onLogin = async (
    value: ILoginForm,
    action: FormikHelpers<ILoginForm>
  ) => {
    try {
      const { data } = await axios.post("/api/auth/login", value);
      dispatch(login(data));
      router.push("/");
      action.resetForm();
      toast.success("Login Success !");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.error?.message || "Login Failed !");
      }
      console.log(err);
    }
  };

  return (
    <div className="mt-16">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onLogin}
      >
        {(props: FormikProps<ILoginForm>) => {
          const { touched, errors, isSubmitting } = props;
          return (
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="login" className="text-md">
                  login
                </label>
                <Field
                  name="login"
                  type="login"
                  className="mt-2 mb-1 p-2 border border-gray-500 rounded-md shadow-md"
                />
                {touched.login && errors.login ? (
                  <div className="text-red-500 text-[12px]">{errors.login}</div>
                ) : null}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-md">
                  Password
                </label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="mt-2 mb-1 p-2 pr-10 border border-gray-500 rounded-md shadow-md w-full"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={20} />
                    ) : (
                      <FaRegEye size={20} />
                    )}
                  </button>
                </div>
                {touched.password && errors.password ? (
                  <div className="text-red-500 text-[12px]">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col md:flex-row mt-12 md:items-center">
                <button
                  className="w-20 text-white py-1 px-2 rounded-md bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Loading" : "Sign In"}
                </button>
                <p className="text-sm md:ml-6 mt-2 md:mt-0">
                  Create new account ?{" "}
                  <Link href={"/Register"} className="text-gray-600 font-bold">
                    Sign Up
                  </Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
