import logoIpsum from "/logoipsum-297.svg";
import { Button } from "@/components/ui/button";
import iotPic from "/internet-of-things.png";
import facebookLogo from "/facebook.png";
import googleLogo from "/google.png";
import { Input } from "@/components/ui/input";
import { CheckboxRemember } from "@/components/Authentication/CheckBoxRemember";
import { useState } from "react";
import { AuthForm } from "@/components/Authentication/AuthForm";
function Authentication() {
  const [changePage, setChangePage] = useState(false);

  return (
    <div className="flex w-screen h-screen font-inter">
      <div className="w-2/4 h-full flex flex-col  justify-center items-center  bg-blue-500">
        <img src={iotPic} alt="iot-logo" className="animate-floating" />
        <div className="text-5xl text-white mt-10">
          Automate your life with IOT
        </div>
        <p className="text-gray-300 text-base mt-3">
          Everything is in your hands, let technology help you with it!
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center mt-48 ">
        <div className="flex flex-col items-start">
          <img src={logoIpsum} alt="brand-logo" className="mb-8" />
          <h1 className="text-3xl font-semibold">
            {changePage ? "Create" : "Log in to"} your Account
          </h1>
          <p className="text-gray-700">
            {!changePage && "Welcome Back!"} Select Method{" "}
            {changePage ? "to create your account" : "to log in"}
          </p>
        </div>
        <div className="flex gap-8 my-8">
          <Button className="border border-gray-300 bg-transparent text-black flex gap-2 items-center hover:text-white">
            <img
              src={googleLogo}
              alt="google-icon"
              className="aspect-square h-5"
            />{" "}
            Google
          </Button>
          <Button className="border border-gray-300 bg-transparent text-black flex gap-2 items-center hover:text-white">
            <img
              src={facebookLogo}
              alt="google-icon"
              className="aspect-square h-5"
            />{" "}
            Facebook
          </Button>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-500">
            ------ or{" "}
            {changePage
              ? "create your personal"
              : "continue with your personal"}{" "}
            account ------
          </p>
          <div className="flex flex-col gap-4 my-4">
            {changePage && (
              <Input
                className=" border border-gray-300"
                placeholder="Email Address"
                type="email"
              />
            )}
            <AuthForm changePage={changePage} />
            <div className="flex items-center justify-center text-sm gap-2 mt-8">
              {!changePage
                ? "Don't have an account?"
                : "Already have an account?"}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setChangePage(!changePage)}
              >
                {changePage ? "Proceed to log in" : "Create an account"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Authentication;
