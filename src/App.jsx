import Links from "./Components/Links"
import { Outlet, useLocation } from "react-router-dom"

function App() {
  const location = useLocation().pathname.split("/").pop();

  return (
    <div className="px-55 py-15 flex justify-between gap-15 font-mono bg-[url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWc2dXdoOGJrMmxsZW5ydjc0N2d4b3NtMzIyMjE5aTJ5ZGhrcW13cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DiuRoalmK2bCc3YXFu/giphy.gif)]">
      <div 
      className=" h-120 w-full  rounded-md  bg-pink-950  shadow-xl px-3 py-2 overflow-auto"
      style={{ scrollbarColor: "white #264653"}}
      >
        <h1 
        className="text-green-700 font-extrabold text-lg"
        >
          bartue@DESKTOP-0228F:$
          <span className="text-white"> {location ? `${location}/` : "Hi I'm Bart Batiancila"}</span>
        </h1>
        < Outlet />
      </div>
      <Links />
    </div>
  )
}

export default App
