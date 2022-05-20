import { useQuery } from "@apollo/client";
import { REACT_EXPERIENCE_QUERY } from "../query/reactExperienceQuery";
import Chart from '../components/BarChart';
import { PieChart } from "../components/PieChart";

const ReactExperienceChart=()=> {
    const { loading, error,data } = useQuery(REACT_EXPERIENCE_QUERY);      
    if (loading)return <h1>Cargando...</h1>
    if (error) return <h1>Error :(</h1>
    if(data){
        const {all_years}=data.survey.tool.experience 
        return <>    
            <center>
                <h1>General Chart</h1>
            </center>
            <Chart all_years={all_years}/>
            <center>
                <h1>Detalle por año</h1>
            </center>
            <div className="chartContainer">
                {all_years.map((year,index)=>
                    <PieChart key={index} year={year}/>
                )}
            </div>
        </>}
        
    
  }

export default ReactExperienceChart