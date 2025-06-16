import { contacts } from "../utils/data";

function Contacts() {

  return (
    <div className="text-zinc-200 mb-4">
      <h1>bart batiancila</h1>
      <p>----------</p>
      {contacts.map((item, i) => (
        <div key={i} className="flex gap-4">
        <h1 className="text-fuchsia-600">{item.title}</h1>
        <h1>-&gt;</h1>
        <a href={item?.link} target="_blank">{item.description}</a>
      </div>
      ))}
      
    </div>
  )
}

export default Contacts;