import React from 'react';

interface RecomendedCardsProps {
  imgUrl: string;
  title: string;
  tag: string;
  name: string;
  loc: string;
}

const RecomendedCards: React.FC<RecomendedCardsProps> = ({
  imgUrl,
  title,
  tag,
  name,
  loc,
}) => {
  return (
    <>
      <div className="w-64 my-2 shadow-custom-1 Graphik rounded-md bg-white">
        <div className="top border-b border-b-gray-100 relative flex flex-col items-center justify-center h-48">
          <div className="img mb-4">
            <img src={imgUrl} alt="" />
          </div>
          <h2 className="title text-primary Graphik font-black tracking-wider">
            {title}
          </h2>
          {/* tag */}
          <div className="absolute py-1 px-3.5 rounded-50px bg-light-1 top-2 right-2">
            <p className="text-light text-xs font-medium tracking-wide">
              {tag}
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper py-5 px-4">
            <p className="text-primary Graphik font-black text-lg tracking-wider mb-4">
              {name}
            </p>
            <div className="flex flex-row items-center justify-between text-sm">
              <div className="flex flex-row items-center text-primary Graphik">
                <div className="icn mr-1 text-e5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="21"
                    viewBox="0 0 14 21"
                    fill="none"
                  >
                    <path
                      d="M11.505 2.42549C10.365 1.34038 8.76498 0.744629 7.02498 0.744629C5.28498 0.744629 3.68498 1.34038 2.54498 2.42549C1.16498 3.74463 0.424983 5.72336 0.424983 8.17017C0.424983 13.5106 6.205 19.7872 6.465 20.0425C6.625 20.2127 6.82498 20.2978 7.02498 20.2978C7.22498 20.2978 7.44499 20.2127 7.58499 20.0425C7.82499 19.7872 13.625 13.5106 13.625 8.17017C13.605 5.72336 12.885 3.74463 11.505 2.42549ZM7.00499 18.2127C6.46499 17.5744 5.605 16.5106 4.765 15.234C2.965 12.5106 2.00499 10.0851 2.00499 8.19144C2.00499 2.87229 5.82499 2.44676 7.00499 2.44676C11.645 2.44676 12.005 6.85101 12.005 8.19144C12.005 11.9361 8.42499 16.5531 7.00499 18.2127ZM7.00499 4.42548C5.24499 4.42548 3.82498 5.97867 3.82498 7.87229C3.82498 9.76591 5.24499 11.3191 7.00499 11.3191C8.76499 11.3191 10.185 9.76591 10.185 7.87229C10.185 5.9574 8.76499 4.42548 7.00499 4.42548ZM7.00499 9.80845C6.02499 9.80845 5.22498 8.93612 5.22498 7.85102C5.22498 6.76591 6.02499 5.89357 7.00499 5.89357C7.98499 5.89357 8.78499 6.76591 8.78499 7.85102C8.78499 8.93612 7.98499 9.80845 7.00499 9.80845Z"
                      fill="currentcolor"
                    />
                  </svg>
                </div>
                <p className="font-medium">{loc}</p>
              </div>
              <div className="">
                <button className="text-green-dark font-bold">Apply now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecomendedCards;
