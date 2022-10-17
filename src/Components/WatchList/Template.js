import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
export default function Template({ data, cart, setCart }) {
  const removeWatchListHandler = () => {
    setCart(cart.filter((val) => val.mal_id !== data.mal_id));
  };
  return (
    <div>
      <div className="flex flex-row items-center flex-wrap rounded-lg bg-gray-500 m-1 w-full">
        <img
          src={data.images.jpg.large_image_url}
          alt=""
          className="w-2/12  max-h-40 rounded-md self-start"
        />
        <div className="flex flex-col w-3/4 p-3">
          <p className="text-white ">{data.title}</p>
          <p>{data.synopsis.slice(0, 150) + `...`}</p>
          <p>Rating: {data.score}</p>
        </div>

        <div
          onClick={removeWatchListHandler}
          className="flex items-end justify-end p-2 ml-auto transition duration-300  focus:outline-none cursor-pointer rounded-full"
        >
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="hover:bg-purple-800 hover:text-white text-purple-800 bg-white rounded-full"
            size="3x"
          />
        </div>
      </div>
    </div>
  );
}
