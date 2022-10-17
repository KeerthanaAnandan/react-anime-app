import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function index() {
  return (
    <div className=" w-100 overflow-hidden  flex flex-row justify-around p-3   ">
      <img src={logo} alt="logo" className="w-3/12 sm:w-1/12 " />

      <div className="flex space-x-2 justify-center">
        <Link to="/watchlist">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:text-purple-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              className=" mx-2"
              size="xl"
            />
            Watch List
          </button>
        </Link>
      </div>
    </div>
  );
}
