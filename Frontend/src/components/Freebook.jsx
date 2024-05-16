import React from "react";
import list from "../assets/list.json";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);
  return <div></div>;
}

export default Freebook;
