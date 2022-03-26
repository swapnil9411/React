import React,{useState,forwardRef,useImperativeHandle,useEffect} from "react";

// const Articles= forwardRef((props,ref)=>{
export default function Articles({ articles},ref) {
const [state,setState]=useState([])


useImperativeHandle(ref,()=>({
   
upv:()=>{
    console.log("meaagya")
    setState(articles.sort((a,b)=>{
        return b.upvotes-a.upvotes
    })) 
},

mrc:()=>{
    console.log("mrc",articles.sort((a,b)=>{
        return b.date-a.date
    }))
    setState(articles.sort((a,b)=>{
        return new Date(b.date)- new Date(a.date)
    })) 
}
}))
useEffect(() => {   
   setState()
  }, [state])
    
//     const upv=()=>{
       
      
//     console.log(func())
//    setBool(func())
        
//     }

    // const mrd

  
  return (
    <div className="card w-50 mx-auto">
        {/* <button data-testid="most-recent-link" onClick={()=>upv()} className="small">Most Recent</button> */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((obj) => {
              
             return(
            <tr data-testid="article" key="article-index">
              
              <td data-testid="article-title">{obj.title}</td>
              <td data-testid="article-upvotes">{obj.upvotes}</td>
              <td data-testid="article-date">{obj.date}</td>
            </tr>
             );
          })}
        </tbody>
      </table>

      
    </div>
  );
}
Articles=forwardRef(Articles)
// )
// export default Articles