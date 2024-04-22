import SliderMusic from "../../../components/SliderMusic";

const Music = () => {
  return (
    <div className="bg-slate-600 w-full text-white rounded  ">
      <div className="tag flex gap-2 text-center sticky left-0 top-0 bg-slate-300">
        <div className="tag bg-slate-700 rounded-lg py-1 px-1">Tất cả </div>
        <div className="tag bg-slate-700 rounded-lg py-1 px-1">Nhạc</div>
        <div className="tag bg-slate-700 rounded-lg py-1 px-1">Podcasts</div>
      </div>
      <SliderMusic />
      <SliderMusic />
      <SliderMusic />
    </div>
  );
};
export default Music;
