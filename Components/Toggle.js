import React, { useContext } from 'react'
import { ThemeContext } from './Context'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick =()=>{
        theme.dispatch({type: "TOGGLE"})
    }

  return (
    <div className="t">
        <img src="/Sun.png" alt="" className="t-icon"/>
        <img src="/Moon-removebg-preview.png" alt="" className="t-icon"/>
        <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle