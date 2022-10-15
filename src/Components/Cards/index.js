import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Template from "./Template";
import axios from "axios";
import logo from "../../Images/logo.png";
export default function Index() {
  const APP_ID = "387a73f7";
  const APP_KEY = "1b4f48b69aad0b9d22ef65d05487afc3";
  // const [data , setData] = useState([])
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [filterData, setFilterData] = useState([]);
  //   useEffect(() => {
  //     getRecipes();
  //     getAnime();
  //   }, []);
  //   useEffect(() => {
  //     getAnime().then((res) => {
  //       console.log(res);
  //       setAnime(res || "no data found");
  //       setLoading(false);
  //     });
  //   }, []);
  useEffect(() => {
    myFunction();
  }, []);
  useEffect(() => {
    getGenres();
  }, [anime]);
  const myFunction = async () => {
    await axios.get("https://api.jikan.moe/v4/anime").then((res) => {
      // setAnime(data || "no data found");
      setAnime(res.data.data);
      setLoading(false);
      console.log("respo", res.data.data);
    });
  };
  const setSelectedOption = (e) => {
    console.log(e, "eeeeeeeee");
    setFilterTerm(e);
  };
  const getGenres = async () => {
    console.log("runningg............");
    //push all items to new array
    let arr = [];
    anime?.map((val) => {
      val.genres.map((item) => {
        // console.log(item);
        // if (arr.indexOf(item.mal_id) != -1) {
        arr.push(item);
        // }
      });
    });
    // arr.filter((v, i, a) => a.findIndex((v2) => v2.mal_id === v.mal_id) === i);
    //removes duplicates
    let newArr = arr.filter(
      (v, i, a) => a.findLastIndex((v2) => v2.mal_id === v.mal_id) === i
    );
    await setFilterData(newArr);
    console.log(arr, "arr");
    console.log(newArr, "newArr");
  };
  // const getRecipes = async () => {
  //   const response = await fetch(
  //     `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  //   );
  //   const data = await response.json();
  //   // setRecipes(data.data);
  //   // console.log(data);
  //   setRecipes(data.hits);
  //   setLoading(false); // Setting the loading state to false after data is set.
  //   console.log(data.hits);
  // };

  // const getAnime = async () => {
  //   axios.get("https://api.jikan.moe/v4/anime").then((res) => {
  //     console.log(res.data.data);
  //     //   if (res.data) {
  //     //   console.log("data is here");
  //     //   return JSON.stringify(res.data.data);
  //     setAnime(res.data.data);
  //     // setLoading(false); // Setting the loading state to false after data is set.
  //     //   }
  //   });
  // };
  // async function searchStringInArray(e) {
  //   e.preventDefault();
  //   console.log(search);
  //   let str = search;
  //   if (str != " ") {
  //     setAnime([]);
  //     await myFunction();
  //     // setAnime(anime);
  //     console.log(str);
  //     let newArr = [];
  //     //   let cpyArr = anime;
  //     // anime.map((itm) => {
  //     //   console.log(itm.title);
  //     //   if (itm.title.toUpperCase().indexOf(str.toUpperCase()) != -1) {
  //     //     newArr.push(itm);
  //     //   }
  //     // });
  //     // return setAnime(newArr);
  //     newArr = anime.filter(
  //       // word=> word.includes("it")
  //       (itm) => itm.title.toUpperCase().includes(str.toUpperCase())
  //     );
  //     console.log("fullList", anime);
  //     console.log(newArr);
  //     setAnime(newArr);
  //   } else if (str == "" || str == " ") {
  //     setAnime([]);
  //     await myFunction();
  //     setAnime(anime);
  //   }
  // }
  return (
    <div>
      {/* <Template /> */}
      <div className="flex flex-col items-center justify-center">
        {/* logo */}
        <img src={logo} alt="" className="w-2/12" />
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
                {/* <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button> */}
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
      <div className="flex items-start  w-screen min-h-screen">
        <div className="container ml-auto mr-auto flex flex-wrap items-center justify-center ">
          {loading ? (
            <img
              src="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"
              alt="Loading"
              className="w-2/12"
            />
          ) : anime.length > 0 ? (
            anime
              // .filter(
              //   (item) =>
              //     item.genres.findIndex((val) => val.mal_id === filterTerm) !==
              //     -1
              // )
              .filter((item) => {
                console.log("i am running");
                console.log(
                  filterTerm,
                  typeof filterTerm,
                  typeof Number(filterTerm),
                  "here it is"
                );
                if (filterTerm == "") {
                  console.log("hana");
                  return item;
                } else if (
                  item.genres.findIndex(
                    (val) => val.mal_id === Number(filterTerm)
                  ) !== -1
                ) {
                  console.log("dul");
                  console.log(
                    item.genres.findIndex(
                      (val) => val.mal_id === Number(filterTerm)
                    ) !== -1
                  );
                  return item;
                } else {
                  console.log("i dont know whats happening");
                }
              })
              // .genres
              //   .map((itm) => {
              //     if (itm.mal_id === filterTerm) {
              //       console.log(itm.mal_id);
              //       console.log(itm);
              //       return itm;
              //     }
              //   })
              /////////
              // .filter((itm) => {
              //   itm.genres.map((val) => {
              //     if (val.mal_id === filterTerm) {
              //       console.log(val.mal_id);
              //       console.log(itm);
              //       return itm;
              //     }
              //   });
              // })
              //////////////
              // .filter((val) => {
              //   if (filterTerm == "") {
              //     return val;
              //   } else {
              //   return val.genres.filter((itm) => itm)
              //   //  val.genres.map((itm) => {
              //   //     if (itm.mal_id === filterTerm) {
              //   //       console.log(val);
              //   //       return val;
              //   //     } else return val;
              //   //   });
              //   }
              // })
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
                // return <SingleCard Data={itm} key={itm.mal_id} />;
                // if (filterTerm == "") {
                //   return <SingleCard Data={itm} />;
                // } else {
                //   itm.genres.map((it) => {
                //     if (it.mal_id === filterTerm) {
                //       console.log(it.mal_id);
                //       console.log(itm, "itmm");
                //       return <SingleCard Data={itm} />;
                //     } else return <SingleCard Data={itm} />;
                //   });
                // }
              })
          ) : (
            <p className="text-white"> "no data found"</p>
          )}
          {/* <SingleCard name="meenu" />
          <SingleCard name="Reena" />
          <SingleCard name="Sara jo" /> */}
          {/* <SingleCard name="Sara jo" />
          <SingleCard name="Sara jo" />
          <SingleCard name="Sara jo" /> */}
        </div>
      </div>
    </div>
  );
}
