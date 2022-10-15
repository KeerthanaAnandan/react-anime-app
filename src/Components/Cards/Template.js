import React from "react";

export default function Template(props) {
  return (
    <div className=" w-full md:w-1/2 lg:w-1/5 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
      <div
        style={{
          background: `url(${props.Data.images.jpg.large_image_url}) no-repeat center center fixed  `,
          backgroundSize: "cover",
        }}
        className=" h-80  flex flex-col justify-end rounded-lg m-h-64  transform hover:translate-y-2 hover:shadow-xl transition duration-300"
      >
        {/* <figure className="mb-2">
          <img
            src={props.Data.images.jpg.image_url}
            alt=""
            className="h-64 ml-auto mr-auto"
          />
        </figure> */}

        <div className=" self-end rounded-lg p-3 bg-black  bg-opacity-70  ">
          <div className="">
            <h5 className="text-white text-2xl font-bold leading-none">
              {props.Data.title.slice(0, 20)}
            </h5>

            <span className="text-xs text-gray-400 leading-none">
              {props.Data.synopsis.slice(0, 90) + `...`}
            </span>
          </div>
          <div className="flex items-end">
            <div className="text-lg text-white font-light">
              {" "}
              {props.Data.score}
            </div>
            <button
              href="javascript:;"
              className="rounded-full bg-purple-800 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current m-auto"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
