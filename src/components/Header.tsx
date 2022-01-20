import React from "react";
import LogoImage from "../assets/images/logo.png";

const Header: React.FC = () => {
  return (
    <div className="Header flex flex-row justify-center items-center py-3">
      <div className="wrapper px-4 flex flex-row justify-between items-center w-full">
        {/* <div className=""> */}
        <div id="logo">
          <img src={LogoImage} alt="" />
        </div>
        <div id="links">
          <ul className="flex space-x-4 font-medium flex-row items-center Graphik text-primary">
            <li className="text-primary text-sm cursor-pointer">
              <a href={"companies"}>
                <p className="">Companies</p>
              </a>
            </li>
            <li className="text-primary text-sm cursor-pointer">
              <a href={'companies'}>Candidates</a>
            </li>
            <li className="text-primary text-sm cursor-pointer">
              <a href={'companies'}>Assessment</a>
            </li>
            <li className="text-primary text-sm cursor-pointer">
              <a href={'companies'}>Post a Job</a>
            </li>
            <li className="text-primary text-sm cursor-pointer">
              <a href={'companies'}>Career Advice</a>
            </li>
          </ul>
        </div>
        <div id="auth-btn">
          <ul className="flex flex-row items-center text-xs font-medium">
            <li className="mr-4 cursor-pointer">
              {/* <Link href={'/'}> */}
              <p>Sign Up</p>
              {/* </Link> */}
            </li>
            <li className="cursor-pointer">
              {/* <Link href={'/'}> */}
              <p className="px-6 py-2 bg-green-light rounded-50px text-green-dark">
                Sign Up
              </p>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
