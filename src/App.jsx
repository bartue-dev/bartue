import Header from "./Components/Header";
import Cli from "./Components/CLI";

function App() {

  return (
    <div className="p-5 bg-stone-800 flex justify-between gap-15 h-screen font-jbMono">
      <div className=" w-full bg-zinc-700 overflow-auto rounded-xs" style={{ scrollbarColor: "light-gray", scrollbarWidth: "thin"}}>
        <Header />
        <Cli />
      </div>
    </div>
  )
}

export default App
