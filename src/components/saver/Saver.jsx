import React from "react";

const Saver = () => {
  return (
    <section>
      <div className="lg:flex flex flex-col pt-[23.5rem] pb-[6.5rem]">
        <div className="bg-blue-700 relative left text-white w-[60%] py-[6rem]">
            <p className="font-bold py-8">Meet Saver</p>
            <a className="flex gap-3" href="https://blog.piggyvest.com/save/meetapiggyvestsaver-undefined/">
                <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                cx="16.2173"
                cy="16.1587"
                r="16.0254"
                fill="white"
                ></circle>
                <path
                d="M18.6211 10.5498L17.4913 11.6796L21.1611 15.3574L8.20461 15.3574L8.20461 16.96L21.1611 16.96L17.4833 20.6378L18.6211 21.7676L24.23 16.1587L18.6211 10.5498Z"
                fill="#2295F2"
                ></path>
                </svg>
                <span>Meet saver of the month</span>
            </a>        
        </div>
        <div className="bg-saver bg-inherit bg-cover bg-no-repeat bg-center"></div>
      </div>
    </section>
  );
};

export default Saver;
