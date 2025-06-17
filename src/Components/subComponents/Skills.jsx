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
                {/* add "," if item is equal to language length -1 (which is the max length of an array) */}
                {`${lang}${j !== item?.language?.length-1 ? "," : ""}`}
              </h1>
            ))}
          </div>
        </div>
      ))}

      <p className="mt-3">type <span className="text-pink-600"> projects </span> to see my list of projects </p>
    </div>
  )
}

export default Skills;