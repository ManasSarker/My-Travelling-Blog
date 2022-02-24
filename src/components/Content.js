import React from "react";
import imageone from "../images/manosh.jpg";

import imgaetwo from "../images/mooon.jpg";

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white h-screen font-bold py-40">
        <img
          src={imageone}
          alt="My pic"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-5">
            This is me ,Manas. Who Love to travel
          </h2>

          <p className="mb-5">
            I want to travel the whole world in my life time as far as I can
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center bg-white h-screen font-bold py-20">
        <img
          src={imgaetwo}
          alt="The moon"
          className="h-full rounded mb-20 shadow"
        />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-5">
            This is me ,Manas. Who Love to travel
          </h2>

          <p className="mb-5">
            I want to travel the whole world in my life time as far as I can
          </p>
        </div>
      </div>
    </>
  );
};

export default Content;
