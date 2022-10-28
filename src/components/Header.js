import React from  "react"


const Header = ({title, category}) => (
     <div>
        <p className="text-gray-400">{category} </p>
        <p className = " text-3xl font-extra-bold " >{title} </p>   
    </div>
  )
  
  
export default  Header;