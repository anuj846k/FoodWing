import { useFormik } from "formik";
import * as Yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

function Login() {
    const formik = useFormik({
        initialValues: {
            username: "",
            name: "",
            email: "",
            password: "",
            status: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().max(10, "Username must be less than 10 characters or equal to 10 characters")
                .required("Username is required"),
        }),
        onSubmit: (values) => {
            console.log("Form submitted successfully", values);
        }
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={formik.handleSubmit} className="bg-white w-2/4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>

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

                {/* Status */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
                    <div className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            name="status"
                            value="single"
                            onChange={formik.handleChange}
                        />
                        <span className="text-sm">Not Coder</span>
                    </div>
                    <div className="flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            type="radio"
                            name="status"
                            value="committed"
                            onChange={formik.handleChange}
                        />
                        <span className="text-sm">Coder</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
