const PostContent = () => {
  return (
    <>
      <hr />

      <div className="text-white py-6 px-10">
        <div className="card-post  flex flex-row justify-between">
          <div className="flex flex-row justify-center items-center gap-2">
            <img
              src="data:image/png;base64,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"
              className="rounded-sm"
            />
            <div className="">Anh San</div>
          </div>
          <button className="">
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
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
        <div className="py-4">
          <div className="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            tenetur culpa exercitationem, expedita ut explicabo cum minus
            corporis id incidunt laborum non odio optio quod, consequuntur,
            reprehenderit debitis obcaecati nostrum.
          </div>
          <img
            src="https://cdn.vjshop.vn/tin-tuc/cach-chup-anh-phong-canh/cach-chup-anh-phong-canh-dep-15.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-row gap-5 justify-around ">
          <button className="flex flex-row gap-2 justify-end">
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
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            2,5k
          </button>

          <button className="flex flex-row gap-2 justify-end">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            2,5k
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
export default PostContent;
