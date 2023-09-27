import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

function Signin(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signinDetails,setSigninDetails] = useState({
        email : '',
        password : ''
    });

    function handleUserInput(e){
        const {name , value} = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault(); //Default nature of form is submit page so that we have to prevent it .We will manually handle the submit
        if(!signinDetails.email ||  !signinDetails.password ){
            toast.error("Please fill all the details");
            return ;
        }
     
        if(!isEmail(signinDetails.email)){
            toast.error("Invalid email provided");
            return;
        }

        const response = await dispatch(login(signinDetails));
        console.log(response);
        if(response?.payload?.data){
            navigate("/");
        }
        setSigninDetails({
            email : '',
            password : ''
        });
    }

    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-35">
                    <h1 className="text-2xl text-center font-bold">LogIn Page</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={handleUserInput}
                            value={signinDetails.email} 
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
                            value={signinDetails.password} 
                            required
                            type="password"
                            name="password"
                            className="bg-transparent px-2 py-1 border"
                            placeholder="Enter your password......"
                            id="password" 
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300">
                        Sign In
                    </button>
                    <p>
                        Don't have an account ? <Link to="/signup" className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}
export default Signin;