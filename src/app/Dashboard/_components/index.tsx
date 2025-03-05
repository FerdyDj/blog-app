"use client";

import React from "react";
import { Formik, Field, ErrorMessage, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import { BlogInput } from "@/components/type";
import RichTextEditor from "./rte";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const blogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must be at most 100 characters long")
    .required("Title is required"),
  category: Yup.string().required("Category is required"),
  thumbnail: Yup.string().required("Thumbnail is required"),
  content: Yup.string()
    .min(20, "Content must be at least 20 characters long")
    .required("Content is required"),
});

const initialValues: BlogInput = {
  title: "",
  category: "",
  content: "",
  thumbnail: "",
};

export default function FormBlog() {
  const userId = useSelector((state: RootState) => state.user.objectId);
  const router = useRouter();
  const onCreate = async (
    values: BlogInput,
    actions: FormikHelpers<BlogInput>
  ) => {
    try {
      await axios.post("/api/blog", { ...values, userId });
      actions.resetForm();
      toast.success("Blog Created!");
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={blogSchema}
      onSubmit={(values, actions) => {
        onCreate(values, actions);
      }}
    >
      {(props) => {
        return (
          <Form className="flex flex-col gap-3 w-full p-4">
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <Field
                name="title"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage
                name="title"
                component="span"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Category
              </label>
              <Field
                name="category"
                as="select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">~ Pilih Category ~</option>
                <option value="Sport">Sport</option>
                <option value="Health">Health</option>
                <option value="News">News</option>
              </Field>
              <ErrorMessage
                name="category"
                component="span"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Thumbnail
              </label>
              <Field
                name="thumbnail"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage
                name="thumbnail"
                component="span"
                className="text-sm text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Content
              </label>
              <RichTextEditor setFieldValue={props.setFieldValue} />
              <ErrorMessage
                name="content"
                component="span"
                className="text-sm text-red-500"
              />
            </div>
            <div className="flex sm:justify-end">
              <button
                type="submit"
                disabled={props.isSubmitting}
                className="w-full h-[40px] disabled:cursor-not-allowed disabled:bg-[#8a8a8b] sm:w-[120px] text-[#f5f5f7] bg-[#383839] hover:bg-[#595959] hover:cursor-pointer rounded-lg"
              >
                {props.isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
