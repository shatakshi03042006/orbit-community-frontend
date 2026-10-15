export default function ProfileSection() {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="relative">
          <div className="h-44 bg-gradient-to-r from-[#2E1FB5] via-[#7A2DB7] to-[#E34F87]"></div>

          <img class="aspect-square h-26 w-26 ml-8 -mt-12 rounded-full" src="https://i.pravatar.cc/160?img=12"></img>
        </div>

        <div className="flex justify-between items-end px-8 pt-4 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Alex Morgan
            </h1>

            <p className="text-gray-600 text-sm mt-0.5">
              Senior Product Designer · Building delightful SaaS
            </p>

            <div className="flex items-center gap-3 mt-0.5 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-3.5 w-3.5" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <p>San Francisco, CA</p>
              </div>

              <div>•</div>

              <span className="text-blue-600 font-medium cursor-pointer">
                842 connections
              </span>
            </div>
          </div>

          <button className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil mr-1.5 h-4 w-4" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>

            <div className="text-sm font-medium">
              Edit profile
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex items-center gap-4">

          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold">842</h2>
            <p className="text-sm text-gray-500">
              Connections
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold">56</h2>
            <p className="text-sm text-gray-500">
              Posts
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-5 w-5" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div>

          <div>
            <h2 className="text-2xl font-bold">1,289</h2>
            <p className="text-sm text-gray-500">
              Profile visits
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-5 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            About
          </h2>

          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-600 ">
          Product designer with 8+ years of experience shaping clean, accessible interfaces for<br /> SaaS and fintech teams. I care about systems, craft, and shipping.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-5 p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Skills</h2>

          <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>
        </div>

        <div className="flex flex-wrap  gap-2 mt-4">
          <div className="bg-blue-100 hover:bg-gray-300 cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            React
          </div>

          <div className="bg-blue-100 hover:bg-gray-300  cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Node.js
          </div>

          <div className="bg-blue-100 hover:bg-gray-300  cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            UI/UX Design
          </div>

          <div className="bg-blue-100 hover:bg-gray-300  cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Project Mgt
          </div>

          <div className="bg-blue-100 hover:bg-gray-300  cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            TypeScript
          </div>

          <div className="bg-blue-100 hover:bg-gray-300  cursor-pointer text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            Figma
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-3 p-3">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold my-3">Experience</h2>

          <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>
        </div>

        <div className="flex gap-4 py-2 mt-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-lime-400 to-blue-500"></div>

          <div className="">
            <h3 className="font-semibold text-m ">Senior Product Designer</h3>

            <p className="text-gray-600">Linear</p>

            <p className="text-sm text-gray-500">2022 - present 3 yrs</p>

            <p className=" mb-5 text-gray-600">
              Lead design on the issue tracking surface and design system.
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300"></div>

          <div>
            <h3 className="font-semibold text-m">Product Designer</h3>

            <p className="text-gray-600">Stripe</p>

            <p className="text-sm text-gray-500">2018 – 2022 · 4 yrs</p>

            <p className=" text-gray-600">
              Designed checkout and billing flows used by millions of merchants.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-4 p-3 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Education</h2>

          <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="cursor-pointer lucide lucide-pencil h-4 w-4 text-muted-foreground" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg></button>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-700 via-purple-600 to-red-500"></div>

          <div>
            <h3 className="font-semibold text-m">Stanford University</h3>

            <p className="text-gray-600">B.S. Human-Computer Interaction</p>

            <p className="text-sm text-gray-500">2014 – 2018</p>
          </div>
        </div>
      </div>
    </>
  );
}