import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Template from "./Template";
import axios from "axios";
import logo from "../../Images/logo.png";
export default function Index() {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    myFunction();
  }, []);
  useEffect(() => {
    getGenres();
  }, [anime]);
  const myFunction = async () => {
    await axios.get("https://api.jikan.moe/v4/anime").then((res) => {
      setAnime(res.data.data);
      setLoading(false);
    });
  };
  const setSelectedOption = (e) => {
    setFilterTerm(e);
  };
  const getGenres = async () => {
    //push all items to new array
    let arr = [];
    anime?.map((val) => {
      val.genres.map((item) => {
        arr.push(item);
      });
    });

    //removes duplicates
    let newArr = arr.filter(
      (v, i, a) => a.findLastIndex((v2) => v2.mal_id === v.mal_id) === i
    );
    await setFilterData(newArr);
  };

  return (
    <div className="m-5">
      {/* <Template /> */}
      <div className="flex flex-col items-center justify-center">
        {/* logo */}
        <img src={logo} alt="logo" className="w-2/12" />
        {/* subtitle */}
        <small className="text-white m-1">
          9anime - Just a better place to watch anime online for free!
        </small>

        <div className="flex flex-row justify-center w-full m-3">
          {/* search */}
          <div className="w-6/12 mx-4">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Title..."
                  required
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/* filter-select */}
          <div>
            <select
              onChange={(e) => setSelectedOption(e.target.value)}
              id="filter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-25 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Filter By Genre</option>
              {filterData.map((val) => (
                <option key={val.mal_id} value={val.mal_id}>
                  {val.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <br />
      <div className="flex items-start  ">
        <div className="container ml-auto mr-auto flex flex-wrap items-center justify-center ">
          {loading ? (
            <img
              src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"
              alt="Loading"
              className="w-2/12"
            />
          ) : anime.length > 0 ? (
            anime

              .filter((item) => {
                if (filterTerm == "") {
                  return item;
                } else if (
                  item.genres.findIndex(
                    (val) => val.mal_id === Number(filterTerm)
                  ) !== -1
                ) {
                  return item;
                } else {
                  console.log("yes");
                }
              })

              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.title.toUpperCase().includes(search.toUpperCase())
                ) {
                  return val;
                }
              })
              .map((itm) => {
                return <Template Data={itm} key={itm.mal_id} />;
              })
          ) : (
            <p className="text-white"> "no data found"</p>
          )}
        </div>
      </div>
    </div>
  );
}
