function Banner() {
  return (
    <>
      <div className="w-full h-[99vh] bg-animatedBG bg-cover bg-no-repeat bg-center mt-20 border-t-2 border-b-2 border-white">
        <div className="w-full h-full bg-alfa-black flex items-center justify-center">
          <h2 className="text-center text-5xl">
            "Clean code always looks like it was written by someone who cares."
            <p className="text-2xl mt-10">Robert C. Martin</p>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Banner;