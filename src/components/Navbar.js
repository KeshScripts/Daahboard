import React from "react"
import Button from "../components/Button"
import {useStateContext}  from  "../context/contextProvider"
import  "./styles/Navbar.css"
import{AiOutlineMenu}from 'react-icons/ai';
import{FiShoppingCart} from 'react-icons/fi'
import{BsChatLeft}from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md';
import  avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile} from "."

const Navbar = () => {
   const {isActive, isClicked, handleClick, setIsActive} = useStateContext()


  return (
    <div className= "flex menu">
      <Button
         className = {isActive ? "navClosed" : ""}
         title="menu"
          color="blue"
          icon= {<AiOutlineMenu/>}
          fn ={() => setIsActive(true)}
       />

      <div className="icon-list flex">
          <Button fn={()=> handleClick("cart")} color="blue" title="cart" icon={<FiShoppingCart />} />
          <Button fn={()=> handleClick("chat")} color="blue" title="chat"icon={<BsChatLeft />} />
          <Button fn={()=> handleClick("Notification")}  color="blue" title="Notification" icon={<RiNotification3Line/>} />
          <div className="profile flex">
            <img style={{
              borderRadius:"50%",
              width: "70px", height: "70px",
            }} src={avatar}/>
            <p><span className="text"> Hi, {""}</span> Michael</p>
           <Button fn={()=> handleClick("UserProfile")}  color="blue" title="profi6le" icon={<MdKeyboardArrowDown/>} />
          </div>
         </div>
 	 {isClicked.cart && <Cart/>}
	 {isClicked.chat && <Chat/>}
	 {isClicked.notification && <Notification/>}
	 {isClicked.userProfile && <UserProfile/>}
    </div>

  )
}

export default Navbar;
