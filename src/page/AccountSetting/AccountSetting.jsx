import React from "react";
import girl from "../../assets/girl.png";
import camera from "../../assets/camera.png";

const AccountSetting = () => {
  return (
    <section className="">
      <nav className=" bg-white h-[68px] flex items-center">
        <h1 className=" ml-[15px] text-[18px]">Account Settings</h1>
      </nav>
      <div className=" flex items-center gap-5 px-[20px] my-[30px]">
        <div className=" relative">
          <img src={girl} className="relative" alt="" />
          <img
            src={camera}
            className="absolute top-[50px] left-[60px]"
            alt=""
          />
        </div>
        <div className=" text-left">
          <h2 className=" text-[15px] font-medium">Marry Doe</h2>
          <p className=" text-[14px]">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className=" text-left px-[20px]">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </section>
  );
};

export default AccountSetting;
