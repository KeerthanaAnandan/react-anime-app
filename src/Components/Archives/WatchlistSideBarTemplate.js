import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Template from "./Template";

export default function () {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("watchCartArr"));
  console.log(cartFromLocalStorage);
  const [cart, setcart] = useState(cartFromLocalStorage || []);
  //   window.addEventListener("storage", () => {
  //     console.log("im something");
  //   });
  //   window.addEventListener("storage", (e) => console.log(e));
  useEffect(() => {
    // window.onstorage(() => {
    //   console.log("will i work");
    // });
    // console.log(localStorage.getItem("watchListArr"));
    // window.addEventListener("storage", () => {
    // console.log("im running");
    // if (localStorage.getItem("watchListArr") != null) {
    //   let a = localStorage.getItem("watchListArr");
    //   let arr = JSON.parse(localStorage.getItem("watchListArr"));
    //   // console.log(Array.isArray(arr), typeof arr, Array.isArray(a), typeof a);
    //   let newArr = [];
    //   if (arr.length > 0) {
    //     arr.map((val) => {
    //       console.log(val.title);
    //       newArr.push(val.title);
    //       setcart(newArr);
    //     });
    //   }
    // }
    // function listenForStorage() {
    //   const item = JSON.parse(localStorage.getItem("watchListArr"));
    //   if (item) {
    //     console.log(item, "blooo");
    //     setcart(item);
    //   }
    // }
    // console.log("efjnbje", cart);
    // window.addEventListener("storage", listenForStorage);
    // return () => {
    //   window.removeEventListener("storage", listenForStorage);
    // };
    // });
  }, []);
  return (
    <div className="p-2 flex  flex-col items-center justify-center containerX">
      <div class="containerbackground text-center">
        <div className=" border-2 border-purple-800 p-3">
          <FontAwesomeIcon
            icon={faFile}
            className="text-purple-800 "
            size="xl"
          />
        </div>
        Drag and Drop Here
      </div>

      {/*Title */}
      <div className="m-2">
        <FontAwesomeIcon
          icon={faCartShopping}
          beat
          className="text-purple-800"
          size="xl"
        />
        &nbsp; &nbsp;
        <span className="font-bold text-xl">
          <small className="text-purple-800 text-2xl">W</small>atch
          <small className="text-purple-800 text-2xl ">L</small>ist
        </span>
      </div>
      <br />

      <div className="flex flex-col m-1 z-0">
        {/* {cart?.map((val) => (
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
        ))} */}
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
        <Template />
      </div>
    </div>
  );
}
