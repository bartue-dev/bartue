import Links from "./Components/Links"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="px-55 py-15 flex justify-between gap-15 ">
      <div className=" h-120 w-full  rounded-md  bg-[#264653]  shadow-xl px-10 py-5">
      < Outlet />
      </div>
      <Links />
    </div>
  )
}

export default App
