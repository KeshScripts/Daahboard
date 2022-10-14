import React, {useState, useContext, createContext} from  "react"

const StateContext = createContext()

const menuState = {
  cart : false,
  chat : false,
  Notification : false,
  UserProfile: false
}

const ContextProvider = ({children}) => {
  
  const [screenSize, setScreenSize] = useState(undefined)
  const [isActive, setIsActive] =  useState(true);
  const [themeSettings, setThemeSettings] = useState(false)
  const [mode, setMode] = useState("Light")
  const [currentColor, setCurrentColor] = useState( "blue" )
  const [isClicked, setIsClicked] = useState(menuState);


 function handleClick(clicked) {
   setIsClicked({...menuState, [clicked]: true})
 }

const changeMode =(event) => {
    const value = event.target.value
    setMode(value)
    localStorage.setItem("mode", value )
  }
  
const changeColor = (color) => {
    setCurrentColor(color)
    localStorage( "color": color )
 } 
  return (
   <StateContext.Provider  value={{ isClicked, isActive, setIsActive, mode,setMode,setIsClicked,currentColor,setCurrentColor, setScreenSize, screenSize, themeSettings, setThemeSettings, changeMode, changeColor }}>
      {children}
  </StateContext.Provider>
)} 

const useStateContext = () => useContext(StateContext) 


export {useStateContext, ContextProvider}
