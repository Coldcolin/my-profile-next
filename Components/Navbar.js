import Link from 'next/link'
import Image from 'next/image'
import Toggle from "./Toggle"
import { useContext } from 'react';
import { ThemeContext } from "./Context"

const Navbar = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <nav >
      <div className="logo" >
        {/* <img src="/Logo.jpg"/> */}
        {/* <Image src="/Logo.jpg" width={100} height={50} alt=""/> */}
        <Link href="/"><a style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>Home</a></Link>
      <Link href="/about"><a style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>About</a></Link>
      <Link href="/Colin"><a style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>projects</a></Link>
      <Link href="/contact"><a style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>contact</a></Link>
      </div>
      <Toggle/>
    </nav>
  )
}

export default Navbar