import React from "react"
import links from  "../data/listdata"
import  {FiSettings} from "react-icons/fi"
import "./styles/Sidebar.css"
import Button from "../components/Button"
import {MdOutlineCancel} from "react-icons/md"
import {useStateContext} from "../context/contextProvider" 
import {Link, NavLink} from  "react-router-dom"

const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(-(str.length-1))


const Sidebar = () => {
  const {isActive, setIsActive
  } = useStateContext()
  
  function handleClose(){
  setIsActive(false)
  console.log(isActive)
}
 
  return (
    <div>
      <div className = "header">
        <span className="logo"> <FiSettings/> GoFlexShop</span>
        
      {/* cancel Botton X for closing our sidebar*/}
        <Button 
          title="close"
          pos= "BottomCenter"
          color="grey" 
          dotcolor="transparent"
          className="close-btn"
          icon = {<MdOutlineCancel />} 
          fn = {() => handleClose()}
          />
          
      </div>
      
      
      <div className="links">
        {links.map(header => (
          <div key={header.title}
          style={{marginTop: "2rem"}}>
          
          {/* loop through title and create a Heading for our list  */}
             
           <p key={header.title} className="lead"> {header.title.toUpperCase()} </p>
           
             {/* A subsidiary loop inside of the first loop [each heading title ] to create a clickable link  */}
       
             {header.links.map(link => (
             <NavLink to= {`/${link.name}`}
             key={link.name} 
             className={({isActive}) => isActive ? "activeLink" :  "links"  }  
             > {link.icon}<span>{capitalize(link.name)}</span></NavLink>
           ))}
          </div>
          ))}
      </div>
    </div>
)}
export default Sidebar;

