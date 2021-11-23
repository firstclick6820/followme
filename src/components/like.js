import { useState } from "react";

function LikeButton() {
    const [islike,setislike]=useState(false)
   const change =()=>{
       if(islike==false){
        setislike(!islike)
        document.getElementById("like").className="lar la-heart"
       }else{
           setislike(!islike)
        document.getElementById("like").className="las la-heart"
       }

   }
 
    return (
      <div>
   <i className=" lar la-heart" id="like" style={{fontSize:"26px"}} onClick={()=>change()}></i>
  
  </div>
    );
  }
  
  export default LikeButton;
  