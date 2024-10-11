function Snippets() {
  return (
    <>
      <div className="flex w-full mt-6 min-h-[700px] flex-wrap">
        <div className="lg:w-[45%] w-[100%] min-w-[45%] self-start animate-appears-anim-l">
          <div className="h-[30px] w-full bg-[#26282b] flex items-center rounded-md">
            <p className="ml-2 text-gray-500">App.tsx</p>
          </div>
          <div className="bg-[#18181a] p-5 pt-3 rouned-md">
            <div className="tracking-widest">
              <div className="font-mono text-gray-500 tracking-normal mb-2">
                // About me
              </div>
              <span className="text-purple-600">function </span>
              <span className="text-blue-500"> App</span>
              <span className="text-yellow-400">{"() {"}</span> <br></br>
              <div className="ml-3 block"></div>
              <span className="text-purple-600">{"return ("} </span> <br></br>
              <div className="ml-3 block">
                <span className="font-mono">&lt;</span>I am a{" "}
                <span className="text-yellow-600">aspiring</span>,{" "}
                <span className="text-cyan-600">young </span>
                developer from Krakow🐉 that is currently looking for a practice
                job🛠️. Currently Working with my friends on a project called{" "}
                <a
                  href="https://HelpHunters.pl"
                  target="_blank"
                  className="text-pink-600"
                >
                  'HelpHunters'
                </a>
                . Techonologies I usually use to develop client side of apps
                are: <span className="text-cyan-600">React⚛</span> with Next.js
                framework and{" "}
                <span className="text-[#18a381]">tailwindcss🎨</span> for design
                aspects. Currently I attend to{" "}
                <a
                  href="https://zsel1.pl"
                  target="_blank"
                  className="text-yellow-400"
                >
                  ZSE nr1⚡
                </a>
                , trying to get{" "}
                <span className="text-[#4e525e]">techincian degree💻.</span>{" "}
                Also familiar with{" "}
                <span className="text-yellow-500">python🐍</span> and
                <span className="text-blue-500"> SQL🌐</span>. Feeling smooth
                while communicating using english📚💬.
                <span className="font-mono">/&gt;</span> <br></br>
              </div>
              <span className="text-purple-600">{")"}</span> <br></br>
            </div>
            <span className="text-yellow-400">{"}"}</span>
            <br></br>
            <br></br>
            <span className="text-purple-600">{"export default"}</span>
            <span className="text-blue-500">{" App"}</span>;
          </div>
        </div>

        <div className="lg:w-[45%] w-[100%] mt-10 lg:mt-28 ml-auto min-w-[45%] animate-appears-anim-r">
          <div className="h-[30px] w-full bg-[#26282b] flex items-center rounded-md">
            <p className="ml-2 text-gray-500">Index.css</p>
          </div>
          <div className="bg-[#18181a] p-5 pt-3 rounded-md">
            <div className="tracking-widest">
              <div className="font-mono text-gray-500 tracking-normal mb-2">
                {"* {"}
                {"   margin: 0;"}
                {"   padding: 0;"}
                {"}"}
              </div>
              <div>
                <p className="text-red-400">
                  {".UlubionePrzedmioty"} {"Szkola"}{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </p>
                <div className="ml-3">
                  <p>
                    {"informatyka: "}{" "}
                    <span className="text-orange-400">{"10/10"}</span>;
                  </p>
                  <p>
                    {"matematyka: "}{" "}
                    <span className="text-orange-400">{"8/10"}</span>;
                  </p>
                  <p>
                    {"przedmioty-zawodowe: "}{" "}
                    <span className="text-orange-400">{"11/10"}</span>;
                  </p>{" "}
                </div>
                <span className="text-yellow-400">{"}"}</span>
                <br></br>
              </div>
              <div>
                <p className="text-red-400">
                  {"div"} <span className="text-gray-300">+</span> {".urodziny"}{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </p>
                <div className="ml-3">
                  <p>
                    {"date-of-birth: "}{" "}
                    <span className="text-[#3883d9]">{"calc"}</span>
                    {"("}
                    <span className="text-orange-400">{"09.11.2007"}</span>
                    {");"}
                  </p>
                  <p>
                    age: <span className="text-orange-400">16yrsold</span>;
                  </p>
                </div>
                <span className="text-yellow-400">{"}"}</span>
                <br></br>
              </div>
              <div>
                <p className="text-red-400">
                  {"#strongSides"}{" "}
                  <span className="text-yellow-400">{"{"}</span>
                </p>
                <div className="ml-3">
                  <p>
                    {"passion: "}
                    <span className="text-orange-400">{"100%"}</span>;
                    <span className="text-green-700 font-mono">
                      {"      "}
                      <span className="text-green-700">
                        {"/* Never gonna change */"}
                      </span>
                    </span>
                  </p>
                  <p>
                    {"determination: "}
                    <span className="text-orange-400">{"100%"}</span>;
                  </p>
                  <p>
                    {"will-of-developing-my-skills: "}
                    <span className="text-orange-400">{"210.5%"}</span>;
                  </p>
                </div>
                <span className="text-yellow-400">{"}"}</span>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Snippets;
