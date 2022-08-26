import React, { useState, useEffect } from 'react';
import '../../resources/Css/commonUse.css';
import LoginAxios from '../../Axios/LoginAxios';
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom';


function About() {
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [check,setCheck] = useState('')

    const updateId = e => setId(e.target.value);
    const updatePasswd = e => setPasswd(e.target.value);

    let history = useHistory();

    function logIn(){
        console.log(id)
        console.log(passwd)
        LoginAxios('/Login.do', id,passwd,callback);
    }
    function callback(data) {
        console.log(data.JavaData.length)
        if(data.JavaData.length > 0){
            console.log("ok")
            history.push("/users");
        }else{
            alert("아이디 또는 비밀번호가 일치하지 않습니다.")
        }
      }
   

    return (
        <div class="FlexRow" style={{width: "935px",height: "650px",margin:"150px auto 0px"}}>
    
        <div class="FlexCol_ac" style={{width:"50%",height:"100%",margin:"auto"}}>
            <div class="borderBox" style={{backgroundColor:"white",width: "80%",height: "60%",marginBottom: "50px",marginTop: "50px" ,display: "flex",flexDirection: "column", alignItems: "center"}}>
               <h3>신림성모 SNS </h3> 
               <div style={{width:"80%"}}>
                
                        <div class="FlexCol" style={{width:"100%"}}>
                        <input value={id} onChange={updateId} class="borderBox" style={{marginBottom:"10px",height:"35px",backgroundColor: "#FAFAFA"}} />
                        <input  value={passwd} onChange={updatePasswd}  class="borderBox" style={{marginBottom: "10px", height: "35px", backgroundColor: "#FAFAFA"}}/>
                        <button onClick={()=> logIn()} style={{backgroundColor: "#0095f6", border: "1px solid transparent", color: "white", borderRadius: "3px", height: "35px"}}>로그인</button>
                        </div>
                 
                    <div class="hr-sect">또는</div>
                  
                    <div class="FlexRow_c" style={{marginTop: "30px",marginBottom: "30px"}}>
                     <img src="/image/kakao.png" width="30px"/>  <span style={{paddingLeft: "10px"}}>카카오 로그인</span>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <h5>아이디 | 비밀번호 찾기</h5>
                    </div>
               
               </div>
            </div>
            <div class="FlexRow_c borderBox" style={{backgroundColor: "white",width: "80%", height: "10%"}}>
                <span>첫 방문인가요? </span>&nbsp;  <Link to="/signup"><span style={{fontWeight: "bold", color: "#0095f6", textDecoration: "none"}}>가입하기</span></Link>
            </div>
        </div>
    </div>
    );
  }


  export default About;  