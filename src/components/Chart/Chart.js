
import Chartbar from './Chartbar'
import './Chart.css'

const Chart=(props)=>{

   const dataPointsValues=props.dataPoints.map((dataPoint)=>dataPoint.value)
   const totalMaxValue=Math.max(...dataPointsValues)

    return  <div className='chart'>

             {props.dataPoints.map((dataPoint)=>
             { return <Chartbar 
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={totalMaxValue}
                label={dataPoint.label}/>})}

            </div>
}




export default Chart;