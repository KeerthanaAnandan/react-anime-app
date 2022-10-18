import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDrop } from "react-dnd";
export default function ({ allowedDropEffect }) {
  const style = {
    color: "white",
    padding: "1rem",
    textAlign: "center",
    fontSize: "1rem",
    lineHeight: "normal",
    float: "left",
  };
  function selectBackgroundColor(isActive, canDrop) {
    if (isActive) {
      return "#000";
    } else if (canDrop) {
      return "#DB2777";
    } else {
      return "#5B21B6";
    }
  }

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "box",
      drop: () => ({
        name: `${allowedDropEffect} Dustbin`,
        allowedDropEffect,
      }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [allowedDropEffect]
  );
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div className=" w-100 overflow-hidden  flex flex-row justify-around p-3   ">
      <img src={logo} alt="logo" className="w-3/12 sm:w-1/12 " />

      <div className="flex space-x-2 justify-center" ref={drop}>
        <Link to="/watchlist">
          <button
            style={{ ...style, backgroundColor }}
            type="button"
            className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-purple-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className=" mx-2"
              size="xl"
            />
            {isActive ? "Release to drop" : "Drag a box here"}
          </button>
        </Link>
      </div>
      {/* <div className="float-right bg-pink-400 w-40 h-20">drop it here</div> */}
    </div>
  );
}
