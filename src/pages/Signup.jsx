import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { isValidPassword,isEmail } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signupDetails,setSignupDetails] = useState({
        email : '',
        fullName : '',
        password : '',
        avatar : ''
    });

    const [previewImage,setPreviewImage] = useState("");

    function handleAvatar(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(!uploadedImage) return;
        setSignupDetails({
            ...signupDetails,
            avatar:uploadedImage
        });
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load",function(){
            setPreviewImage(this.result);   
        })
    }

    function handleUserInput(e){
        const {name , value} = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault(); //Default nature of form is submit page so that we have to prevent it .We will manually handle the submit
        if(!signupDetails.email || !signupDetails.fullName || !signupDetails.password || !signupDetails.avatar){
            toast.error("Please fill all the details");
            return ;
        }
        if(signupDetails.fullName.length < 5){
            toast.error("Name should be atleast of 5 characters");
            return;
        }
        if(!isEmail(signupDetails.email)){
            toast.error("Invalid email provided");
            return;
        }
        if(!isValidPassword(signupDetails.password)){
            toast.error("Invalid Password provided & Password should 6-16 characters along with atleast a number and a special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName",signupDetails.fullName);
        formData.append("email",signupDetails.email);
        formData.append("password",signupDetails.password);
        formData.append("avatar",signupDetails.avatar);


        const response = await dispatch(createAccount(formData));
        console.log(response);
        if(response?.payload?.data){
            navigate("/");
        }
        setSignupDetails({
            email : '',
            fullName : '',
            password : '',
            avatar : ''
        });
        setPreviewImage("");
    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35">
                    <h1 className="text-2xl text-center font-bold">Registration Page</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ):(
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )

                        }
                    </label>
                    <input
                        onChange={handleAvatar} 
                        type="file"
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg ,.jpeg ,.png ,.svg"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input
                            onChange={handleUserInput}
                            value={signupDetails.fullName} 
                            required
                            type="text"
                            name="fullName"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="Enter your username......"
                            id="fullName" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signupDetails.email} 
                            required
                            type="text"
                            name="email"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="Enter your email......"
                            id="email" 
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">password</label>
                        <input
                            onChange={handleUserInput}
                            value={signupDetails.password} 
                            required
                            type="password"
                            name="password"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="Enter your password......"
                            id="password" 
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Create account
                    </button>
                    <p>
                        Already have an account ? <Link to="/signin" className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}
export default Signup;