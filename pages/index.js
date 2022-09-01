import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { 
    y: 800, 
  },
  visible: { 
    y: 0, 
    transition: { delay: 0.001, duration: 1.0 }
  },
};

const svgVariants = {
  hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
}

export default function Home() {
  return (
    <>
    <Head>
      <title>Colin | Home</title>
      <meta name="keywords" content="Colin Decorce"/>
    </Head>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.wrap}>
          <div className={styles.introd}> Hello, My Name is</div>
          <div className={styles.name}>Colin Decorce</div>
          <div className={styles.title}>
            <div className={styles.titlewrap}>
              <div className={styles.titleItem}>Full Stack Developer</div>
              <div className={styles.titleItem}>UI/UX Designer</div>
              <div className={styles.titleItem}>Content Creator</div>
              <div className={styles.titleItem}>Hyper-Realism Artist</div>
            </div>
            <div className={styles.description}>
            
            </div>
            {/* <div className={styles.div}>
              
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.hold}></div>
        <motion.img src="/profile.png" alt="image"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        />
      </div>
    </div>
    </>
  )
}
