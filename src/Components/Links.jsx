import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Links() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const path = location.pathname.split("/").pop();

    setActiveLink(path)
  }, [location])

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