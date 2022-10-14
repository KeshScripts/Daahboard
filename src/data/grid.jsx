exp\ort const gridOrderImage = (props) => ( 
   <div> 
     <img 
       className="rounded-xl h-20 md:ml-3" 
       src={props.ProductImage} 
       alt="order-item" 
     /> 
   </div> 
 ); 
  
 export const gridOrderStatus = (props) => ( 
   <button 
     type="button" 
     style={{ background: props.StatusBg }} 
     className="text-white py-1 px-2 capitalize rounded-2xl text-md" 
   > 
     {props.Status} 
   </button> 
 ); 
  
 export const kanbanGrid = [ 
   { headerText: 'To Do', 
     keyField: 'Open', 
     allowToggle: true }, 
  
   { headerText: 'In Progress', 
     keyField: 'InProgress', 
     allowToggle: true }, 
  
   { headerText: 'Testing', 
     keyField: 'Testing', 
     allowToggle: true, 
     isExpanded: false }, 
  
   { headerText: 'Done', 
     keyField: 'Close', 
     allowToggle: true }, 
 ]; 
 const gridEmployeeProfile = (props) => ( 
   <div className="flex items-center gap-2"> 
     <img 
       className="rounded-full w-10 h-10" 
       src={props.EmployeeImage} 
       alt="employee" 
     /> 
     <p>{props.Name}</p> 
   </div> 
 ); 
  
 const gridEmployeeCountry = (props) => ( 
   <div className="flex items-center justify-center gap-2"> 
     <GrLocation /> 
     <span>{props.Country}</span> 
   </div> 
 );
