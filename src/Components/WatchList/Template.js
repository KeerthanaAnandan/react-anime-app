import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export default function Template() {
  return (
    <div>
      <div className="flex flex-row items-center rounded-lg bg-gray-500 m-1">
        <img
          src="https://cdn.myanimelist.net/images/anime/4/19644.jpg"
          alt=""
          className="w-2/12 rounded-md"
        />
        <p className="text-white px-2">Title comes here</p>
        <div className="flex items-end justify-end px-2 ml-auto transition duration-300  focus:outline-none cursor-pointer rounded-full">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="hover:bg-purple-800 hover:text-white text-purple-800 bg-white rounded-full"
            size="2xl"
          />
        </div>
      </div>
    </div>
  );
}
