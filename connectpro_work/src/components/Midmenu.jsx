import { useFormik } from "formik";
import axiosInstance from "../axios/axiosinstance";
import { useEffect, useState } from "react";
function Midmenu() {
    const [posts, setPosts] = useState([]);

    const initialState = {
        image: "",
        content: "",
    };
    useEffect(() => {
        getPosts();
    }, []);
    const getPosts = async () => {
        try {
            const authData = JSON.parse(localStorage.getItem("authData"));
            //console.log(authData.data);
            const userId = authData.user.id;
            console.log("AUTH DATA:", authData);
            const result = await axiosInstance.get(
                `/api/posts/user/${userId}`
            );
            console.log("POSTS FROM API:", result.data.posts);
            console.log(result);
            console.log(result.data);
            setPosts(result?.data.posts);
        } catch (error) {
            console.log(error);
            console.log(error.response?.data);
        }
    };
    console.log("POSTS:", posts);
    const formik = useFormik({
        initialValues: initialState,

        onSubmit: async (values) => {
            try {
                const result = await axiosInstance.post("/api/posts", values);


                console.log(result);
                console.log(result.data);

            } catch (error) {
                console.log(error);
                console.log(error.response?.data);
            }
        }
    });
    return (
        <>
            <div>
                <div className=" bg-white h-55 rounded-xl border border-gray-300 mt-6 shadow-md">
                    <div className="  max-w-[95%] mx-auto flex gap-4  mt-4">
                        <img class=" h-11 w-11 mt-2 rounded-full aspect-square" src="https://i.pravatar.cc/160?img=12"></img>

                        <input type="text"
                            value={formik.values.content}
                            onChange={formik.handleChange}
                            name="content"
                            placeholder=" What's on your mind, Alex?" className=" outline-none focus:border-blue-500 focus:bg-white w-160 h-16 px-4 rounded-2xl bg-gray-100 border border-gray-300" />

                    </div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="div">

                            <input type="text"
                                value={formik.values.image}
                                onChange={formik.handleChange}
                                name="image"
                                placeholder="Enter image URL" className=" outline-none focus:border-blue-500 focus:bg-white w-[95%] h-10 px-4 rounded-2xl bg-gray-100 border border-gray-300 mt-3 ml-3" />

                        </div>


                        <div className=" max-w-[95%] mx-auto border border-gray-300 mt-3"></div>



                        <div className=" max-w-[92%] mx-auto">
                            <div className="flex mt-4 items-center justify-between">
                                <div className=" border-none flex items-center gap-10">
                                    <div className="hover:bg-green-200 p-2 rounded-3xl flex gap-2 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-[2px] text-blue-500 lucide lucide-image mr-1.5 h-4 w-4 text-primary" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                                        <p className="text-sm">Photo</p>
                                    </div>
                                    <div className="hover:bg-green-200 p-2 rounded-3xl cursor-pointer flex gap-2">
                                        <svg className=" mt-[2px] text-green-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mt-[2px] text-green-500 lucide lucide-calendar mr-1.5 h-4 w-4 text-accent" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                                        <p className="text-sm">Event</p>
                                    </div>
                                    <div className="hover:bg-green-200 p-2 rounded-3xl cursor-pointer flex gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" mt-[2px] text-blue-500 lucide lucide-file-text mr-1.5 h-4 w-4 text-primary" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                                        <p className="text-sm">Article</p>
                                    </div>
                                </div>

                                <div className="bg-blue-600  hover:bg-blue-400 cursor-pointer text-white px-6 py-1 font-bold text-sm rounded-4xl h-8 w-20">
                                    <button>Post</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div >





                {posts?.map((post) => (
                    <div
                        key={post._id}
                        className="w-full  rounded-xl border border-gray-300 mt-4 shadow-md bg-white"
                    >

                        <div className="flex gap-3 px-6 pt-6 pb-4">
                            <div>
                                <img
                                    className="aspect-square h-11 rounded-full w-11"
                                    src="https://i.pravatar.cc/120?img=49"
                                    alt=""
                                />
                            </div>

                            <div>
                                <div className="flex font-bold">
                                    {post.user.firstName} {post.user.lastName}
                                    <p className="text-gray-600 font-light">
                                        <pre>  2h</pre>
                                    </p>
                                </div>

                                <p className="text-gray-600 text-sm font-normal">
                                    Product Manager . Ex Google
                                </p>
                            </div>
                        </div>


                        <div className="px-6 pb-4">
                            <div>
                                {post.content}
                            </div>
                        </div>


                        {post.image && (
                            <img
                                alt=""
                                className="max-h-[480px] w-full object-cover"
                                src={post.image}
                            />
                        )}


                        <div className="flex justify-between px-6 pt-4">
                            <div className="text-gray-600 text-sm">
                                124 Likes
                            </div>

                            <div className="text-gray-600 text-sm">
                                2 comments
                            </div>
                        </div>

                        <div className="border border-gray-300 mt-2"></div>


                        <div className="flex justify-evenly py-3">

                            <div className="flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-1 h-4 w-4"
                                >
                                    <path d="M2 9.5a5 5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                                </svg>

                                <div>Like</div>
                            </div>

                            <div className="flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-1 h-4 w-4"
                                >
                                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a10 10 0 1 0-4.777-4.719"></path>
                                </svg>

                                <div>Comment</div>
                            </div>

                            <div className="flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mt-1 h-4 w-4"
                                >
                                    <circle cx="18" cy="5" r="3"></circle>
                                    <circle cx="6" cy="12" r="3"></circle>
                                    <circle cx="18" cy="19" r="3"></circle>
                                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                                </svg>

                                <div>Share</div>
                            </div>

                        </div>
                    </div>
                ))} </div >






        </>
    )
}
export default Midmenu;

