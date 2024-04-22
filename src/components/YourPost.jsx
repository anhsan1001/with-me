import { useState } from "react";

const YourPost = () => {
  const [content, setContent] = useState("");
  return (
    <div className="mx-10 py-8">
      <div className="grid gap-2 grid-cols-8">
        <img
          src="data:image/png;base64,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"
          className="rounded-sm col-span-1"
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
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </button>
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
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
