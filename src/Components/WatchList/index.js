import React from "react";
import logo from "../../Images/logo.png";
import Template from "./Template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function ({ cart, setCart }) {
  return (
    <div className="flex flex-col justify-start items-center  mt-auto min-h-screen">
      <div className="flex flex-row justify-center items-center m-3">
        <Link to="/" className="block">
          <div>
            <img src={logo} alt="logo" className="w-3/12 md:w-3/12" />
          </div>
        </Link>
        <small className="text-white m-1">Saved shows</small>
        &nbsp;
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white hover:text-purple-800  "
          size="1x"
        />
      </div>

      <div
        className="flex flex-col justify-center items-center 
    "
      >
        {/* box */}
        <div className="flex flex-wrap bg-white  min-w-8/12 rounded-md">
          <div className="w-full p-2">
            {/* template */}
            {cart.length > 0 ? (
              cart.map((val) => (
                <Template
                  data={val}
                  cart={cart}
                  setCart={setCart}
                  key={val.mal_id}
                />
              ))
            ) : (
              <div className="text-black w-full">
                At First there was nothing!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
