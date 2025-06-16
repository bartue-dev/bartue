import { skills } from "../../utils/data";

function Skills() {

  return(
    <div className="text-zinc-200 mb-4">

      <div className="text-cyan-500 flex items-center mb-1">
        <h1>bartue@DESKTOP-0228F:$</h1>
        <h1 className="ml-2 text-zinc-200">skills</h1>
      </div>

      {skills.map((item,i) => (
        <div key={`${item}-${i}`} className="flex items-center gap-4">
          <h1>{item.about}</h1>
          <h1>-&gt;</h1>
          <div className="flex items-center gap-2 ml-2">
            {item.language.map((lang,j) => (
              <h1 
                key={j}
                className="text-green-600"
              >
                {`${lang}${j !== item.language.length-1 ? "," : ""}`}
              </h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills;