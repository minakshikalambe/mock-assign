import React from "react";
import { useState } from "react";
const Ad = () => {
    const[brand,setBrand]=useState('');
    const[type,setType]=useState('');
    const[year,setYear]=useState('');
    const[kms,setKms]=useState('');
    const[Description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        const car={brand,type,year,kms,Description,price}
        fetch("http://localhost:8080/cars",{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(car)
        })
        .then(()=>{
           console.log("new Added")
        })
       
   }
    return ( 
        <div>
        <p>Add Car</p>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Brand" required
        value={brand}
        onChange={(e)=>setBrand(e.target.value)}/>
        <input type="text" placeholder="type" required
        value={type}
        onChange={(e)=>setType(e.target.value)}/>
        <input type="text" placeholder="year" required
        value={year}
        onChange={(e)=>setYear(e.target.value)}/>
        <input type="Number" placeholder="kms" required
        value={kms}
        onChange={(e)=>setKms(e.target.value)}/>
        <input type="text" placeholder="Description" required
        value={Description}
        onChange={(e)=>setDescription(e.target.value)}/>
       <input type="Number" placeholder="Price" required
        value={price}
        onChange={(e)=>setPrice(e.target.value)}/>
        <button>Add car</button>
     </form>
     </div>
     );
}
 
export default Ad;