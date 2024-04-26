import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";

const YourPost = () => {
  const [content, setContent] = useState("");
  const { user } = useContext(AppContext);
  return (
    <div className="px-10 py-8 card-post">
      <div className="grid gap-1 grid-cols-8">
        <img
          src={user?.photoURL}
          className="rounded-full col-span-1 h-10 w-10"
        />
        <div className="text-white col-span-6">
          <textarea
            id="register-email"
            name="email"
            type=""
            autoComplete="email"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder=" Bạn có gì muốn nói ?"
            className=" rounded w-full outline-none bg-transparent text-white  resize-none"></textarea>{" "}
          <div className="flex flex-row justify-start items-center gap-5">
            <button className="btn-your-post">
              <svg
                className="icon-svg"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M25.6 0H6.4C2.86538 0 0 2.86538 0 6.4V25.6C0 29.1346 2.86538 32 6.4 32H25.6C29.1346 32 32 29.1346 32 25.6V6.4C32 2.86538 29.1346 0 25.6 0Z"
                    fill="url(#paint0_linear_103_1789)"></path>{" "}
                  <path
                    d="M5.9577 24.8845C5.42578 25.9483 6.19937 27.2 7.38878 27.2H18.2111C19.4005 27.2 20.1741 25.9483 19.6422 24.8845L14.231 14.0622C13.6414 12.8829 11.9585 12.8829 11.3688 14.0622L5.9577 24.8845Z"
                    fill="white"></path>{" "}
                  <path
                    d="M15.5577 24.8845C15.0258 25.9483 15.7994 27.2 16.9888 27.2H24.6111C25.8005 27.2 26.5741 25.9483 26.0422 24.8845L22.231 17.2622C21.6414 16.0829 19.9585 16.0829 19.3688 17.2622L15.5577 24.8845Z"
                    fill="white"
                    fillOpacity="0.6"></path>{" "}
                  <path
                    d="M24.0002 11.2C25.7675 11.2 27.2002 9.76726 27.2002 7.99995C27.2002 6.23264 25.7675 4.79995 24.0002 4.79995C22.2329 4.79995 20.8002 6.23264 20.8002 7.99995C20.8002 9.76726 22.2329 11.2 24.0002 11.2Z"
                    fill="white"></path>{" "}
                  <defs>
                    {" "}
                    <linearGradient
                      id="paint0_linear_103_1789"
                      x1="16"
                      y1="0"
                      x2="16"
                      y2="32"
                      gradientUnits="userSpaceOnUse">
                      {" "}
                      <stop stopColor="#00E676"></stop>{" "}
                      <stop offset="1" stopColor="#00C853"></stop>{" "}
                    </linearGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </button>
            <button className="btn-your-post">
              <svg
                className="icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve">
                <path
                  fill="#3CA8FA"
                  d="M511.344 274.266c.426-6.035.656-12.123.656-18.266C512 114.615 397.385 0 256 0S0 114.615 0 256c0 117.769 79.53 216.949 187.809 246.801l323.535-228.535z"></path>
                <path
                  fill="#0076CF"
                  d="M511.344 274.266L314.991 77.913 119.096 434.087l68.714 68.714C209.522 508.787 232.385 512 256 512c135.243 0 245.976-104.875 255.344-237.734z"></path>
                <path
                  fill="#FFF"
                  d="M278.328 333.913L255.711 77.913 119.096 77.913 119.096 311.652z"></path>
                <path
                  fill="#E8E6E6"
                  d="M392.904 311.652L392.904 155.826 337.252 133.565 314.991 77.913 255.711 77.913 256.067 333.913z"></path>
                <path
                  fill="#FFF"
                  d="M314.991 155.826L314.991 77.913 392.904 155.826z"></path>
                <path
                  fill="#00477D"
                  d="M119.096 311.652H392.90500000000003V434.087H119.096z"></path>
                <g fill="#FFF">
                  <path d="M243.242 372.42v20.66c-5.677 4.011-14.605 6.888-22.023 6.888-16.119 0-28.305-11.655-28.305-27.094 0-15.362 12.487-26.941 29.213-26.941 7.87 0 16.196 3.027 21.643 7.87l-7.568 9.157c-3.86-3.557-9.233-5.751-14.152-5.751-8.703 0-15.363 6.811-15.363 15.665 0 9.006 6.736 15.817 15.515 15.817 2.724 0 6.204-.984 9.384-2.573V372.42h11.656zM254.525 399.362v-52.975h13.471v52.975h-13.471zM293.956 356.982v12.26h23.763v10.596h-23.763v19.525h-13.471v-52.975h39.277v10.595h-25.806v-.001z"></path>
                </g>
              </svg>
            </button>
            <button className="btn-your-post">
              <svg
                className="icon-svg "
                xmlns="http://www.w3.org/2000/svg"
                fill="#000"
                version="1.1"
                viewBox="0 0 508 508"
                xmlSpace="preserve">
                <g>
                  <circle cx="254" cy="254" r="254" fill="#324A5E"></circle>
                  <path
                    fill="#2B3B4E"
                    d="M14 336.8C48.4 436.4 142.8 508 254 508s206-71.6 240-171.2H14z"></path>
                  <path
                    fill="#FF7058"
                    d="M381.2 191.6c0 70.4-127.2 258-127.2 258S126.8 262 126.8 191.6 183.6 64.4 254 64.4s127.2 57.2 127.2 127.2z"></path>
                  <circle cx="254" cy="193.6" r="68.4" fill="#FFF"></circle>
                  <circle cx="254" cy="193.6" r="36" fill="#FF7058"></circle>
                </g>
              </svg>
            </button>
            <button className="btn-your-post">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.624"></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    fill="#4296FF"></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.83216 14.4453C8.5258 13.9858 7.90493 13.8616 7.44541 14.168C6.98588 14.4743 6.8617 15.0952 7.16806 15.5547C9.46675 19.0028 14.5335 19.0028 16.8322 15.5547C17.1385 15.0952 17.0143 14.4743 16.5548 14.168C16.0953 13.8616 15.4744 13.9858 15.1681 14.4453C13.661 16.7059 10.3392 16.7059 8.83216 14.4453ZM17.0001 9.5C17.0001 10.3284 16.3285 11 15.5001 11C14.6717 11 14.0001 10.3284 14.0001 9.5C14.0001 8.67157 14.6717 8 15.5001 8C16.3285 8 17.0001 8.67157 17.0001 9.5ZM10.0001 9.5C10.0001 10.3284 9.32853 11 8.50011 11C7.67168 11 7.00011 10.3284 7.00011 9.5C7.00011 8.67157 7.67168 8 8.50011 8C9.32853 8 10.0001 8.67157 10.0001 9.5Z"
                    fill="#152C70"></path>{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className=" text-white col-span-1 relative">
          <button className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 absolute bottom-0 right-0 ">
            Đăng
          </button>
        </div>
      </div>
    </div>
  );
};
export default YourPost;
