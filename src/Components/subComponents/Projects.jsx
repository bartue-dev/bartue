import { projects } from "../../utils/data";

function Projects() {

  return(
    <div className="text-zinc-200 mb-4">
      <div className="text-cyan-500 flex items-center mb-1">
        <h1>bartue@DESKTOP-0228F:$</h1>
        <h1 className="ml-2 text-zinc-200">projects</h1>
      </div>
      
    
      
      {projects.map((item, i) => (
        <div key={i} className=" mb-2">
          <div className="flex items-center gap-2">

            <h1 className="text-pink-600">{item?.title}</h1>


            <div className="flex items-center">
              <h1 className="mr-2">-&gt;</h1>

              {/* if link exist then render it */}
              {item?.link && <a href={item?.link} target="_blank" className="underline underline-offset-2">github</a>}

              {/* if frontend exist then render frontend data */}
              {item.code?.frontend
              && <a href={item.code?.frontend} className="underline underline-offset-2">
                  frontend code
                </a>
              }

              {/* if backend and frontend exist then render "/" */}
              {(item?.frontend?.length > 0 && item?.backend?.length > 0) && <h1>/</h1>}

              {/* if backend exist then render its data */}
              {item.code?.backend
                && <a href={item.code?.backend} className="underline underline-offset-2">
                    backend code
                  </a>
              }

              {/* if status exists then render its data */}
              {item?.status && <h1 className="ml-2 italic"> <span className="mr-2">-&gt;</span>{item.status}</h1>}

            </div>
            
          </div>

          {item?.about && <h1>- {item?.about}</h1> }

          <div>
            {(item?.backend?.length > 0 || item?.frontend?.length > 0)
              && <h1>- built with:</h1>}

            {item?.frontend
            && <div className="ml-4">
                {item.frontend.map((front, j) => (
                  <h1 key={j}>- {front}</h1>
                ))}
              </div>}

            {item?.backend
                && <div className="ml-4">
                    {item.backend.map((back, x) => (
                      <h1 key={x}>- {back}</h1>
                    ))}
                  </div>}
          </div>
         

          <p>------</p>
        </div>
      ))}
    </div>
  )
}

export default Projects;