import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch  = useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-6">
      {/* Menu and Logo */}
      <div className="flex gap-3 col-span-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-6 cursor-pointer"
          onClick={()=>toggleMenuHandler()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <img
          alt="youtube logo"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
          }
          className="h-6"
        />
      </div>

      {/* Search */}
      <div className="col-span-10 justify-center flex ">
        <input
          className="w-1/2 border rounded-l-full px-8 outline-blue-500 border-slate-300"
          type="text"
        />
        <button className="border rounded-r-full px-6 border-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          
        </button>
      </div>

      {/* Profile and notifications */}
      <div className="col-span-1 flex gap-10 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.8"
          stroke="currentColor"
          className="w-8 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <img alt="profile" src="ashraya.jpeg" className=" h-10 rounded-full" />
      </div>
    </div>
  );
};

export default Head;
