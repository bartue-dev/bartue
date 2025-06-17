import useCommand from "../hooks/useCommand";
import Contacts from "./Contacts";
import About from "./subComponents/About";
import Help from "./subComponents/Help";
import Projects from "./subComponents/Projects";
import Skills from "./subComponents/Skills";

function Cli() {
  const { command, setCommand } = useCommand();

  const handleInputSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newCommand = formData.get("command").trim().toLowerCase();

    if (newCommand === "clear") {
      setCommand([])
    } else {
      setCommand(prev => [...prev, newCommand])
    }
    e.target.reset();
  }

  return (
    <div className="p-2 overflow-auto h-[88vh] text-xs sm:text-base" style={{ scrollbarColor: "white #264653", scrollbarWidth: "thin"}}>
      <Contacts/>

      <div className="text-zinc-200 mb-4">
         <h1 >Welcome to my portfolio - type <span className="text-green-600">help</span> for a list of available commands.</h1>
      </div>
     

      <div>
        {command.map((item, i) => (
        <div key={i}> 
          { item === "help" && <Help/> }
          { item === "about" && <About/> }
          { item === "skills" && <Skills/> }
          { item === "projects" && <Projects/>}
        </div>
      ))}
      </div>
        
      <div className="flex w-full">
        <h1 className="text-cyan-500 flex items-center">
          bartue@DESKTOP-0228F:$
        </h1>
        <form 
          onSubmit={handleInputSubmit}
          className="flex-1 ml-2"
        >
          <input 
            type="text" 
            className="input input-ghost !bg-transparent border-none outline-none focus:!outline-none focus:!ring-0   focus:!bg-transparent h-7 w-full !text-zinc-200 caret-zinc-100 lowercase text-xs sm:text-base"  
            name="command"
            autoFocus
            autoComplete="off"
          />
        </form>
      </div>
         
    </div>
  )
}

export default Cli;