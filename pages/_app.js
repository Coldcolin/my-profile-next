import Layout from '../Components/Layout'
import '../styles/globals.css'
import { ThemeProvider } from "../Components/Context"
import Navbar from '../Components/Navbar'

function MyApp({ Component, pageProps }) {
  
  return (
    <ThemeProvider>
      <Layout>
      <Navbar/>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
