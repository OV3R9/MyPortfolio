function Banner() {
  return (
    <>
      <div className="w-full h-[99vh] bg-animatedBG bg-cover bg-fixed bg-no-repeat bg-center mt-[5.5rem]">
        <div className="w-full h-full bg-alfa-black flex items-center justify-center p-10">
          <h2 className="text-center lg:text-5xl text-3xl animate-appears-anim-l animation-timeline animation-range">
            "Clean code always looks like it was written by someone who cares."
            <p className="lg:text-2xl text-base mt-10">Robert C. Martin</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Banner;
