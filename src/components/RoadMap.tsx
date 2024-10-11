function RoadMap() {
  return (
    <>
      <div className="h-[100vh] w-full flex flex-col items-center lgg:gap-80 gap-20 mt-20 lgg:mt-0 animate-appears-anim-l animation-timeline animation-range">
        <h2 className="text-center text-3xl mt-5 w-full ">
          My Learning Roadmap:
        </h2>
        <div className="w-full lgg:h-[30vh] h-[80vh] flex flex-col lgg:flex-row items-center flex-shrink-0">
          <div className="h-[5%] w-[10%] hidden lgg:flex bg-white flex-shrink"></div>
          <div className="border-2 border-purple-500 rounded-2xl w-[26%] text-lg lg:text-base lgg:text-lg lgg:max-w-[10%] px-2 py-5 lgg:p-5 text-center lgg:text-nowrap">
            <p>HTML, CSS</p>
            <p className="text-sm text-green-500">Done</p>
          </div>
          <div className="lgg:h-[5%] lgg:w-[10%] h-[7%] w-[3%] bg-white flex-shrink"></div>
          <div
            className="border-2 border-yellow-400 rounded-2xl text-lg lg:text-base lgg:text-lg
          w-[26%] lgg:max-w-[10%] px-2 py-5 lgg:p-5 text-center lgg:text-nowrap text-clip"
          >
            <p>JavaScript</p>
            <p className="text-sm text-green-500">Done</p>
          </div>
          <div className="lgg:h-[5%] lgg:w-[10%] h-[7%] w-[3%] bg-white flex-shrink"></div>
          <div className="border-2 border-cyan-500 rounded-2xl text-lg lg:text-base lgg:text-lg w-[26%] lgg:max-w-[10%] px-2 py-5 lgg:p-5 text-center lgg:text-nowrap">
            <p>React, Tailwind</p>
            <p className="text-sm text-green-500">Done</p>
          </div>
          <div className="lgg:h-[5%] lgg:w-[10%] h-[7%] w-[3%] bg-white flex-shrink"></div>
          <div className="border-2 border-blue-600 rounded-2xl text-lg lg:text-base lgg:text-lg w-[26%] lgg:max-w-[10%] px-2 py-5 lgg:p-5 text-center lgg:text-nowrap">
            <p>TypeScript</p>
            <p className="text-sm text-yellow-500">I am here</p>
          </div>
          <div className="lgg:h-[5%] lgg:w-[10%] h-[7%] w-[3%] bg-white flex-shrink"></div>
          <div className="border-2 border-red-500 rounded-2xl text-lg lg:text-base lgg:text-lg w-[26%] lgg:max-w-[10%] px-2 py-5 lgg:p-5 text-center lgg:text-nowrap">
            <p>Backend</p>
            <p className="text-sm text-red-500">Soon</p>
          </div>
          <div className="h-[5%] w-[10%] hidden lgg:flex bg-white flex-shrink"></div>
        </div>
      </div>
    </>
  );
}

export default RoadMap;
