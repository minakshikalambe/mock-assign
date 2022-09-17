import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
const CarDetails = () => {
    const{id}=useParams();
    const navigate=useNavigate()
    const[data,setData]=useState()
    useEffect(()=>{
        axios.get(`http://localhost:8080/cars/${id}`).then((data1)=>{
            setData(data1.data)
        })
    },[])
    const handleClick=async()=>{
        await fetch( "http://localhost:8080/cars/"+data.id,{
            method:"DELETE"
        }).then(()=>{
         navigate("/")
        })
    }
    return (  
       <div>
        {
            data && (
                <article>
                    <h2>{data.brand}</h2>
                    <p>Written by {data.type}</p>
                    <p>{data.year}</p>
                    <p>{data.kms}</p>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )
        }
       </div>
    );
}
 
export default CarDetails;