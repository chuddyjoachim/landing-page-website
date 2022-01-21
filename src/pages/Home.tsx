import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import rectangleImg from '../assets/images/Rectangle.png';
// import customTopImg from '../assets/images/custom/topimg1.png';
import customTopImg from '../assets/images/custom/hero-image.png';
import googlePt from '../assets/images/custom/top-partner/google-pt.png';
import paystackPt from '../assets/images/custom/top-partner/paystack-pt.png';
import kpmgPt from '../assets/images/custom/top-partner/kpmg-pt.png';
import RecomendedCards from '../components/RecomendedCards';
import banner1 from '../assets/images/custom/banner-1.png';

import paystackRc from '../assets/images/custom/recomended/paystack-rc.png';
import googlekRc from '../assets/images/custom/recomended/google-rc.png';
import flutterwaveRc from '../assets/images/custom/recomended/flutterwave-rc.png';
import accessRc from '../assets/images/custom/recomended/access-rc.png';

import oilGasCt from '../assets/images/custom/categories/oil-gas.png';
import healtCareCt from '../assets/images/custom/categories/healthcare.png';
import educationCt from '../assets/images/custom/categories/education.png';
import accountingCt from '../assets/images/custom/categories/accounting.png';

import teamMd from '../assets/images/custom/team.png';

import Footer from '../components/Footer';

import quoteImg from '../assets/images/quote.png';
import personasA from '../assets/images/custom/person-1.png';
import Logos from '../assets/images/custom/Logos.png';

const Home = () => {
  return (
    <>
      <div id="top-bg" className="absolute -top-6 w-full -z-10">
        <div className="w-2/3">
          <img src={rectangleImg} alt="" />
        </div>
      </div>
      {/* header */}
      <Header />

      {/* top section -- intro */}
      <section className=" w-full flex flex-row justify-center mt-40">
        <div className="wrapper flex flex-row items-center justify-center w-11/12">
          <div className="left w-2/4 flex flex-col justify-center">
            <div className="wrap flex flex-col justify-center">
              <h1 className="GT-Walsheim-Pro text-primary text-5xl font-bold mb-6">
                Find a <span className="text-green-dark">job</span> easily
              </h1>
              <p className="Graphik w-5/6 font-medium text-base leading-loose tracking-widest">
                With verified, up-to-date job listings directly from employer
                websites, we create a premium experience for job seekers,
                employers, and data seekers alike
              </p>
              <div className="mt-6 w-4/5">
                <Searchbar />
              </div>
              <div className="mt-7">
                <h1 className="Graphik font-extrabold text-lg text-primary tracking-widest">
                  Trusted By:
                </h1>

                <div className="mt-7">
                  <ul className="flex flex-row items-center space-x-4">
                    <li className="h-10">
                      <img src={paystackPt} alt="" />
                    </li>
                    <li className="h-10">
                      <img src={googlePt} alt="" />
                    </li>
                    <li className="h-10">
                      <img src={kpmgPt} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-2/4 flex flex-row">
            <div className="w-full relative flex flex-row justify-center items-center">
              <img src={customTopImg} alt="" className="w-3/4 absolute p-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Jobs */}
      <section
        id="Recommended-jobs"
        className="w-full flex flex-row justify-center mt-80"
      >
        <div className="wrapper flex flex-col justify-center w-11/12">
          <h1 className="GT-Walsheim-Pro text-primary text-3xl font-bold mb-6">
            Recommended Jobs
          </h1>
          <div className="mb-14 max-w-full overflow-hidden">
            <ul className="flex flex-row flex-nowrap space-x-7 mb-5">
              <li>
                <RecomendedCards
                  imgUrl={paystackRc}
                  title="QA Engineer"
                  tag="Full time"
                  name="Paystack"
                  loc="Lagos, Nigeria"
                />
              </li>
              <li>
                <RecomendedCards
                  imgUrl={googlekRc}
                  title="Product Analyst"
                  tag="Part time"
                  name="Google"
                  loc="Lagos, Nigeria"
                />
              </li>
              <li>
                <RecomendedCards
                  imgUrl={flutterwaveRc}
                  title="HR Manager"
                  tag="Full time"
                  name="Flutterwave"
                  loc="Lagos, Nigeria"
                />
              </li>
              <li>
                <RecomendedCards
                  imgUrl={accessRc}
                  title="QA Engineer"
                  tag="Full time"
                  name="Paystack"
                  loc="Lagos, Nigeria"
                />
              </li>
              <li>
                <RecomendedCards
                  imgUrl={paystackRc}
                  title="QA Engineer"
                  tag="Full time"
                  name="Paystack"
                  loc="Lagos, Nigeria"
                />
              </li>
              <li>
                <RecomendedCards
                  imgUrl={paystackRc}
                  title="QA Engineer"
                  tag="Full time"
                  name="Paystack"
                  loc="Lagos, Nigeria"
                />
              </li>
            </ul>
            <div className="flex flex-row justify-end my-5">
              <div className="btn_holder flex flex-row items-center">
                <button className="prev text-e5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="17"
                    viewBox="0 0 28 17"
                    fill="none"
                  >
                    <path
                      d="M0.344725 7.65292L7.4221 0.350517C7.64949 0.11684 7.93373 0 8.21797 0C8.5022 0 8.78643 0.11684 9.01381 0.350517C9.46859 0.817873 9.46859 1.54812 9.01381 2.01547L3.86919 7.33162L26.8631 7.33162C27.4884 7.33162 28 7.85739 28 8.5C28 9.14261 27.4884 9.66839 26.8631 9.66839L3.86919 9.66839L9.01381 14.9845C9.46859 15.4519 9.46859 16.1821 9.01381 16.6495C8.55904 17.1168 7.84846 17.1168 7.39368 16.6495L0.31629 9.34708C-0.11006 8.85052 -0.110048 8.09107 0.344725 7.65292Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
                <button className="prev text-green-dark ml-3 rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="17"
                    viewBox="0 0 28 17"
                    fill="none"
                  >
                    <path
                      d="M0.344725 7.65292L7.4221 0.350517C7.64949 0.11684 7.93373 0 8.21797 0C8.5022 0 8.78643 0.11684 9.01381 0.350517C9.46859 0.817873 9.46859 1.54812 9.01381 2.01547L3.86919 7.33162L26.8631 7.33162C27.4884 7.33162 28 7.85739 28 8.5C28 9.14261 27.4884 9.66839 26.8631 9.66839L3.86919 9.66839L9.01381 14.9845C9.46859 15.4519 9.46859 16.1821 9.01381 16.6495C8.55904 17.1168 7.84846 17.1168 7.39368 16.6495L0.31629 9.34708C-0.11006 8.85052 -0.110048 8.09107 0.344725 7.65292Z"
                      fill="currentcolor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section id="team" className="w-full flex flex-row justify-center mt-20">
        <div className="wrapper flex flex-row w-11/12">
          <div className="left-imgs w-3/5">
            <div className="img">
              <img src={teamMd} alt="" />
            </div>
          </div>
          <div className="right-capt text-primary text-base font-normal">
            <div className="wrap flex-flex-col justify-start px-8">
              <h2 className="GT-Walsheim-Pro text-3xl font-bold mb-5">
                How it works
              </h2>
              <p className=" mb-4">
                Getajob helps you find the right job easily. Getajob helps you
                find the right job easily. Getajob helps you find the right job
                easily.
              </p>
              <ul>
                <li className=" mb-8">
                  <div className="intro flex flex-row items-center mb-5">
                    <div className="icn mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="34"
                        viewBox="0 0 42 34"
                        fill="none"
                      >
                        <circle
                          cx="16.5"
                          cy="17.5"
                          r="16.5"
                          fill="#06942A"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M23.5098 22.2166C23.1998 22.2166 22.9156 22.1133 22.6831 21.8808L17.5423 16.74C17.0773 16.275 17.0773 15.5516 17.5423 15.0866C18.0073 14.6216 18.7306 14.6216 19.1956 15.0866L23.5357 19.4008L33.8432 9.11913C34.3082 8.65413 35.0315 8.65413 35.4965 9.11913C35.9615 9.58413 35.9615 10.3075 35.4965 10.7725L24.3623 21.8808C24.104 22.1133 23.8198 22.2166 23.5098 22.2166Z"
                          fill="#06942A"
                        />
                      </svg>
                    </div>
                    <div className="hd GT-Walsheim-Pro text-lg font-bold">
                      Search Jobs
                    </div>
                  </div>
                  <p className="">
                    We have jobs in the most popular industries and with top
                    companies. Plus, you can create alerts so you never miss a
                    job opportunity.
                  </p>
                </li>
                <li className=" mb-8">
                  <div className="intro flex flex-row items-center mb-5">
                    <div className="icn mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="34"
                        viewBox="0 0 42 34"
                        fill="none"
                      >
                        <circle
                          cx="16.5"
                          cy="17.5"
                          r="16.5"
                          fill="#06942A"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M23.5098 22.2166C23.1998 22.2166 22.9156 22.1133 22.6831 21.8808L17.5423 16.74C17.0773 16.275 17.0773 15.5516 17.5423 15.0866C18.0073 14.6216 18.7306 14.6216 19.1956 15.0866L23.5357 19.4008L33.8432 9.11913C34.3082 8.65413 35.0315 8.65413 35.4965 9.11913C35.9615 9.58413 35.9615 10.3075 35.4965 10.7725L24.3623 21.8808C24.104 22.1133 23.8198 22.2166 23.5098 22.2166Z"
                          fill="#06942A"
                        />
                      </svg>
                    </div>
                    <div className="hd GT-Walsheim-Pro text-lg font-bold">
                    Create a Profile and Get Noticed
                    </div>
                  </div>
                  <p className="">
                    Create a profile to showcase your skills and experience so
                    recruiters can find you. Upload your CV so you can apply for
                    jobs quickly and easily.
                  </p>
                </li>
                <li className=" mb-8">
                  <div className="intro flex flex-row items-center mb-5">
                    <div className="icn mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="34"
                        viewBox="0 0 42 34"
                        fill="none"
                      >
                        <circle
                          cx="16.5"
                          cy="17.5"
                          r="16.5"
                          fill="#06942A"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M23.5098 22.2166C23.1998 22.2166 22.9156 22.1133 22.6831 21.8808L17.5423 16.74C17.0773 16.275 17.0773 15.5516 17.5423 15.0866C18.0073 14.6216 18.7306 14.6216 19.1956 15.0866L23.5357 19.4008L33.8432 9.11913C34.3082 8.65413 35.0315 8.65413 35.4965 9.11913C35.9615 9.58413 35.9615 10.3075 35.4965 10.7725L24.3623 21.8808C24.104 22.1133 23.8198 22.2166 23.5098 22.2166Z"
                          fill="#06942A"
                        />
                      </svg>
                    </div>
                    <div className="hd GT-Walsheim-Pro text-lg font-bold">
                      Apply for jobs
                    </div>
                  </div>
                  <p className="">
                  Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section
        id="porpular-categories"
        className="w-full flex flex-row justify-center mt-20"
      >
        <div className="wrapper flex flex-col justify-center w-11/12">
          <h1 className="GT-Walsheim-Pro text-primary text-center text-2xl font-bold mb-6">
            Popular Categories
          </h1>
          <div className="catWrap flex flex-row justify-between mt-5">
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={oilGasCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Oil and Gas
                </h3>
                <p className="Graphik">(20 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={healtCareCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Healthcare
                </h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={educationCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">Education</h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={accountingCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Accounting
                </h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
          </div>
          <div className="catWrap flex flex-row justify-between mt-5">
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={oilGasCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Oil and Gas
                </h3>
                <p className="Graphik">(20 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={healtCareCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Healthcare
                </h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={educationCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">Education</h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
            {/* single category */}
            <div className="w-1/5 border border-e5 rounded-xl">
              <div className="wrapp py-14 flex flex-col justify-center text-primary items-center">
                <div className="img mb-2">
                  <img src={accountingCt} alt="" />
                </div>
                <h3 className="hd GT-Walsheim-Pro font-bold my-3">
                  Accounting
                </h3>
                <p className="Graphik">(10 new jobs )</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* over 1000 */}
      <section
        id="over1000"
        className="w-full flex relative flex-row justify-center mt-20 overflow-hidden"
      >
        <div className="wrapper relative flex flex-col justify-center w-11/12">
          <div className="bdy bg-green-light absolute h-full w-screen -z-10"></div>
          <div className="wrapp py-16 px-8 flex flex-row items-center">
            <div className="left w-2/5">
              <div className="wrapp">
                <h1 className="GT-Walsheim-Pro text-primary text-3xl font-extrabold">
                  Over 1000+ jobs from top companies in our network
                </h1>
                <p className="my-6 Graphik font-medium text-primary tracking-wider">
                  Every day we index millions of jobs directly from employer
                  websites. We’re committed to accurate, high-quality jobs so
                  you won’t find old, duplicated, or spammy listings here.
                </p>
                <p className="my-6 Graphik text-primary tracking-wider">
                  Organize and automate your job search while at home or on the
                  go. We’ll deliver new, relevant jobs of interest straight to
                  your inbox.
                </p>

                <a
                  href=""
                  className="Graphik font-bold text-green-dark text-sm tracking-wider underline"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="right flex-1 flex flex-row justify-center items-center">
              <div className="wrap">
                <img src={Logos} alt="" />
                <ul className="flex flex-row">
                  <li className="">
                    <ul className="flex flex-col">
                      <li>
                        <img src="" alt="" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimony */}
      <section
        id="Recommended-jobs"
        className="w-full flex flex-row justify-center mt-20"
      >
        <div className="wrapper flex flex-col justify-center w-11/12">
          <h1 className="GT-Walsheim-Pro text-primary text-3xl font-bold mb-6">
            What are our customers <br />
            saying
          </h1>
          <div className="flex flex-row justify-end my-5">
            <div className="btn_holder flex flex-row items-center">
              <button className="prev text-e5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                >
                  <path
                    d="M0.344725 7.65292L7.4221 0.350517C7.64949 0.11684 7.93373 0 8.21797 0C8.5022 0 8.78643 0.11684 9.01381 0.350517C9.46859 0.817873 9.46859 1.54812 9.01381 2.01547L3.86919 7.33162L26.8631 7.33162C27.4884 7.33162 28 7.85739 28 8.5C28 9.14261 27.4884 9.66839 26.8631 9.66839L3.86919 9.66839L9.01381 14.9845C9.46859 15.4519 9.46859 16.1821 9.01381 16.6495C8.55904 17.1168 7.84846 17.1168 7.39368 16.6495L0.31629 9.34708C-0.11006 8.85052 -0.110048 8.09107 0.344725 7.65292Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
              <button className="prev text-green-dark ml-3 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                  fill="none"
                >
                  <path
                    d="M0.344725 7.65292L7.4221 0.350517C7.64949 0.11684 7.93373 0 8.21797 0C8.5022 0 8.78643 0.11684 9.01381 0.350517C9.46859 0.817873 9.46859 1.54812 9.01381 2.01547L3.86919 7.33162L26.8631 7.33162C27.4884 7.33162 28 7.85739 28 8.5C28 9.14261 27.4884 9.66839 26.8631 9.66839L3.86919 9.66839L9.01381 14.9845C9.46859 15.4519 9.46859 16.1821 9.01381 16.6495C8.55904 17.1168 7.84846 17.1168 7.39368 16.6495L0.31629 9.34708C-0.11006 8.85052 -0.110048 8.09107 0.344725 7.65292Z"
                    fill="currentcolor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <div className="wrapper flex flex-row items-center relative">
              <div className="left w-80 left relative">
                <div className="img border-2 border-green-dark rounded-3xl relative ">
                  <div className="-top-4 -left-4 relative">
                    <img src={personasA} alt="" />
                  </div>
                </div>
              </div>
              <div className="right flex-1 relative px-8 py-4">
                <img src={quoteImg} alt="" className="absolute" />
                <div className="flex flex-col justify-center w-11/12  Graphik text-primary font-bold text-lg tracking-wider">
                  <p className="">
                    The platform is really convenient to reach out to companies
                    {'&'} I have managed to secure 2 interviews already! I can
                    also track my application status instead of wondering
                    whether the company has seen or shortlisted me
                  </p>
                  <h2 className="GT-Walsheim-Pro text-lg mt-8 mb-5">
                    Irma Black
                  </h2>

                  <p className="mb-3 ">HR Manager at MasterCard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="banner"
        className="w-full flex flex-row justify-center mt-20"
      >
        <div className="wrapper flex flex-col justify-center w-11/12">
          <div className="w-full relative">
            <div className="img relative">
              <img src={banner1} alt="" />
              <div className="content-cont absolute top-0 w-full h-full flex flex-row justify-end items-center">
                <div className="content-wrapper w-full flex flex-col justify-start max-w-lg">
                  <h1 className="text-3xl font-bold GT-Walsheim-Pro text-white tracking-widest">
                    Get a Job you actually like
                  </h1>
                  <p className="text-white py-5 tracking-wider font-semibold">
                    Create an account and start applying
                  </p>
                  <div className="">
                    <button className="text-base py-2 px-7 w-auto text-white rounded-50px bg-green-dark">
                      Get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
