import Head from "next/head";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from '../Components/Context'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(55,55,55)",
      boxShadow: "0px 0px 8px rgb(0,0,0)",
      transition: {
        duration: 0.3,
        yoyo: 5
      }
    }
  }

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_eulc36w', 'template_0e5qtxp', formRef.current, 'rG5TKYfz69hBgDUUb')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
    return ( 
        <>
    <Head>
      <title>Colin | About</title>
      <meta name="keywords" content="Colin Decorce"/>
    </Head>
    <div className= "a">
        <div className = "a-left">
            <div className="a-card bg" ></div>
            <div className= "a-card" >
                <img src="/Contact.png" alt="" className="a-img"/>
            </div>
        </div>
        <div className="c-right">
            <p className="c-desc">
                    <b>What{"'"}s your story?</b> Get in touch.Always available for freelancing if the right project comes along and for Hire.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" style={{backgroundColor: darkMode && "#333"}}/>
                    <input  type="text" placeholder="Subject" name="user_subject" style={{backgroundColor: darkMode && "#333"}}/>
                    <input  type="text" placeholder="Email" name="user_email" style={{backgroundColor: darkMode && "#333"}}/>
                    <textarea  rows="5" placeholder="Message" name="message" style={{backgroundColor: darkMode && "#333"}}/>
                    <motion.button type="submit" value="Send" 
                    variants={buttonVariants}
                    whileHover="hover"
                    >Submit</motion.button>
                    { done && "Thanks for reaching out ..."}
                </form>
        </div>
    </div>
    </>
     );
}
 
export default Contact;