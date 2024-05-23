import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

function Login() {
    const [accountCreated, setAccountCreated] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(10, 'Username must be less than or equal to 10 characters')
                .required('Username is required'),
        }),
        onSubmit: (values) => {
            console.log('Form submitted successfully', values);
            setAccountCreated(true);
            setTimeout(() => {
                setAccountCreated(false);
            }, 5000);
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-zinc-100">
            <form onSubmit={formik.handleSubmit} className="bg-white w-full max-w-md shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-4 sm:mx-auto">
                <h2 className="text-3xl font-semibold text-center text-orange-500 mb-4">Login</h2>

                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <div className="flex items-center">
                        <FiUser className="mr-2 text-gray-500" />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                        />
                    </div>
                    {formik.errors.username && <p className="text-red-500 text-xs italic">{formik.errors.username}</p>}
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
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
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
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
                </div>

                {/* Password */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <div className="flex items-center">
                        <FiLock className="mr-2 text-gray-500" />
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>

                {/* Account Created Message */}
                {accountCreated && (
                    <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">Account created!</strong>
                        <span className="block sm:inline"> Your account has been successfully created.</span>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Login;
