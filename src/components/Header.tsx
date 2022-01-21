import React, { useState } from 'react';
import LogoImage from '../assets/images/logo.png';

const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  React.useEffect(() => {
    console.log(nav);
  }, [nav]);

  return (
    <>
      <div className="Header flex flex-row justify-center items-center py-3">
        <div className="wrapper px-4 flex flex-row justify-between items-center w-full">
          {/* <div className=""> */}
          <div id="logo">
            <img src={LogoImage} alt="" />
          </div>
          <div className="hidden md:flex" id="links">
            <ul className="flex space-x-4 font-medium flex-row items-center Graphik text-primary">
              <li className="text-primary text-sm cursor-pointer">
                <a href={'companies'}>
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
          <div className="hidden md:flex" id="auth-btn">
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

          <button
            className="hamb w-12 h-12 outline-0 flex md:hidden"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M42.375 7.5H5.625C5.41875 7.5 5.25 7.66875 5.25 7.875V10.875C5.25 11.0813 5.41875 11.25 5.625 11.25H42.375C42.5813 11.25 42.75 11.0813 42.75 10.875V7.875C42.75 7.66875 42.5813 7.5 42.375 7.5ZM42.375 36.75H5.625C5.41875 36.75 5.25 36.9187 5.25 37.125V40.125C5.25 40.3313 5.41875 40.5 5.625 40.5H42.375C42.5813 40.5 42.75 40.3313 42.75 40.125V37.125C42.75 36.9187 42.5813 36.75 42.375 36.75ZM42.375 22.125H5.625C5.41875 22.125 5.25 22.2937 5.25 22.5V25.5C5.25 25.7063 5.41875 25.875 5.625 25.875H42.375C42.5813 25.875 42.75 25.7063 42.75 25.5V22.5C42.75 22.2937 42.5813 22.125 42.375 22.125Z"
                fill="#3F403F"
              />
            </svg>
          </button>
        </div>
      </div>

      {nav ? (
        <>
          <div className="fixed bg-white w-screen h-screen top-0 z-20">
            <button
              className="absolute top-3 right-3"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M32.3841 12.688L23.8981 21.172L15.4141 12.688L12.5861 15.516L21.0701 24L12.5861 32.484L15.4141 35.312L23.8981 26.828L32.3841 35.312L35.2121 32.484L26.7281 24L35.2121 15.516L32.3841 12.688Z"
                  fill="#3F403F"
                />
              </svg>
            </button>
            <div className="flex flex-col justify-center h-full items-center">
              <ul className="flex space-y-5 font-medium flex-col justify-cente items-center Graphik text-primary">
                <li className="text-primary text-sm cursor-pointer">
                  <a href={'companies'}>
                    <p className="">Companies</p>
                  </a>
                </li>
                <li className="text-primary text-base cursor-pointer">
                  <a href={'companies'}>Candidates</a>
                </li>
                <li className="text-primary text-base cursor-pointer">
                  <a href={'companies'}>Assessment</a>
                </li>
                <li className="text-primary text-base cursor-pointer">
                  <a href={'companies'}>Post a Job</a>
                </li>
                <li className="text-primary text-base cursor-pointer">
                  <a href={'companies'}>Career Advice</a>
                </li>
              </ul>
              <ul className="flex flex-col items-center text-lg font-medium mt-5">
              <li className="mb-4 cursor-pointer">
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
        </>
      ) : null}
      {/* </div> */}
    </>
  );
};

export default Header;
