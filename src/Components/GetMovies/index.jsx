import React ,{useEffect, useState}from "react";
import  { getMovies } from "../../Utils/utilities";
import ImageContainer from "../../Atoms/ImageContainer";
import './style.css'


const GetMovies =()=>{
    const[movies, setMovies]= useState([]);
    const [loading, setLoading]= useState(false)
    useEffect(()=>{
        (async()=>{
            setLoading(true)
            const movies= await getMovies();
            console.log({movies});
            setLoading(false);
            setMovies(movies.results);
        })();
    },[]);
    if (loading){
        return<h1>Loading movies...</h1>
    }
 return(
    <div className="container">
        {movies && !loading && movies.length>0 && movies.map((item)=>(
        
                <ImageContainer props={item}/>
        
        ))}
        {movies && !loading && movies.length === 0 && (<h1>No movies found</h1>)}
    </div>
 )
}
export default GetMovies;