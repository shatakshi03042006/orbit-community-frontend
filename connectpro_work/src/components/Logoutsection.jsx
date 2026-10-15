import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosinstance";
import { toast } from "react-toastify";


export default function Logoutsection() {
    
    const navigate = useNavigate();
    const initialState = {
        email: "",
        password: ""
    }

    const formik = useFormik({
        initialValues: initialState,
        onSubmit: async (values, { resetForm }) => {
            
            console.log("", values);
            try {
                const result = await axiosInstance.post(
                    "api/auth/login",
                    values,
                    {
                        withCredentials: true,
                    }
                );

                console.log(result);
                console.log(result.success)
                if (result.data.success === true) {
                    localStorage.setItem("authData", JSON.stringify(result.data));
                    toast.success(result.data.message);
                   navigate("/");
                };
                resetForm();
            }
            catch (error) {
                
                console.log(error);
                console.log(error.response.data);
                toast.error("Login failed. Please check your email and password.");
            }
        }
    })

    return (
        <>
            

            <div className="flex gap-2 ml-14">
                <div className="mt-10 flex justify-center items-center h-9 w-9 bg-blue-600 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white h-5 w-5">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                </div>

                <h4 className="mt-11 text-xl mt-0.5 font-bold">ConnectPro</h4>

            </div>

            <div className="mt-29 ml-52">
                <h2 className="font-bold text-4xl">Welcome back</h2>
                <h6 className="text-m mt-2.5 font-normal">
                    Sign in to continue building your network.
                </h6>
            </div>

            <form onSubmit={formik.handleSubmit}>

                <div className="mt-10 ml-52">
                    <h5 className="font-base text-lg">Email</h5>

                    <input
                        type="text"
                        name="email"
                        placeholder="you@company.com"
                        className="w-[400px] h-10 pl-3 rounded-lg bg-gray-100 outline-none border border-gray-300 border focus:bg-white focus:border border-blue-500 mt-0.5"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>

                <div className="ml-52 mt-2">

                    <div className="flex gap-45">
                        <h5 className="font-base text-lg mt-4">
                            Password
                        </h5>

                        <p className="text-blue-500 underline mt-4 cursor-pointer">
                            Forgot password?
                        </p>
                    </div>

                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        className="w-[400px] h-10 pl-3 rounded-lg bg-gray-100 outline-none border border-gray-300 border focus:bg-white focus:border border-blue-500 mt-0.5"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>

                <div>
                    <input
                        className="ml-52 mt-5 mb-5"
                        type="radio"
                        id="remember"
                        name="remember"
                    />

                    <label
                        htmlFor="remember"
                        className="text-sm text-gray-600"
                    >
                        Remember me for 30 days
                    </label>
                </div>

                <div className="div">
                    <button
                        type="submit"
                        className="ml-52 w-100 h-10 bg-blue-600 text-white rounded-2xl hover:bg-blue-700"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? "Logging in...." : "Log in"}
                    </button>
                </div>

            </form>

            <div className="flex gap-1 ml-67 mt-6">
                <p>New to connect pro?</p>

                <Link to="/Signup">
                    <p className="text-blue-500 underline cursor-pointer">
                        Create an Account
                    </p>
                </Link>
            </div>

            <div className="w-[50%] h-screen bg-linear-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F] absolute top-0 right-0">

                <h1 className="text-white text-4xl font-bold mt-20 ml-10">
                    Grow the network that grows your <br></br> career
                </h1>

                <h6 className="text-white text-m mt-4 ml-10">
                    ConnectPro is where modern professionals share work,<br></br>
                    discover opportunities, and build relationships that<br></br>
                    compound.
                </h6>

                <div className="flex gap-10 mt-80 ml-10">

                    <div className="h-27 w-50 p-4 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-users h-5 w-5" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                        </svg>

                        <p className="text-white font-bold text-lg">2.4M</p>
                        <p className="text-white font-light text-m">Members</p>
                    </div>

                    <div className="h-27 w-50 p-4 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-trending-up h-5 w-5" aria-hidden="true">
                            <path d="M16 7h6v6"></path>
                            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>

                        <p className="text-white font-bold text-lg">120M</p>
                        <p className="text-white font-light text-m">Connections</p>
                    </div>

                    <div className="h-27 w-50 p-4 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F] rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-briefcase h-5 w-5" aria-hidden="true">
                            <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                        </svg>

                        <p className="text-white font-bold text-lg">48K</p>
                        <p className="text-white font-light text-m">Companies</p>
                    </div>

                </div>
            </div>

        </>
    );
}