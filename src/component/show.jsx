import { useState } from "react";
import { useEffect } from "react";
import axios from"axios"
import { Link } from "react-router-dom";
const Car = () => {
    const[data,setData]=useState()
    useEffect(()=>{
        axios.get("http://localhost:8080/cars").then((data1)=>{
            setData(data1.data)
        })
    },[])
    // const handleClick=(id)=>{
    //     fetch( "http://localhost:8080/cars/"+id,{
    //         method:"DELETE"
    //     }).then((data2)=>{
    //         setData(data2)
    //      console.log("deleted")
    //     })
    // }
    console.log(data)
    return ( 
     <div>
        {data && data.map((ele)=>{
          return  <Link key={ele.id} to={`/car/${ele.id}`} ><div  style={{border:"1px solid red"}}>
                <p>{ele.brand}</p>
                <p>{ele.type}</p>
                <p>{ele.year}</p>
                <p>{ele.kms}</p>
                <p>{ele.Description}</p>
                <p>{ele.price}</p>
                {/* <button onClick={()=>handleClick(ele.id)}>Delete</button> */}
            </div>
            </Link>
        })}
     </div>
     );
}
 
export default Car;