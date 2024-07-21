import React, { useState } from "react";
import Header from "./Header";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";




const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
const isLoading = useSelector((store)=>store.app.isLoading)

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputDate = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))

    if (isLogin) {
      //login
      const user = { email, password };
      try {
          const res = await axios.post(`${API_END_POINT}/login`, user, {
              headers: {
                  "Content-Type": "application/json",
              },
              withCredentials: true,
          });

          console.log('Login Response:', res); // Log the response

          if (res.data.success) {
              toast.success(res.data.message);
              const userData = res.data.user; // Adjust according to the actual structure of the response
              console.log('User Data:', userData); // Log user data
              dispatch(setUser(userData));
              navigate("/browse");
          } else {
              toast.error(res.data.message);
          }
      } catch (error) {
          toast.error(error.response.data.message);
          console.log(error);
      }finally{
        dispatch(setLoading(false))

      }
  } else {
      //register

      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally{
        dispatch(setLoading(false))
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh]"
          src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
          alt="banner"
        />
      </div>

      <form
        onSubmit={getInputDate}
        action=""
        className=" bg-black p-12 text-white absolute flex flex-col w-3/12 my-36 left-0 right-0 items-center justify-center mx-auto opacity-85"
      >
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isLogin ? "Login" : "SignUp"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className=" rounded-sm bg-gray-800 pl-2   outline-none  py-3 my-2"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" rounded-sm bg-gray-800 pl-2  outline-none py-3 my-2"
            type="email"
            placeholder="Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-sm bg-gray-800 pl-2   outline-none py-3 my-2"
            type="password"
            placeholder="Password"
          />

          <button type="submit" className="mb-3 font-medium mt-6 bg-red-600 rounded-sm p-2">
           
            {`${isLoading?"Loading...": (isLogin ? "Login" : "Signup")}`}
          </button>

          <p className="text-white items-center flex justify-center ">
            {isLogin ? " Already have an account ?" : "New to Netflix ?"}
            <span
              onClick={loginHandler}
              className="cursor-pointer ml-2 text-blue-600 font-medium"
            >
              {isLogin ? "Signup" : "Login"}
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
