import Head from 'next/head'
import React from 'react'


const About = () => {
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
                <img src="/avatar1.png" alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <div className="a-title">About Me</div>
            <p className="a-sub">
            I special in REACT.js, NEXT.js, Node.js, Firebase, MongoDB, THREE.js, socket.io, Adobe AD, Figma, HTML, CSS, JavaScript,Python, TypeScript.
            </p>
            <p className="a-desc">
            I design and develop services for clients of all sizes, specializing in creating optimized, stylish and modern web-applications, websites, web services and online stores.
            </p>
            <div className='a-award'>
                {/* <img src="/Logo.jpg" alt="award" className="a-award-img" /> */}
                <div className="a-award-texts">
                    <h4 className="a-award-title"> </h4>
                    <p className="a-award-desc">
                    {/* Curabitur aliquet quam id dui posuere blandit.  */}
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About