import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
   const [content,setContent] = useState([]);
   let [dynamic,setDynamic] = useState([]);
   const [show,setShow]=useState(false)

    useEffect(()=>{
        fetch('/data/data.json')
        .then(res => res.json())
        .then(data=>setContent(data))
    },[])
   
    const Filterstate = (index,str)=>{
        setDynamic(content[index][str])
    }
{console.log('this is dynamic')}
{console.log(dynamic)}
{console.log('this is all data')}
{console.log(content)}
  return (

    <div style={{width:"75%",margin:'0 auto',height:'100%',display:'flex'}}>

       <div style={{marginLeft:'50px ',width:"25%", height:'100vh',boxShadow:'0 0 1px 0 rgb(10,20,30)'}} >

        <div>  
        <ul className="list-group  " >
        <li className="list-group-item"> <span>Settings</span></li>
  <li className="list-group-item"> <span>Mostafa</span></li>
  <li className="list-group-item d-flex justify-content-between align-items-center"> 
  <Link to ="#" className="d-block w-100">Account</Link> <i className="fas fa-chevron-right text-muted "></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100">Privacy and Security</Link><i className="fas fa-chevron-right text-muted "></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100"onClick={()=>Filterstate(4,"Trading")}>Trading</Link><i className="fas fa-chevron-right  text-muted"></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100" onClick={()=>Filterstate(3,"Notification")}>Notification</Link> <i className="fas fa-chevron-right text-muted "></i></li>
</ul>
    </div>

        <div>  
        <ul className="list-group " >
        <li className="list-group-item"> <span>General</span></li>
  <li className="list-group-item d-flex justify-content-between align-items-center"> 
  <Link to ="#" className="d-block w-100">Help Center</Link> <i className="fas fa-chevron-right text-muted "></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100" onClick={()=>Filterstate(2,"features")}>Features</Link> <i className="fas fa-chevron-right text-muted "></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100" onClick={()=>Filterstate(1,"followus")}>Follow Us</Link> <i className="fas fa-chevron-right text-muted "></i></li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
      <Link to ="#" className="d-block w-100" onClick={()=>Filterstate(0,"AboutAce")}>About Ace</Link> <i className="fas fa-chevron-right text-muted "></i></li>
 
</ul>
    </div>

    </div>
    {/* ////////////////////right Dynamic side////////////////// */}

<div style={{width:"65%"}}>
{dynamic.map(i=>(
   
    <ul key={Math.random(10)} className="list-group" style={{borderBottom:"4px solid #ccc"}}>
    
    <li  className="list-group-item"  style={{fontWeight:"500",fontSize:"16px",color:"#50b5ff" }}><span>{i.title}</span></li>
    
   { i.subtitle.length >0 && i.subtitle.map((val) =>(
    <ul className="list-group-item" style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}} >
   <li style={{listStyle:'none',margin:'0px 10px',fontWeight:'600',display:"flex",justifyContent:'space-between'}}>{val.heading}</li>
   <button style={{border:'none',background:'none',outline:'none'}} onClick={()=>setShow(!show)}>{show ? <i className="fas fa-chevron-up"></i>:<i className="fas fa-chevron-down"></i>}</button>


{show ? 
<li style={{listStyle:'none',margin:'10px 20px',lineHeight:'30px'}}>{val.para}</li>
:null}

  </ul>
   ))
    
}
    </ul>
  
))} 
</div>


    </div>
  );
};

export default Settings;
