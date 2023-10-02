import { useDispatch } from "react-redux";
import HomeLayout from "../../layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { createNewCourse } from "../../redux/slices/courseSlices";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput,setUserInput] = useState({
        title : "",
        description:"",
        category:"",
        createdBy:"",
        thumbnail:null,     //file
        previewImage:""
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uplaodedImage =  e.target.files[0];
        if(uplaodedImage){
                const fileReader = new FileReader();
                fileReader.readAsDataURL(uplaodedImage);
                fileReader.addEventListener("load",function(){
                    setUserInput({
                        ...userInput,
                        thumbnail:uplaodedImage,
                        previewImage:this.result
                    });
                });
        }
    }

    function handleUserInput(e){
        const {name , value} = e.target;
        setUserInput({
            ...userInput,
            [name]:value
        });
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.title || !userInput.description || !userInput.category || !userInput.createdBy || !userInput.thumbnail){
            toast.error("All fields are mandatory");
            return;
        }
        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success){
            setUserInput({
                title : "",
                description:"",
                category:"",
                createdBy:"",
                thumbnail:null,     //file
                previewImage:""
            });
            navigate("/courses");
        }
    }

    return(
        <HomeLayout>
            <div className="h-[90vh] flex items-center justify-center">
                <form
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] h-[500px] my-10 shadow-[0_0_10px_black] relative"
                >
                    <Link onClick={() => navigate(-1)} className="absolute top-8 text-2xl link text-accent cursor-pointer">
                        <AiOutlineArrowLeft />
                    </Link>
                    <h1 className="text-center text-2xl font-bold">
                        Create new course
                    </h1>
                    <main className="grid grid-cols-2 gap-x-10">
                        {/* Left */}
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_uploads" className="cursor-pointer">
                                    {
                                        userInput?.previewImage ? (
                                            <img
                                                src={userInput?.previewImage}
                                                className="w-full h-44 m-auto border"
                                            />
                                        ):(
                                            <div className="w-full h-44 m-auto flex justify-center items-center border">
                                                <h1 className="font-bold text-lg">Upload course thumbnail</h1>
                                            </div>
                                        )
                                    }
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    name="image_uploads"
                                    accept=".jpg , .jpeg , .png , .svg"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title" className="text-lg font-semibold">Course Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="enter the title of course"
                                    onChange={handleUserInput}
                                    value={userInput.title}
                                    className="bg-transparent px-2 py-1 border"
                                 />
                            </div>
                        </div>
                        {/* Right */}
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdBy" className="text-lg font-semibold">Instructor</label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="enter the instructor of course"
                                    onChange={handleUserInput}
                                    value={userInput.createdBy}
                                    className="bg-transparent px-2 py-1 border"
                                 />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg font-semibold">Category</label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="enter the category of course"
                                    onChange={handleUserInput}
                                    value={userInput.category}
                                    className="bg-transparent px-2 py-1 border"
                                 />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg font-semibold">Description</label>
                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="enter the description of course"
                                    onChange={handleUserInput}
                                    value={userInput.description}
                                    className="bg-transparent px-2 py-1 border h-24 resize-none overflow-y-scroll"
                                 />
                            </div>
                            
                        </div>
                    </main>
                    <button 
                        type="submit"
                        className="w-full py-2 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-700 transition-all ease-in-out duration-300"
                    >
                        Create Course
                    </button>

                </form>
            </div>
        </HomeLayout>
    );
}
export default CreateCourse;