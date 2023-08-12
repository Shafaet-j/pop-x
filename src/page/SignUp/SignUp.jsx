import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="px-5 pt-10 h-[812px] relative">
      <div className=" text-left">
        <h1 className=" text-[#1D2226] text-[28px] text-left mb-[31px] font-medium">
          Create your <br /> PopX account
        </h1>
        <div>
          <form>
            <div>
              <div className=" flex flex-col mb-[23px]">
                <label
                  htmlFor="full-name"
                  className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[143px] z-10 bg-[#f7f8f9] ml-3 pl-1"
                >
                  Full Name
                </label>
                <input
                  type="email"
                  className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                  placeholder="Type your Name"
                  autoFocus
                />
              </div>
              <div className=" flex flex-col mb-[23px]">
                <label
                  htmlFor="email"
                  className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[215px] z-10 bg-[#f7f8f9] ml-3 pl-1"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                  placeholder="type phone Number"
                  autoFocus
                />
              </div>
              <div className=" flex flex-col mb-[23px]">
                <label
                  htmlFor="email"
                  className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[290px] z-10 bg-[#f7f8f9] ml-3 pl-1"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                  placeholder="Type Email address"
                  autoFocus
                />
              </div>
              <div className=" flex flex-col mb-[23px]">
                <label
                  htmlFor="password"
                  className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[362px] z-10 bg-[#f7f8f9] ml-3 pl-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                  placeholder="Type password"
                  autoFocus
                />
              </div>
              <div className=" flex flex-col mb-[18px]">
                <label
                  htmlFor="company"
                  className=" pr-[13px]  pt-[2px] text-[#6C25FF] text-[13px] absolute top-[435px] z-10 bg-[#f7f8f9] ml-3 pl-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className=" py-3 ps-4 border-[1px] border-[#CBCBCB] bg-[#f7f8f9] rounded-md relative outline-none"
                  placeholder="Company name"
                  autoFocus
                />
              </div>
              <div className=" flex flex-col">
                <label className=" text-[13px] font-light" htmlFor="agency">
                  Are you an Agency?
                </label>
                <div className="flex items-center gap-6">
                  <div>
                    <input
                      type="radio"
                      name="radio-3"
                      className=" mr-3 bg-[#6C25FF]"
                      checked
                    />
                    <span>Yes</span>
                  </div>
                  <div>
                    <input type="radio" name="radio-3" className=" mr-3" />
                    <span>No</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" ">
              <Link to="/setting">
                <button className=" bg-[#6C25FF] min-w-[calc(100%-40px)] py-[14px] rounded-md text-white absolute bottom-[30px]">
                  Create account
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
