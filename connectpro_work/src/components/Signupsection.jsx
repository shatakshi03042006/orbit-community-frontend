import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axiosInstance from "../axios/axiosinstance";
export default function Signupsection() {
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    }
    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async (values, {resetForm}) => {
            console.log("", values);
            try{
                const result = await axiosInstance.post("api/auth/signup",values);
                console.log(result);
                console.log(result.data);
                resetForm();
            }
            catch (error){
                console.log(error);
                console.log(error.response.data);
            }
        }
    })

    

    return (
        <>

            <div className=" ml-124 ">
                <div className="flex gap-2   ">
                    <div className="mt-5 flex justify-center items-center h-9 w-9 bg-blue-600 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-5 w-5"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                    </div>

                    <h4 className="mt-6 text-xl  font-bold">ConnectPro</h4>

                </div>
                <div className="min-h-screen  flex items-center">
                    <div className="w-142.5 bg-white rounded-3xl border border-gray-200 shadow-md mt-3 p-6">

                        <h2 className="text-2xl font-bold">Create your account</h2>

                        <p className="text-gray-500 text-sm mt-1">
                            Join thousands of professionals on ConnectPro.
                        </p>

                        <div className="flex items-center gap-5 mt-6">

                            <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-gray-300 flex justify-center items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image mr-1.5 h-4 w-4 text-primary" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">Profile photo</h3>
                                <p className="text-gray-500 text-sm">PNG or JPG, up to 2MB.</p>
                            </div>

                        </div>

                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex gap-3 mt-3">

                                <div className=" w-70">
                                    <div className="font-medium">First name</div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}

                                    />
                                </div>

                                <div className="w-70">
                                    <div className="font-medium">Last name</div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className=" shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                            </div>

                            <div className="mt-4">
                                <div className="font-medium">Email</div>
                                <input
                                    type="email"
                                    name="email"
                                    className="shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <div className="font-medium">Phone number</div>
                                <input
                                    type="text"
                                    placeholder="+1 (555) 000-0000"
                                    name="phoneNumber"
                                    className="shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <div className="flex gap-4 mt-4">

                                <div className="w-1/2">
                                    <div className="font-medium">Password</div>
                                    <input
                                        type="password"
                                        value={formik.values.password}
                                        name="password"
                                        className="shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="w-1/2">
                                    <div className="font-medium">Confirm</div>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        
                                        onChange={formik.handleChange}
                                        className="shadow-sm w-full h-10 mt-2 px-4 rounded-xl border border-gray-300 outline-none focus:border-blue-500"
                                    />
                                </div>

                            </div>
                            <button  type="submit" className="w-full h-10 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold mt-4" disabled={formik.isSubmitting}>
                            {formik.isSubmitting ? (
                                <>
                                <div className="w-4 h-4 border-2 border-white border-t-tansparent rounded-full animate-spin"></div>
                                <span>Creating Account....</span>
                                </>
                            ):(
                                "Create Account"
                            )}
                            </button>
                        </form>



                        <p className="text-center text-gray-500 mt-4">
                            Already have an account?
                            <Link to="/logout">
                                <span className="text-blue-600 font-semibold cursor-pointer ml-1">
                                    Log in
                                </span>
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}