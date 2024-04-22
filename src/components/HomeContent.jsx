import PostContent from "./PostContent";
import YourPost from "./YourPost";

const HomeContent = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="bg-color-bg card-content">
      <YourPost />

      {arr.map((item) => (
        <PostContent key={item} />
      ))}
    </div>
  );
};

export default HomeContent;
