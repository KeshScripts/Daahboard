import React from 'react';
import {
  BsCurrencyDollar
} from 'react-icons/bs';
import {
  GoPrimitiveDot
} from 'react-icons/go';
import {
  IoIosMore
} from 'react-icons/io';

import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine
} from '../components';
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData
} from '../data/dummy';
import {
  useStateContext
} from '../context/contextProvider';
import product9 from '../data/product9.jpg';


const styles = {
  width: "100%",
  backgroundImage: "url('https://img.freepik.com/free-vector/woman-choosing-bank-piggybank-choosing-instrument-saving-planning-budget-loan_74855-11205.jpg?w=740&t=st=1665971809~exp=1665972409~hmac=de7d1ecf947b9d4cc30ecad26e4ad88089edc33242b01d2a9b884173f6ff64a9')",
  backgroundSize: "cover",
  backgroundPosition: "center center"

}

const Ecommerce = () => {
const {currentColor, currentMode } = useStateContext();



  return (
    <div className="mt-12">
    
      <div className="flex justify-center flex-wrap  lg:flex-nowrap">
      {/*earning */}
        <div style={styles} className="h-44 rounded-xl py-2 bg-no-repeat">
        
        {/* text container  */}
           <div className="p-2">
             <p className=" font-bold text-gray-400 mb-2 ">Earnings </p>
              <p className=" font-bold text-2xl">
                  $63,567.56 </p>
             <button className="mt-4 text-gray-400"
              style={{
              borderRadius:"8px",
              padding: "0.5rem",
              background : currentColor}}>
              Download
            </button>
           </div>
           {/* text end */}
        </div>
           {/* Earning data */}
         {earningData.map((data) => (
            <div key={data.title} className="flex h-44 w-44 border border-sky-400 flex-wrap  p-3 justify-center items-center shadow-xl  "> 
              <div className="flex flex-col justify-center items-center"> 
               <span className="flex items-center justify-center h-12 w-12" style={{
                color: data.iconColor,
                borderRadius: "100%",
                backgroundColor: data.iconBg }}>{data.icon}</span>
                <p className="ml-2 text-xl">{data.amount}<span className="text-red-400 text-xs lg: text-sm ml-1">{data.percentage}</span></p>
                <p className= "ml-2">{data.title}</p>
              </div>
            </div>
         ))}
      </div>
      {/* starts */}
      <div className="flex flex-wrap  mt-12 shadow-xl">
      <div className='w-full px-3   rounded-xl'>
        <div className="flex px-3 justify-between">
          <p className="font-semi-bold  px-2 text-xl">Revenue Updates</p> 
           <div className="flex" >
            <p className="flex gap-0 items-center">
             <span>{<GoPrimitiveDot />} </span>
             <span className="ml-1" >Expense</span>
            </p>
            <p className="flex space-x-0 items-center">
             <span className="mr-0 text-green-500">{<GoPrimitiveDot />} </span>
             <span className="ml-1" >Budget</span>
            </p>
           </div>
          </div>
          {/* block */}
             <div className= "flex gap-10 flex-wrap-reverse my-4  justify-around">
                <div className=" px-2 border-r-1 border-gray-400 mt-10">
                <div className="mb-4">
                 <p className="text-2xl font-bold">$93,656
                  <span className="text-xs md: text-sm bg-green-400 ml-1 rounded-xl"> +30% </span>
                 </p>
                  <p className="text-xs text-gray-400 md: text-sm">Budget</p>
                </div>
                
                <div className="mb-4">
                 <p className="text-2xl font-bold">$45,006 </p>
                  <p className="text-xs text-gray-400 md: text-sm"> Expense </p>
                </div>
                  <div className="mr-1 border-r-1 border-gray-200  sparkline mt-3">
                  <SparkLine  
                    currentColor = {currentColor}
                    data = {SparklineAreaData}
                    id = "area-sparkLine"
                    height = "88px"
                    width = "250px"
                    type = "Area"
                  />
                  <button style = {{
                    color: "white",
                    backgroundColor: currentColor,
                    borderRadius: "10px",
                    padding : "8px",  
                    marginTop: "10px"
                  }}>
                   Download Report
                  </button>
                  </div>
                </div>
                
                <div className="stacked">
                  <Stacked currentMode = {currentMode}
                  width="320px" height=" 360px"  />
                </div>
            </div>
          {/* block */}
          
         </div>
      </div> 
     </div>
    )
  }

export default Ecommerce;
