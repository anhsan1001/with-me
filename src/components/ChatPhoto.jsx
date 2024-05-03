const ChatPhoto = ({ photoURL, isFirstChat }) => {
  return (
    <div className="flex flex-row justify-start items-end gap-3">
      <div className="">
        {!isFirstChat ? (
          <img src={photoURL} alt="" className="rounded-lg w-8 h-8" />
        ) : (
          <div className="w-8 h-8"></div>
        )}
      </div>
      <img
        src="https://imgt.taimienphi.vn/cf/Images/tt/2018/4/24/hinh-anh-vui-nhon-nhat-the-gioi-vui-cuoi-23.jpg"
        alt=""
        className="rounded-xl max-w-[400px]"
      />
    </div>
  );
};

export default ChatPhoto;
