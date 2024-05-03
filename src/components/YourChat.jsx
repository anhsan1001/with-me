const YourChat = ({ data, photoURL, isFirstChat }) => {
  return (
    <>
      {isFirstChat ? (
        <div className="flex flex-row justify-end items-end gap-3 mt-2">
          <div className="max-w-[500px] bg-[#202020] rounded-lg p-3 relative">
            {data}
            <div className="w-4 h-5 absolute bottom-0 -right-3  border-b-[30px] border-b-[#202020] border-x-[25px] border-x-transparent border-solid -z-50"></div>
          </div>
          <img src={photoURL} alt="" className="rounded-lg w-8 h-8" />
        </div>
      ) : (
        <div className="flex flex-row justify-start items-end gap-3 mt-2">
          <div className="max-w-[500px] bg-[#202020] rounded-lg p-3 ">
            {data}
          </div>
          <div className="w-8 h-8"></div>
        </div>
      )}
    </>
  );
};

export default YourChat;
