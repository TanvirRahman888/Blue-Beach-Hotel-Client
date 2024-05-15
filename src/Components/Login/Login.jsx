import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Login = () => {

    const {logIn,logInWithGoogle, apiLink}=useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const location =useLocation();
    const navigate =useNavigate();
    const handelLogInForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        logIn(email, password)
            .then((result) => {
                // console.log(result.user, "Log in Page");
                const currentUser={email}

                axios.post(`${apiLink}/jwt`,currentUser,{withCredentials:true})
                .then(res=>{
                    // console.log(res.data);
                    if (res.data.success) {
                        navigate(location?.state ? location.state : "/" );
                    }
                })
                
                // alert("Log in Successful");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                // navigate(location?.state ? location.state : "/" );
                // get access token


            })
            .catch((error) => {
                console.log(error, "Log in Page");
               
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Log in Decline",
                    showConfirmButton: false,
                    timer: 1500
                  });
            });           

    }
    const handelGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                // console.log(result.user.email);
                const email=(result.user.email);
                const currentUser={email}

                axios.post(`${apiLink}/jwt`,currentUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                    if (res.data.success) {
                        navigate(location?.state ? location.state : "/" );
                    }
                })
                // alert("Log in with Google");
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log in with Google",
                    showConfirmButton: false,
                    timer: 1500
                  });
                // navigate(location?.state ? location.state : "/" );
                
            })
    }

    return (
        <div className="flex flex-col md:flex-row gap-5 p-5">
            <div className="border md:w-1/2 p-5 rounded-2xl shadow-lg">
                <div className="p-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 md:w-2/3 bg-slate-100 mx-auto my-32">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handelLogInForm} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label className="block dark:text-gray-600">Password</label>
                            <div className=" relative"> <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                                <div onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4">
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            <div className="flex justify-end text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="bg-blue-200 hover:bg-blue-300 font-bold text-lg py-3 block w-full p-3 text-center rounded-xl dark:text-gray-50 dark:bg-violet-600">Log In</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handelGoogleLogIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-center sm:px-6 dark:text-gray-600">Do not have an account?
                        <Link to={'/register'} className="underline dark:text-gray-800 ml-3 link">Register</Link>
                    </p>
                </div>
            </div>


            <div className="border md:w-1/2 p-5 rounded-2xl shadow-lg flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/man-sitting-desk-unlocking-computer-computer-settings-login-flat-illustration_74855-20645.jpg" alt="" className="w-full" />
            </div>
        </div>
    );
};

export default Login;