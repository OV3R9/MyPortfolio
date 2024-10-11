function Heading() {
  return (
    <>
      <div className="flex flex-wrap w-[24vw] h-[30vh] content-center animate-appears-anim-l">
        <p className="text-[32px] w-full lg:leading-3 text-nowrap">
          Hi there, I'm
        </p>
        <h1 className="text-[56px] text-cyan-400 w-full text-center">Kamil</h1>
        <p className="text-[24px] w-full text-right ml-10 leading-3 text-nowrap">
          and I am a web developer{" "}
          <span className="inline border-r-2 border-r-white w-2 h-full animate-show-text"></span>
        </p>
      </div>
    </>
  );
}

export default Heading;
