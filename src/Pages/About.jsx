
function About() {

  return(
    <div className="flex items-center gap-30">
      <div className="text-white text-xl">
        <h1 className="italic">About me</h1>
        <div className="ml-2">
          <p>- Software Developer</p>
          <p>- Self taught</p>
        </div>
        <h1 className="italic mt-2">Tech Stack/Skills</h1>
        <div className="ml-2">
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

      <div className="border">
        <img 
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnhiZnVkeDBmbHdoYW1wamd5Zmw2azYxMWhtZ21pY29xZmR1Y2F2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1C8bHHJturSx2/giphy.gif" 
          className="w-50 bg-none"
          />
      </div>
    </div>
   
  )
}

export default About;