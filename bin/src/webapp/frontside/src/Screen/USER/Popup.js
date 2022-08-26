import React, { useState, useEffect,useCallback } from 'react';
import '../../resources/Css/commonUse.css';
import SignUpDetail,{updateChurchname} from './SignUpDetail';
import axios from 'axios'; 

function Popup({setModal,updateChurchname}) {
    const [search,setSearch] = useState('')
    const [result,setResult] = useState([])
    const [click,setClick] = useState({Cname:'',birth:'',identi:''})
    const updateSearch = (e) => {
            setSearch(e.target.value)
            console.log(e.target.value)

            axios(
                {
                  url: '/common/churchNameSearch.do',
                  method: 'post',
                  data: {
                    search:e.target.value
                  } , 
                  baseURL: 'http://localhost:8080',
                  //withCredentials: true,
                }
              ).then(function (response) {
                console.log(response.data)
               setResult(response.data.JavaData)
              });
        };
      
     const Clickcheck = useCallback((Cname,Birth,Identi) => {
  
      setClick({Cname:Cname,birth:Birth,identi:Identi})
      updateChurchname({Cname:Cname,birth:Birth,identi:Identi})
     }, [updateChurchname])  
    return (
        <div  style={{width:"100%",height:"100%" }}>
        <div  style={{height:"400px",width:"500px",backgroundColor:"#f2f2f2",zIndex:"999",top:"300px",left:"500px",position:"fixed",left:"50%",transform:"translateX(-50%)",overflow:"auto"}}>
            <div>
                <h4>세례명 검색</h4>
                <input class="halfinput" onChange={updateSearch}></input>
            </div>
            <div>
                <table style={{width:"100%",margin:"auto"}}>
                 <thead>
                   <tr>
                     <th>세례명</th>
                     <th>축일</th>
                     <th>신분</th>
                   </tr>
                 </thead>
                 <tbody>
                    {
                    result.map((i)=>{
                 
                return(
                  
                    <tr class="select" >
                    <td  class={(click.Cname==i.Cname&&click.birth==i.Birth&&click.identi==i.Identi) ? "Cname check" : "Cname" }onClick={()=>Clickcheck(i.Cname,i.Birth,i.Identi)}>{i.Cname}</td>
                    <td>{i.Birth}</td>
                    <td style={{width:"35%"}}>{i.Identi}</td>
                    </tr>)
                    })}
                 </tbody>
                </table>
            </div>
        </div>
        <div class="FlexRow_c" onClick={setModal}  style={{width: "100%",height: "100%",opacity:"0.7",zIndex:"100",position:"fixed",top:'0',backgroundColor:'black'}}>
       
        </div>

     </div>
    );
  }


  export default Popup;  

