const Text = () => {
  return (
    <div className="w-full absolute bottom-0 flex flex-col">
      <div className="relative w-[100px] h-[50px] translate-y-5 ml-3">
        <img src="/assets/name.png" />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center font-bold font-[PyeongChangPeace] text-lg">
          미미쨩
        </div>
      </div>
      <div className="w-full h-[200px] bg-[#8a3c4d] bg-opacity-80 px-2 py-2 text-white">
        <div className="border-[1px] border-white border-dashed w-full h-full px-8 py-8">자기야~!</div>
      </div>
    </div>
  );
};

export default Text;
