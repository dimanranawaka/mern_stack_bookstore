import React from "react";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-900"> new everyday!!!</span>
            </h1>
            <p className="text-lg mt-4">
              Welcome to our online bookstore! We offer a wide variety of books
              across different genres. Whether you're looking for the latest
              bestsellers, classic literature, or educational textbooks, we've
              got you covered. Start exploring now and immerse yourself in the
              world of reading.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
}

export default Banner;
