import React, { useState, useEffect } from 'react';

import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom';


function SignUp() {
    const [id, setId] = useState('');
    const [passwd, setPasswd] = useState('');
    const [check,setCheck] = useState('')

    const updateId = e => setId(e.target.value);
    const updatePasswd = e => setPasswd(e.target.value);
    let history = useHistory();
    function SignUp1(a){
        history.push(`/signupDetail/${a}`);
    }
   

    return (
        <div class="container" style={{height:"650px"}}>
        <h3 style={{marginTop:"200px",textAlign:"center"}}>가입유형을 선택하세요</h3>
        <div class="FlexRow_c" style={{height:"300px"}}>
            <Link to="/signupDetail/1">
            <div class="borderBox FlexRow_c" style={{backgroundColor: "white",width: "300px", height: "200px",marginRight:"15px"}}>성직자</div>
            </Link>
            <Link to="/signupDetail/2">
            <div class="borderBox FlexRow_c" style={{backgroundColor: "white",width: "300px", height: "200px",marginRight:"15px"}}>교사</div>
            </Link>
            <Link to="/signupDetail/3">
            <div class="borderBox FlexRow_c" style={{backgroundColor: "white",width: "300px", height: "200px",marginRight:"15px"}}>학생</div>
            </Link>
            <Link to="/signupDetail/4">
            <div class="borderBox FlexRow_c" style={{backgroundColor: "white",width: "300px", height: "200px",marginRight:"15px"}}>학부모</div>
            </Link>
            <Link to="/signupDetail/5">
            <div class="borderBox FlexRow_c" style={{backgroundColor: "white",width: "300px", height: "200px"}}>일반</div>
            </Link>
        </div>
        </div>
    );
  }


  export default SignUp;  