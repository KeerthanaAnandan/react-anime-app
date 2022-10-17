import React from "react";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className=" w-100 overflow-hidden  flex flex-row justify-around p-3   ">
      <img src={logo} alt="logo" className="w-3/12 sm:w-1/12 " />

      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-white px-1"
            size="xl"
          />
          Watch List
        </button>
      </div>
    </div>
  );
}
