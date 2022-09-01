import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext } from 'react';
import { ThemeContext } from "./Context"

const Layout = ({children}) => {
    const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
    return ( 
        <div className="content" style={{backgroundColor: darkMode? "#222": "white", color: darkMode && "white"}}>
            {/* <Navbar/> */}
            { children }
            {/* <Footer/> */}
        </div>
     );
}
 
export default Layout;