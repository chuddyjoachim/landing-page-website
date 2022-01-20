import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import rectangleImg from '../assets/images/Rectangle.png';
// import customTopImg from '../assets/images/custom/topimg1.png';
import customTopImg from '../assets/images/custom/hero-image.png';
import googlePt from '../assets/images/custom/top-partner/google-pt.png'
import paystackPt from '../assets/images/custom/top-partner/paystack-pt.png'
import kpmgPt from '../assets/images/custom/top-partner/kpmg-pt.png'

const Home = () => {
  return <>
   <div id="top-bg" className="absolute -top-6 w-full -z-10">
        <div className="w-2/3">
          <img src={rectangleImg} />
        </div>
      </div>
      {/* header */}
      <Header />

      {/* top section -- intro */}
      <section className=" w-full flex flex-row justify-center mt-20">
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
                <h1 className='Graphik font-extrabold text-lg text-primary tracking-widest'>Trusted By:</h1>

                <div className="mt-7">
                  <ul className="flex flex-row items-center space-x-4">
                    <li className='h-10'>
                      <img src={paystackPt}/>
                    </li>
                    <li className='h-10'>
                      <img src={googlePt}/>
                    </li>
                    <li className='h-10'>
                      <img src={kpmgPt}/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-2/4 flex flex-row">
              {/* <p>jcneodneoi</p> */}
            <div className="w-4/5 relative flex flex-row justify-center items-center bg-red-200">
              <img src={customTopImg} className="w-3/4 absolute p-0" />
            </div>
          </div>
        </div>
      </section>

  </>;
};

export default Home;
