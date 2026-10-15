function Rightmenu() {
    return (
        <>
            <div className="sticky top-20 self-start z-10">
                <div className="bg-white  w-full h-75 border border-gray-300 rounded-xl px-4 mt-6 shadow-md">

                    <h5 className="font-bold mt-4">
                        People you may know
                    </h5>
                    <div className="flex gap-2">
                        <div className="div">
                            <img class="mt-3 aspect-square h-11 w-11 rounded-full" src="https://i.pravatar.cc/120?img=47"></img>
                            <img class="mt-3 aspect-square h-11 w-11 rounded-full" src="https://i.pravatar.cc/120?img=33"></img>
                            <img class="mt-3 aspect-square h-11 w-11 rounded-full" src="https://i.pravatar.cc/120?img=49"></img>
                            <img class="mt-3 aspect-square h-11 w-11 rounded-full" src="https://i.pravatar.cc/120?img=15"></img>
                        </div>


                        <div className="truncate text-sm">
                            <div className="mt-4">
                                <p className="font-bold"> Priya Sharma   </p>
                                <p className="text-gray-400">Frontend engineer</p>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold"> Daniel Okafor </p>
                                <p className="text-gray-400">Engineering manager</p>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold"> Mei Tanaka  </p>
                                <p className="text-gray-400">Product Manager</p>
                            </div>
                            <div className="mt-4">
                                <p className="font-bold"> Lucas Romero  </p>
                                <p className="text-gray-400">Founder & CEO </p>
                            </div>
                        </div>


                        <div className="">
                            <div className="hover:bg-green-300 cursor-pointer rounded-xl text-sm font-bold w-22 h-8 bg-blue-100 py-1 px-4 mt-6 ">
                                Connect
                            </div>
                            <div className="hover:bg-green-300 cursor-pointer rounded-xl text-sm font-bold w-22 h-8 bg-blue-100 py-1 px-4 mt-6">
                                Connect
                            </div>
                            <div className="hover:bg-green-300 cursor-pointer rounded-xl text-sm font-bold w-22 h-8 bg-blue-100 py-1 px-4 mt-6">
                                Connect
                            </div>
                            <div className="hover:bg-green-300 cursor-pointer rounded-xl text-sm font-bold w-22 h-8 bg-blue-100 py-1 px-4 mt-6">
                                Connect
                            </div>

                        </div>
                    </div>

                </div>


                <div className="w-full h-44 border border-gray-300 rounded-2xl px-4 py-4 mt-6 shadow-md bg-white">
                    <h6 className="font-bold">Trending Topics</h6>
                    <div className="mt-4 text-gray-600">
                        <p className="hover:text-blue-500 cursor-pointer">#DesignSystem</p>
                        <p className="hover:text-blue-500 cursor-pointer">#RemoteWork</p>
                        <p className="hover:text-blue-500 cursor-pointer">#AllProductivity</p>
                        <p className="hover:text-blue-500 cursor-pointer">#Startups</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Rightmenu;