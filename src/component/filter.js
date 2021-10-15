import React,{useState} from "react";
import Dropdown from "./dropdown";
import "./filter.css";
let Filter=()=>{
let year=[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
    
return <div className="filter">
<Dropdown year={year}/>
<Dropdown year={year}/>
</div>
}
export default Filter;