import React from 'react';
import logo from '../assets/images/logo.png';
// social
import facebook from '../assets/images/social/Facebook.png';
import instagram from '../assets/images/social/Instagram.png';
import linkedin from '../assets/images/social/LinkedIn.png';
import twitter from '../assets/images/social/Twitter.png';

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-row justify-center mt-40">
        <div className="wrapper flex flex-col justify-center w-11/12">
          <div
            className=" py-8 border-t w-full border-t-e5 Graphik text-primary font-medium text-sm tracking-wider"
            id="top"
          >
            <div className="wrapper flex flex-col break-1:flex-row items-start">
              <div className="left  w-full break-1:w-1/5">
                <div className="relative flex flex-col justify-center items-center">
                  <div className="img relative mb-5 break-1:border-l break-1:border-l-e5">
                    <img src={logo} alt="logo" />
                  </div>
                  <p className="text-lg break-1:text-xs w-3/4 text-center break-1:text-left break-1:w-full">
                    Getajobng provides a full online service for anyone looking
                    for a new job. We're not a recruitment agency, we're a job
                    site.
                  </p>
                </div>
              </div>
              <div className="center flex-1 w-full">
                <div className=" flex flex-row justify-between px-4 my-8 break-1:my-0">
                  <ul className="">
                    <li className="">
                      <h2 className="GT-Walsheim-Pro text-lg">Information</h2>
                      <div className="mt-6">
                        <ul className="flex flex-col justify-start space-y-3">
                          <li className="">About Us</li>
                          <li className="">Contact Us</li>
                          <li className="">Terms {'&'} Condition</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="">
                      <h2 className="GT-Walsheim-Pro text-lg">Job Seekers</h2>
                      <div className="mt-6">
                        <ul className="flex flex-col justify-start space-y-3">
                          <li className="">Create Account</li>
                          <li className="">Job List</li>
                          <li className="">FAQ</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="">
                      <h2 className="GT-Walsheim-Pro text-lg">Employers</h2>
                      <div className="mt-6">
                        <ul className="flex flex-col justify-start space-y-3">
                          <li className="">Create Account</li>
                          <li className="">Job List</li>
                          <li className="">FAQ</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right w-full break-1:w-1/5">
                <div className="">
                  <h2 className="GT-Walsheim-Pro text-center break-1:text-left text-lg">
                    Social Media:
                  </h2>
                  <div className="mt-6">
                    <ul className="flex flex-row justify-center break-1:justify-start items-center space-x-2">
                      <li className="">
                        <div className="">
                          <a href="" id="">
                            <img src={instagram} alt="" />
                          </a>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <a href="" id="">
                            <img src={twitter} alt="" />
                          </a>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <a href="" id="">
                            <img src={facebook} alt="" />
                          </a>
                        </div>
                      </li>
                      <li className="">
                        <div className="">
                          <a href="" id="">
                            <img src={linkedin} alt="" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" flex flex-row justify-center items-center my-10 Graphik"
            id="bottom"
          >
            <p className="text-primary font-medium text-sm tracking-widest">
              ?? Copyright Get-A-Job RMS 2019, All right reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
