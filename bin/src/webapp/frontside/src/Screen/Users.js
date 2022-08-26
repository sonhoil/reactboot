import React, { useState, useEffect,useCallback } from 'react';


function Users() {
  const [modal,setModal] = useState('')
  const [popup,setPopup] = useState('')
  function showFollow(check){
   setModal("1")
  }


    return (
      <div style={{width:"60%",margin:"auto",display:"flex",flexDirection:"column"}} >
         {modal == "1" ?<div class="followModal" style={{zIndex:"9999",width:"40%",height:"600px",border:"1px solid black",position:"fixed",backgroundColor:"white",left:"30%",top:"10%"}}><div onClick={()=> setModal('0')}>X</div></div> : ''}
        
        <div style={{display:"flex",height:"400px",width:"80%",margin:"auto"}} >
          <div style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img src={"/image/guest.png"}   style={{width:"250px",height:"245px",borderRadius:"50%",marginBottom:"25px",border:"1px solid black"}}></img>
          </div>
          <div style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <h3>닉네임</h3>
           <div style={{display:"flex",marginTop:"50px"}}>
             <span style={{margin:"5px"}}>
               <div>팔로워</div>
               <div onClick={()=> showFollow('follower')}>11명</div>
             </span>
             <span style={{margin:"5px"}}>
               <div>팔로잉</div>
               <div onClick={()=> showFollow('following')}>11명</div>
             </span>
           </div>
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <div style={{width:"30%",margin:"auto",display:"flex"}}>
            <div style={{width:"50%",border:"1px solid black"}} onClick={()=> setPopup('1')}>1</div>
            <div style={{width:"50%",border:"1px solid black"}} onClick={()=> setPopup('2')}>2</div>
          </div>
          {popup == "1" ?  
          <div style={{marginTop:"30px",display:"grid",gridTemplateColumns: "repeat(3, 1fr)",gridTemplateRows: "repeat(3, 300px)",gap:"0px",justifyItems:"center"}}>
          <div  style={{width:"100%",height:"100%"}}>
            
            <div style={{width:"380px",height:"300px",backgroundColor:"black",position:"absolute",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <h3 style={{color:"white"}}>asd</h3>
            </div>
            
            <img src={"/image/guest.png"} style={{maxWidth:"100%",maxHeight:"100%"}}></img>
             
          </div>
          
          <img src={"/image/teacher.png"} style={{maxWidth:"100%",maxHeight:"100%"}}></img>
          <img src={"/image/parents.png"}  style={{maxWidth:"100%",maxHeight:"100%"}}></img>
          <img src={"/image/guest.png"} style={{width:"100%",height:"100%"}}></img>
          <img src={"/image/guest.png"} style={{width:"100%",height:"100%"}}></img>
          <img src={"/image/guest.png"} style={{width:"100%",height:"100%"}}></img>
          <img src={"/image/guest.png"} style={{width:"100%",height:"100%"}}></img>
          </div>
          :
          <div style={{marginTop:"30px",display:"grid",gridTemplateColumns: "repeat(3, 1fr)",gridTemplateRows: "repeat(3, 300px)",gap:"0px",justifyItems:"center"}}>
          <img src={"/image/guest.png"} style={{maxWidth:"100%",maxHeight:"100%"}}></img>
          <img src={"/image/teacher.png"} style={{maxWidth:"100%",maxHeight:"100%"}}></img>
          <img src={"/image/parents.png"}  style={{maxWidth:"100%",maxHeight:"100%"}}></img>
         
          </div>
          }
        </div>
      </div>
    );
  }


export default Users;  