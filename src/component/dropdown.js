import React from "react";
let Dropdown=({year})=>{
    console.log(year);
return (
    <>
    <select>
        {year.map(item=><option>{item}</option>)}
        </select>
    </>
)
}
export default Dropdown;