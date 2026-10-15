export default function NetworkSection() {
  return (
    <>
      <h1 className="text-4xl font-bold text-black">
        My Network
      </h1>

      <p className="text-gray-500 mt-2">
        Manage requests and grow your professional circle.
      </p>



      <div className="relative mt-6">
        <input
          type="text" placeholder="Search people by name" className="w-full bg-white border border-gray-300 rounded-full py-3 pl-12 pr-4 outline-none focus:border-blue-500" />

        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      </div>



      <div className="flex gap-2 mt-6 bg-gray-100 rounded-full w-full p-1">
        <button className=" cursor-pointer bg-white px-5 py-2 rounded-full shadow font-medium">
          Suggested
        </button>

        <button className=" cursor-pointer px-5 py-2 text-gray-500">
          Received (2)
        </button>

        <button className="cursor-pointer px-5 py-2 text-gray-500">
          Sent (1)
        </button>

        <button className="cursor-pointer px-5 py-2 text-gray-500">
          Connections
        </button>
      </div>



      <div className="grid grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img src="https://i.pravatar.cc/120?img=47" alt="Profile" className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"/>
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm  overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img
              src="https://i.pravatar.cc/120?img=47" alt="Profile" className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"/>
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img
              src="https://i.pravatar.cc/120?img=47" alt="Profile" className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"/>
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img src="https://i.pravatar.cc/120?img=47" alt="Profile" className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"/>
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img src="https://i.pravatar.cc/120?img=47" alt="Profile" className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"/>
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="relative">
            <div className="h-20 bg-gradient-to-r from-[#4F8EF7] via-[#35C8D0] to-[#38D39F]"></div>

            <img src="https://i.pravatar.cc/120?img=47"
              alt="Profile"
              className="absolute left-1/2 -bottom-10 -translate-x-1/2 h-20 w-20 rounded-full border-4 border-white object-cover"
            />
          </div>

          <div className="text-center mt-12 px-5">
            <h3 className="text-sm font-semibold">Priya Sharma</h3>

            <p className="text-black text-xs">
              Frontend Engineer at Vercel
            </p>

            <p className="mt-1.5 text-[11px] text-gray-500">
              12 mutual connections
            </p>
          </div>

          <div className="p-5">
            <button className="w-full cursor-pointer border border-gray-300 rounded-full py-3 hover:bg-gray-100 font-medium">
              + Connect
            </button>
          </div>
        </div>



      </div>
    </>
  );
}