import React,{ useEffect,useState } from "react";
export default function List() {

    const [api,setApi]=useState([])
    const fetchData=async()=>{
        const url ="https://jsonplaceholder.typicode.com/todos"
        let data = await fetch(url)
        let parseData = await data.json()
        console.log(parseData[0].title)
        setApi(parseData)

    }
    useEffect(()=>{
        fetchData()
    },[])
  return (

    <div>
        {/* {map} */}
      
        {
            api.map((ele)=>{
                return(
                    <ul>
                        <li>{ele.title}</li>
                    </ul>
                )
            })
        }
    </div>
  )
}
