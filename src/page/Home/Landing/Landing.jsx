import React from "react";
import Button from "../../../Component/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="grid grid-cols-1 h-[812px] items-end px-5 pb-[41px]">
      <div className=" text-left">
        <h1 className=" text-[#1D2226] text-[28px] text-left mb-[10px]">
          Welcome to PopX
        </h1>
        <p className="sub-heading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className=" mt-[29px]">
          <Link to="/signUp">
            <button className=" bg-[#6C25FF] w-full py-[14px] rounded-md text-white mb-[10px] font-medium text-[16px]">
              Create Account
            </button>
          </Link>
          <Link to="/signIn">
            <button className=" bg-[#6C25FF4B] w-full py-[14px] rounded-md text-black font-medium">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
