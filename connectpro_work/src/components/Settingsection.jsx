export default function Settingsection() {
    return (
        <>
            <h2 className="text-2xl font-bold">Settings</h2>
            <h6 className="text-m font-base text-gray-500">Manage your account, privacy, and preferences.</h6>

            <div className="h-52 w-full bg-white rounded-3xl mt-4 border border-blue-200  px-8 py-8">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-blue-500 lucide lucide-user h-5 w-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <p className="text-lg font-medium text-black">Account</p>
                </div>

                <div className="flex gap-40 justify-between mt-4">

                    <p className="text-m mt-1.5 font-medium text-gray-500">Email</p>
                    <input type="email" className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none " /></div>
                <div className="flex justify-between gap-38 mt-4">
                    <p className="text-m mt-1.5 font-medium text-gray-500">Phone</p>
                    <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none " />
                </div>
            </div>




            <div className="h-52 w-full bg-white rounded-3xl mt-4 border border-blue-200  px-8 py-8">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-blue-500 lucide lucide-user h-5 w-5" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    </div>
                    <p className="text-lg font-medium text-black">Profile</p>
                </div>

                <div className="flex gap-38 justify-between mt-4">

                    <p className="text-sm mt-1.5 font-medium text-gray-500">Display Name</p>
                    <input type="text" className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none " /></div>
                <div className="flex justify-between gap-38 mt-4">
                    <p className="text-m mt-1.5 font-medium text-gray-500">Headline</p>
                    <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none " />
                </div>
            </div>

            <div className="h-87  w-full bg-white rounded-3xl mt-4 border border-blue-200  px-8 py-8">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-blue-500 lucide lucide-shield h-4 w-4" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    </div>
                    <p className="text-lg font-medium text-black">Privacy</p>
                </div>
                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Public profile</p>
                        <p className="text-sm text-gray-500">Allow anyone to view your profile.</p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-4.5 w-full mb-4"></div>






                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Show activity</p>
                        <p className="text-sm text-gray-500">Let connections see when you're active.</p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-4.5 w-full"></div>

                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Discoverable by email</p>
                        <p className="text-sm text-gray-500">
                            Allow people to find you by email.</p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>



            </div>


            <div className="h-87  w-full bg-white rounded-3xl mt-4 border border-blue-200  px-8 py-8">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-blue-500 lucide lucide-bell h-4 w-4" aria-hidden="true"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>                    </div>
                    <p className="text-lg font-medium text-black">Notifications</p>
                </div>
                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Connection requests</p>
                        <p className="text-sm text-gray-500">
                            Email me about new requests.

                        </p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-4.5 w-full mb-4"></div>






                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Likes & comments
                        </p>
                        <p className="text-sm text-gray-500">
                            Get notified about engagement.</p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>
                <div className="border border-gray-300 mt-4.5 w-full"></div>

                <div className="flex justify-between gap-38 mt-4">
                    <div className="div">
                        <p className="text-m mt-1.5 font-medium text-black">Weekly digest</p>
                        <p className="text-sm text-gray-500">
                            A summary every Monday morning.</p>
                    </div>


                    <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center p-1 cursor-pointer">
                        <div className="w-6 h-6 bg-white rounded-full shadow"></div>
                    </div>
                </div>


            </div>

            <div className="h-80 w-full bg-white rounded-3xl mt-4 border border-blue-200 px-8 py-8">
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 bg-gray-200 rounded-2xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" text-blue-500 lucide lucide-key-round h-4 w-4" aria-hidden="true"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                    </div>


                    <p className="text-lg font-medium text-black">Change Password</p>
                </div>

                <div className="flex items-center mt-6">
                    <p className="w-24 text-sm font-medium text-gray-500">Current</p>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                    />
                </div>

                <div className="flex items-center mt-4">
                    <p className="w-24 text-sm font-medium text-gray-500">New</p>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                    />
                </div>

                <div className="flex items-center mt-4">
                    <p className="w-24 text-sm font-medium text-gray-500">Confirm</p>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
                    />
                </div> <div className="div">
                <button className="ml-147 flex gap-1 cursor-pointer  bg-blue-500 w-50 text-white px-6 py-2 rounded-3xl mt-6 hover:bg-blue-500 transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"  className="mt-0.5 " width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock mr-1.5 h-4 w-4" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Update Password
                </button>
            </div>
            </div>

           


        </>
    )
}