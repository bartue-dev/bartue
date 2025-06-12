
function About() {

  return(
    <div className="flex items-center gap-23">
      <div className=" text-xl text-white">
        <h1 className="italic">About me</h1>
        <div className="ml-2">
          <p>- Software Developer</p>
          <p>- Self taught</p>
        </div>
        <h1 className="italic mt-2">Tech Stack/Skills</h1>
        <div className="ml-2">
          <p>- Git</p>
          <p>- Node js</p>
          <p>- Express js</p>
          <p>- PostgreSQL</p>
          <p>- Prisma ORM</p>
          <p>- React js</p>
          <p>- Tailwind css</p>
        </div>
        <h1 className="italic mt-2">Contacts</h1>
        <div className="ml-2">
          <p>
            <a 
              href="https://docs.google.com/document/d/1teH_zvjZLjz2UmiJVEPOOD1rLGv8vEEAhCYWguluzhI/edit?tab=t.0" 
              target="_blank"
              >
                - <span className="underline">Resume</span>
              </a>
          </p>
          <p>
            <a 
              href="https://github.com/bartue-dev" 
              target="_blank"
              >
                - <span className="underline">Github</span>
              </a>
          </p>
          <p>
            <a 
              href="https://www.linkedin.com/in/bart-batiancila-316a52322/" 
              target="_blank"
              >
                - <span className="underline">Linkedin</span>
              </a>
          </p>
          <p>- bartbatiancila28@gmail.com</p>
        </div>
      </div>

      <div>
        <img 
          src="Code-Coding-GIF-by-PLCnext-Tec-unscreen.gif" 
          className="w-50 bg-none"
          />
      </div>
    </div>
   
  )
}

export default About;