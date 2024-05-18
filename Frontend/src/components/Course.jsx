import React from "react";
import list from "../assets/list.json";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Explore Our Featured Courses{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Discover a range of courses designed to ignite your passion for
            learning. Whether you're interested in coding, design, marketing, or
            anything in between, our curated selection of courses has something
            for everyone. Start your learning journey today!
          </p>
          <Link to="/">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
