import { Category, ChartComponent, Tooltip, StackingColumnSeries, Inject, Legend, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy"
import { useStateContext } from "../../context/contextProvider"

function Stacked({width, currentMode,  height}) {
     return (
     <ChartComponent
     id = "charts"
     width= {width}
     height = {height}
     primaryXAxis={stackedPrimaryXAxis}
     primaryYAxis={stackedPrimaryYAxis}
     chartsArea = {{border :  {width: 0} }}
     tooltip = {{enable : true}}
     background = {currentMode === "Dark" ? '#33373E' :  '#fff'
     }
     legendSettings ={{background : 'white '}}
     >
     
      <Inject services={[StackingColumnSeries, Legend, Tooltip, Category]} />
      
      
      <SeriesCollectionDirective>
        { stackedCustomSeries.map((items, id) => (
          <SeriesDirective key={id}  { ...items } />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    )
}


export default Stacked;