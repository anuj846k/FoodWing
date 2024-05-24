import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FiUser, FiMail, FiPhone, FiEdit } from "react-icons/fi";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Invalid phone number")
        .required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted successfully", values);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        resetForm();
      }, 3000);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white w-full max-w-md shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-4 sm:mx-auto"
      >
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-4">
          Contact Us
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <div className="flex items-center">
            <FiUser className="mr-2 text-gray-500" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {formik.errors.name && (
            <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <div className="flex items-center">
            <FiMail className="mr-2 text-gray-500" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          {formik.errors.email && (
            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone Number
          </label>
          <div className="flex items-center">
            <FiPhone className="mr-2 text-gray-500" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
          {formik.errors.phone && (
            <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
          )}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subject
          </label>
          <div className="flex items-center">
            <FiEdit className="mr-2 text-gray-500" />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
            />
          </div>
          {formik.errors.subject && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <div className="flex items-center">
            <FiEdit className="mr-2 text-gray-500" />
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="message"
              name="message"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          {formik.errors.message && (
            <p className="text-red-500 text-xs italic">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>

        {/* Display success message */}
        {submitted && (
          <div
            className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Message sent!</strong>
            <span className="block sm:inline">
              {" "}
              Your message has been successfully sent.
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
