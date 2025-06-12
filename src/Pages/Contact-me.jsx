import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";


function ContactMe() {
  const form = useRef();
  const [alert, setAlert] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
       await emailjs.sendForm('service_frwljbc', 'template_af4jtcp', form.current, {
        publicKey: '0t8pDHm58y0E50Arr',
      });

      setAlert(true);
      setTimeout(() => {
        setAlert(false)
      }, 3000)
      form.current.reset();
    } catch (error) {
      console.log("Failed", error)
    }
  };

  return(
    <div className=" text-xl relative">
      <form action="" className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="name"> Name: </label>
          <input id="name" name="name" type="text" placeholder="Enter name" className="input input-primary"  required/>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="from"> Email: </label>
          <input id="from" name="email" type="email" placeholder="Enter email" className="input input-primary"  required/>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-white" htmlFor="message"> Message: </label>
         <textarea id="message" name="message" type="text" placeholder="Message" className="textarea textarea-primary resize-none"  rows="7" required></textarea>
        </div>

        <button className="btn btn-primary w-20" type="submit" value="Send">submit</button>
      </form>

      {alert && (
        <div role="alert" className="alert alert-success absolute top-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white">Message sent!</span>
        </div>
      )}
      
    </div>
  )
}

export default ContactMe;