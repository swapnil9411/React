import React, { useState } from "react";

function Slides({ slides }) {
  const [sindex, setIndex] = useState(1);
  let counter = 0;
//   let ary = slide
 
  const restart = () => {
   if(sindex!==1){
       setIndex(1)
   }
  };

  const prev = () => {
    if(sindex!==1){
        setIndex(sindex-1)
    }
    // else if(sindex===1){

    //     setIndex(slides.length)
    //     console.log("me prev",sindex)
    // }
  };

  const next = () => {
   if(sindex!==slides.length){
       console.log(sindex)
       setIndex(sindex + 1)
   }
//    else if(sindex===slides.length){
//        console.log("me aagya")
//        setIndex(1)
//    }
  };


  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={sindex===1?true:false}
          onClick={() => restart()}
        >
          Restart
        </button>
        <button data-testid="button-prev" className="small" disabled={sindex===1?true:false} onClick={() => prev()}>
          Prev
        </button>
        <button data-testid="button-next" className="small" disabled={sindex===slides.length?true:false} onClick={() => next()}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
       {slides.map((obj,index)=>{
           return(
               <>
               
                <h1 data-testid="title">{sindex===index+1?obj.title:""}</h1>
                <p data-testid="text">{sindex===index+1?obj.title:""}</p> 
               </>
           )

                
       })}
              
          
      </div>
    </div>
  );
}

export default Slides;
