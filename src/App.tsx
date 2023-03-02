import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Projects from "./section/Projects";

function App() {
  const Line = () => (
    <div className=" h-full w-[1px] border-r border-dashed border-opacity-20 border-desaturated-black "></div>
  );

  return (
    <div className="App relative overflow-x-hidden">
      <div className="absolute inset-0 flex justify-evenly">
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
      <Header />
      <Home />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
