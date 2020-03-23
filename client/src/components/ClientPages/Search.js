import React from 'react';
import Select from 'react-select';

const Works = [
  {label: "All", value:0},    
  { label: "Plombier", value: 1 },
  { label: "Electricien", value: 2 },
  { label: "Femme de ménage", value: 3 },
  { label: "Transporteur", value: 4 },
  { label: "Babysitter", value: 5 },
  
];

export default function Search(props)  {
    return(
  <div className="Search">
    <div className="a">
      {/* <Select options={Works}  onChange={(opt)=>{
                    return console.log("option",opt.label)
                    // return props.worker.filter(el => el.Specialité === opt.label);
                    
                }}  /> */}
                <Select options={Works} onChange={(opt)=>props.searchWorkers(opt.label)}/>
                
    </div>
  </div>
    )};