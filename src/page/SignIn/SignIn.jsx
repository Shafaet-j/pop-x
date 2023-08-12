import React from "react";

const SignIn = () => {
  return (
    <section className="grid grid-cols-1 h-[812px] px-5 pb-[41px] items-start pt-10">
      <div className=" text-left">
        <h1 className=" text-[#1D2226] text-[28px] text-left mb-[10px]">
          Signin to your PopX account
        </h1>
        <p className="sub-heading mb-[33px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div>
          <form className="">
            <div className=" flex flex-col mb-[23px]">
              <label
                htmlFor="email"
                className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[208px] z-10 bg-[#f7f8f9] ml-3 pl-1"
              >
                Email Address
              </label>
              <input
                type="email"
                className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                placeholder="Enter Email address"
                autoFocus
              />
            </div>
            <div className=" flex flex-col">
              <label
                htmlFor="password"
                className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[282px] z-10 bg-[#f7f8f9] ml-3 pl-1"
              >
                Password
              </label>
              <input
                type="password"
                className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                placeholder="Enter password"
                autoFocus
              />
            </div>
          </form>
        </div>
        <div className=" mt-[29px]">
          <button className=" bg-[#CBCBCB] w-full py-[14px] rounded-md text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
