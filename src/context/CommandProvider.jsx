import { createContext, useEffect, useState } from "react";

const CommandContext = createContext()

export function CommandProvider({children}) {
  const [command, setCommand] = useState([]);

  useEffect(() => {
    console.log("Command:", command)
  }, [command])

  return (
    <CommandContext.Provider value={{command, setCommand}}>
      {children}
    </CommandContext.Provider>
  )
}

export default CommandContext;

