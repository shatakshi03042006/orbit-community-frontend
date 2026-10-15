import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosinstance";

function Leftmenu() {
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axiosInstance.post(
                "/api/auth/logout",
                {}

            );
            if (response.success) {
                navigate("/Logout");
            }



        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>

            <div className="sticky top-20 self-start z-10">
                <div className=" w-full h-70 bg-white border border-gray-300 rounded-xl mt-6 shadow-md">
                    <div className="rounded-xl">
                        <div className="h-20 rounded-t-xl  bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>
                        <img className=" rounded-full aspect-square h-19 w-19 flex items-center mx-auto -mt-10" src="https://i.pravatar.cc/160?img=12"></img>

                    </div>
                    <div className="mt-3 text-base text-center font-bold">Alex Morgan </div>
                    <div className="mt-1 text-normal text-xs text-center text-gray-500">Senior Product Designer . Building <br></br> Delightful SaaS</div>
                    <div className=" max-w-[90%] mx-auto  border border-gray-300 mt-4"></div>
                    <div className="px-6 flex gap-7 mt-2">
                        <div className="">
                            <h6 className="text-blue-600 text-base font-bold">842</h6>
                            <p className="text-gray-500 text-base text-normal">CONNECTIONS</p>
                        </div>
                        <div className="">
                            <h6 className="text-blue-600 text-base font-bold">52</h6>
                            <p className="text-gray-500 text-base text-normal">POSTS</p>
                        </div>
                        <div className="">
                            <h6 className="text-blue-600 text-base font-bold">1289</h6>
                            <p className="text-gray-500 text-base text-normal">VISITS</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-70 border border-gray-300 rounded-xl mt-6 text-gray-600 py-5 shadow-md">

                    <Link to="/"> <div className=" hover:bg-blue-100  hover:rounded-3xl  flex gap-7 px-8 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house h-[18px] w-[18px]" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        Home
                    </div>
                    </Link>

                    <Link to="/MyNetwork">
                        <div className="hover:bg-blue-100 hover:rounded-3xl  flex gap-7 py-2 px-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-[18px] w-[18px]" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            My Network
                        </div>
                    </Link>

                    <Link to="/Profile">
                        <div className="hover:bg-blue-100 hover:rounded-3xl  flex gap-7 py-2 px-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user h-[18px] w-[18px]" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            Profile
                        </div>
                    </Link>

                    <Link to="/Notifications">
                        <div className="hover:bg-blue-100 hover:rounded-3xl  flex gap-7 py-2 px-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell h-[18px] w-[18px]" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                            Notifications
                        </div>
                    </Link>

                    <Link to="/Settings">
                        <div className="hover:bg-blue-100 hover:rounded-3xl flex gap-7 py-2 px-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings h-[18px] w-[18px]" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            Settings
                        </div>
                    </Link>

                    <Link to="/Logout">
                        <button onClick={fetchData}><div className="hover:bg-blue-100 hover:rounded-3xl hover:w-[300px] flex gap-7 py-2 px-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out h-[18px] w-[18px]" aria-hidden="true"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                            Logout
                        </div></button>

                    </Link>
                </div>
            </div>


        </>
    )
}
export default Leftmenu;