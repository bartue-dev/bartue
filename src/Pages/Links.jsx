import { useState } from "react";
import { Link } from "react-router-dom";

function Links() {
  const [activeLink, setActiveLink] = useState("about")

  const handleActiveLink = (path) => {
    setActiveLink(path)
  }

  const links = [
    { to: "about", label: "About"},
    { to: "projects", label: "Projects"},
    { to: "contact-me", label: "Contact me"},
  ]

  return(
    <div className="w-60 flex flex-col  h-25 mt-3">
      {links.map(link => {
        return (
            <Link
            key={link.to}
            to={link.to}
            onClick={() => handleActiveLink(link.to)}
            className={`px-3 py-1 border-l-2  border-gray-500 rounded-r-sm ${activeLink === link.to ? "bg-gray-100 border-yellow-400": ""}`}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export default Links;