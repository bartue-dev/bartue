import { help } from "../../utils/data"

function Help() {

  return (
    <div className="text-zinc-200 mb-4">
      
      <div className="text-cyan-500 flex items-center mb-1">
        <h1>bartue@DESKTOP-0228F:$</h1>
        <h1 className="ml-2 text-zinc-200">help</h1>
      </div>

        {help.map((data, i) => {
          return (
              <div key={i}>
                <div className="flex items-center gap-4">
                <h1 className="text-yellow-500">{data.title}</h1>
                <h1>-&gt;</h1>
                <h1 className="ml-2">{data.value}</h1>
              </div>
            </div>
          )
        })}
      <p className="mt-3">type whatever value above in the command line, this will render the data of the above value</p>
    </div>
  )
}

export default Help