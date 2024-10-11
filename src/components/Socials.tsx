import { useEffect, useState } from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoReddit } from "react-icons/io5";

function Socials() {
  const [isLoading, setIsLoading] = useState(false);
  const [gitObj, setGitObj] = useState<any>(null);
  const [fetchCount, setFetchCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://api.github.com/users/OV3R9");
        const parsed = await res.json();
        setGitObj(parsed);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (fetchCount < 1) {
      fetchData();
      setFetchCount(fetchCount + 1);
    }
  }, [fetchCount]);

  if (isLoading) {
    return <div className="text-3xl">Loading...</div>;
  }

  if (gitObj != null) {
    console.log(gitObj);
  }

  return (
    <>
      <div className="ml-[8vw] mr-[8vw] h-[88vh] animate-appears-anim-l animation-timeline animation-range">
        <div className="mt-32 flex flex-row justify-between flex-wrap">
          <div className="flex-col justify-center">
            <div className="w-[30vw] h-[10vw] flex flex-col">
              <p className="text-2xl text-nowrap">Where you can</p>
              <h2 className="text-center text-5xl text-nowrap">Find me🔎?</h2>
            </div>

            <div className="lg:mt-16 mt-12">
              <div className="h-[30px] w-full bg-[#26282b] flex items-center rounded-md">
                <p className="ml-2 text-gray-500">README.md</p>
              </div>
              <div className="bg-[#18181a] p-5 pt-3 rounded-md">
                <div className="tracking-widest">
                  <p>Followers: {gitObj?.followers}</p>
                  <p>Location: {gitObj?.location}</p>
                  <p>Public Repositiories: {gitObj?.public_repos}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30vw] flex-col flex items-center">
            <p className="text-lg mb-3">GitHub:</p>
            <img alt="" className="rounded-2xl" src={gitObj?.avatar_url}></img>
            <h2 className="text-center text-5xl lg:mt-10 mt-5">
              <div
                className="border-4 border-white rounded-lg p-3 lg:text-3xl text-xl
              hover:bg-white hover:text-pink-500 transition-all duration-[.5s] cursor-pointer"
              >
                <a href={gitObj?.html_url} target="_blank">
                  {gitObj?.login}
                </a>
              </div>
            </h2>
          </div>

          <div className="w-[100vw] flex justify-evenly items-center lg:mt-40 mt-80 ">
            <h2 className="text-2xl">Other Socials: </h2>
            <a href="https://www.instagram.com/_kamil.p__/" target="_blank">
              <div
                className="flex justify-center items-center border-4 border-white rounded-lg
              hover:bg-pink-500 transition-all duration-[.5s] cursor-pointer"
              >
                <IoLogoInstagram size={70}></IoLogoInstagram>
              </div>
            </a>
            <a href="https://www.facebook.com/noga.krokodyla/" target="_blank">
              <div
                className="flex justify-center items-center border-4 border-white rounded-lg
              hover:bg-pink-500 transition-all duration-[.5s] cursor-pointer"
              >
                <FaFacebookF size={70}></FaFacebookF>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kamil-por%C4%99bski-6b363b331/"
              target="_blank"
            >
              <div
                className="flex justify-center items-center border-4 border-white rounded-lg
              hover:bg-pink-500 transition-all duration-[.5s] cursor-pointer"
              >
                <FaLinkedinIn size={70}></FaLinkedinIn>
              </div>
            </a>
            <a href="https://www.reddit.com/user/OV3R9/" target="_blank">
              <div
                className="flex justify-center items-center border-4 border-white rounded-lg
              hover:bg-pink-500 transition-all duration-[.5s] cursor-pointer"
              >
                <IoLogoReddit size={70}></IoLogoReddit>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Socials;
