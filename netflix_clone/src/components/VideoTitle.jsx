import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { useSelector } from "react-redux";

const VideoTitle = ({title, overview}) => {
  const user = useSelector((state) => state.app.user);
  
  return (
    <div className=" w-[vw] aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <p className="w-1/3 mt-4">
        {overview}
      </p>
      <div className="mt-8 flex ">
        <button className=" flex items-center px-6 py-2 bg-white text-black rounded-sm hover:bg-opacity-80">
        <CiPlay1 size={"24"}/>
          <span className="ml-1">Play</span>
        </button>

        <button className="flex items-center mx-2 flex items-center px-6 py-2 bg-gray-300 text-black rounded-sm hover:bg-opacity-80">
        <CiCircleInfo size={"24"}/>
          <span className="ml-1">watch more</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
