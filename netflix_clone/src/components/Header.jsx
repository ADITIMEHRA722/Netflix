import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { setUser  } from "../redux/userSlice";
import { setToggle  } from "../redux/movieSlice";
import toast from "react-hot-toast";


const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const user = useSelector((state) => state.app.user);
  const toggle = useSelector(store => store.movie.toggle)

  const logoutHandler = async() =>{
     try{
      const res = await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/")
    }catch(error){
  console.log(error);
     }
  }

  const toggleHandler = () =>{
   dispatch(setToggle()); 
  }


  return (
    <div className="px-4 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black ">
      <img
        className="w-56"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt=""
      />

 
  {
    user && (
 <div className="flex items-center px-6">
  <IoIosArrowDropdown className="text-white" size={"24px"} />
    <h1 className="text-lg font-bold text-white">{user.fullName}</h1>
    <div className="ml-4 ">
      <button onClick={logoutHandler} className="mr-2 bg-red-800 text-white px-4 py-2">Logout</button>
      <button  onClick={toggleHandler} className="bg-red-800 text-white px-4 py-2">{toggle? "Home": "Search Movie"}</button>
    </div>
  </div>
    
    )
  }
 
 
 
    
 
       
   
    </div>
  )
}

export default Header;
