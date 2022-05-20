import { useQuery } from "@apollo/client";
import { REACT_EXPERIENCE_QUERY } from "../query/reactExperienceQuery";
import JSdata from '../data/reactExperience.json'
import Chart from './reactChart';
import { PieChart } from "../components/PieChart";

const ReactExperienceChart=()=> {
    // const { loading, error,data } = useQuery(REACT_EXPERIENCE_QUERY );    
    const {data}=JSdata
    const {all_years}=data.survey.tool.experience
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    return <>    
        <center><h1>General Chart</h1></center>
        <Chart all_years={all_years}/>
        <center><h1>Detalle por año</h1></center>
        <div className="chartContainer">
            {all_years.map((year)=>
                <PieChart year={year}/>
            )}
        </div>
        
    </>
  }

export default ReactExperienceChart