import React from "react"
import "../Button.css"
import {
  TooltipComponent
}from "@syncfusion/ej2-react-popups"




const Button = ({
  title, color, style, pos, dotcolor, icon, className, fn
}) => {
  return (
    <TooltipComponent position={pos} content={ title }>
      <button 
      onClick={() => fn()}
      className={className}
      style={ {
        color: color,
        background: dotcolor
      }}>
      { icon }
      </button>
    </TooltipComponent>
  )

}
export default Button;