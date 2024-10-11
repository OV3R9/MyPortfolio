import Banner from "./components/Banner";
import Heading from "./components/Heading";
import Snippets from "./components/Snippets";
import Socials from "./components/Socials";
import RoadMap from "./components/RoadMap";

function App() {
  return (
    <>
      <div className="ml-[8vw] mr-[8vw]">
        <Heading></Heading>
        <Snippets></Snippets>
      </div>
      <RoadMap></RoadMap>
      <Banner></Banner>
      <Socials></Socials>
    </>
  );
}

export default App;
