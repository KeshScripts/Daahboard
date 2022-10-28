import React from "react"
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from  "../data/grid";

import Header from   "../components/Header"

function Customers (){
return (
  <div className= "m-2 md: m-10 p-2 md: p-10 tracking-tight bg-white">
     <Header title="Customers" category="Page" />
          <GridComponent 
             allowPaging
             allowSorting
             dataSource={customersData}  >
                <ColumnsDirective>
                 { customersGrid.map( (items, index) => (
                    <ColumnDirective 
                    key={index} {...items } />
                 )) }
                </ColumnsDirective>
           </GridComponent>
  </div>
    )
}


export default Customers;