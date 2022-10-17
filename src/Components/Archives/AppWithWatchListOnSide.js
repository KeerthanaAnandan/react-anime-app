import { useState } from "react";

import NavBar from "./Components/NavBar";
import Cards from "./Components/Cards";
import WatchList from "./Components/WatchList";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className=" bg-gray-800 min-h-screen flex flex-row flex-wrap max-w-full">
      <div className="w-full md:w-10/12">
        <span
          className="text-white float-right cursor-pointer p-2"
          onClick={() => setShow(!show)}
        >
          {" "}
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
        </span>
        <NavBar />
        <br />
        <Cards />
      </div>
      {show ? (
        <div className=" w-full md:w-2/12 bg-white hidden md:block">
          <WatchList />
        </div>
      ) : null}
    </div>
  );
}

export default App;
