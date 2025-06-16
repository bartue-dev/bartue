import { useContext } from "react";
import CommandContext from "../context/CommandProvider";

function useCommand() {
  return useContext(CommandContext)
}

export default useCommand
