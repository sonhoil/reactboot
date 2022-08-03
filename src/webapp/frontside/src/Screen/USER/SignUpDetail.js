import React, { useState, useEffect,useCallback } from 'react';
import '../../resources/Css/InputDesign.css';
import "react-datepicker/dist/react-datepicker.css";
import SignUpAxios from '../../Axios/SignUpAxios';
import IdCheckAxios from '../../Axios/IdcheckAxios';
import Popup from './Popup';
import {useHistory} from "react-router-dom"
import DatePicker  from "react-datepicker";
import {Link} from 'react-router-dom';
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import axios from 'axios'; // 액시오스

function SignUpDetail(props) {
    let history = useHistory();  
    const [classify,setClassify] = useState(props.match.params.classify)
    const [id, setId] = useState('');
    const [idMsg, setIdMsg] = useState('');
   

    const [passwd, setPasswd] = useState('');
    const [passwd2, setPasswd2] = useState('');
    const [name, setName] = useState('');
    const [churchname, setChurchname] = useState('');
 //   const [birth, setBirth] = useState('');
    const [cbirth, setCbirth] = useState('');
 //   const [assign, setAssign] = useState('');
    const [phone, setPhone] = useState('010');
    const [BirthDate, setBirthDate] = useState(new Date());
   // const [CBirthDate, setCBirthDate] = useState('');
    const [ChurchAllList, setChurchAllList] = useState([]);
    const [ChurchList, setChurchList] = useState([]);
    const [NowArea,setNowArea] = useState('기타');
    const [assign,setAssign] = useState('');
    const [modal,setModal] = useState('')


    var checkNumber = /^[0-9]*$/;
    var checkID = /^[A-Za-z0-9+]*$/;
    var phoneRule = /^\d{3}-\d{3,4}-\d{4}$/;
    var passRule = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,16}$/;
    var idcheck = 0

    const updateId = (e) => {
      if(!checkID.test(e.target.value) && !''){
        setIdMsg("아이디는 숫자와 영어만 입력 가능합니다.")
        setId('')
        return false
      }else if(e.target.value.length < 5){
        setIdMsg("아이디는 5글자 이상으로 입력해주세요.")
      }else{
        setIdMsg('')
      }  
      setId(e.target.value)
    };
    const updatePasswd = (e) => {
      setPasswd(e.target.value)
      if(!passRule.test(e.target.value)){
        setIdMsg("비밀번호는 8~16 길이, 영문,숫자,특부문자를 포함하여 구성하세요")
      }else{
        setIdMsg("사용 가능한 비밀번호 입니다.")
      }
     
    
    };
    const updatePasswd2 = (e) => { 
      setPasswd2(e.target.value)
      if(passwd == e.target.value){
        setIdMsg("비밀번호가 일치합니다.")
      
      }else{
        setIdMsg("비밀번호가 일치하지 않습니다.")
      }
     
    };
    const updateName = e => setName(e.target.value);
    const updateChurchname = useCallback((value) => {
      console.log(value)
      setChurchname(value.Cname);
      setCbirth(value.birth)
    }, []);  
//  const updateBirth = e => setBirth(e.target.value);
    const updateCbirth = e => setCbirth(e.target.value);
  //  const updateAssign = e => setAssign(e.target.value);

    const updatePhone = (e) => {
        if(!checkNumber.test(e.target.value) && !''){
          setIdMsg("전화번호는 숫자만 입력 가능합니다.")
          setPhone('010')
          return false
        }else{
          setIdMsg('')
        }
        setPhone(e.target.value)
      };
    
    const updateChurchArea = (e) => {
      console.log(e.target.value)
      setNowArea(e.target.value)
      churchList(e.target.value)
    }

    const updateAssign = (e) => {
      setAssign(e.target.value)
    }
    useEffect(
      async() => {
       await axios(
          {
            url: '/common/churchAreaList.do',
            method: 'post',
            data: {
             
            } , 
            baseURL: 'http://localhost:8080',
            //withCredentials: true,
          }
        ).then(function (response) {
          callback3(response.data);
        });
      }, []
    );  
    const churchList= (area) => {
     axios(
        {
          url: '/common/churchList.do',
          method: 'post',
          data: {
           area:area
          } , 
          baseURL: 'http://localhost:8080',
          //withCredentials: true,
        }
      ).then(function (response) {
        callback4(response.data)
      });
    }

  function range(start,end,plus){
    var years = []
    for(let i = start;i<=end;i++){
      years.push(i)
    }
    return years
  }
  function BirthCalendar() {
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ];
    return (
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={BirthDate}
        onChange={(date) =>{ setBirthDate(date)}}
      />
    );
  };
  
    function IdCheck(){
      IdCheckAxios('/IdCheck.do',id,callback2);
    }
    function signup(){
        if((idMsg.length > 0 && idMsg != "비밀번호가 일치합니다." && idMsg != "시용 가능한 아이디 입니다.")){
          alert("아이디 또는 비밀번호를 확인해주세요")
           
        }else if(idcheck ==0){
          alert("아이디 중복 체크를 해주세요")
        }else if(name.length < 1){
          alert("이름을 입력하세요")
           
        }else{
          SignUpAxios('/SignUp.do', id,passwd,name,churchname,BirthDate,cbirth,assign,phone,classify,callback);
         // history.push("/SignIn");
        }
       
    }

 

    function callback(data) {
        console.log(data)
      }
    function callback2(data) {
      if(id.length<5 || id.length>12){
        setIdMsg("아이디의 길이는 5자 이상 12자 미만이어야 합니다.")
        return false
      }
      
        if(data.JavaData.length > 0){
          setIdMsg("중복된 아이디 입니다.")
          idcheck = 0
        }else{
          setIdMsg("시용 가능한 아이디 입니다.")
          idcheck = 1
        } 
      }
    function callback3(data){
      setChurchAllList(data.JavaData)
      churchList(NowArea)
    }
    function callback4(data){
      setChurchList(data.JavaData)
    }

    function pageReturn(){
      var image =""
      var title =""
      if(classify == 1){
      image = "/image/prist.png"
      title ="성직자"
    }else if(classify == 2){
      image = "/image/teacher.png"
      title ="선생님"
    }else if(classify == 3){
      image = "/image/student.png"
      title ="학생"
    }else if(classify == 4){
      image = "/image/parents.png"
      title ="학부모"
    }else if(classify == 5){
      image = "/image/guest.png"
      title ="일반"
    }

        return(
<div class="login-box" style={{margin:"auto",position:"absolute",left:"50%",transform:"translateX(-50%)"}}>
  <h2>{title} 회원가입</h2>
  <img src={image}   style={{width:"250px",height:"245px",padding:"10px",borderRadius:"50%",marginBottom:"25px"}}></img>
  <h5 style={{color:"red",marginTop:"0px",paddingBottom:"10px"}}>{idMsg}</h5>

    <div class="user-box">
      <input type="text" value={id} onChange={updateId} />
      <label>아이디 </label>
      <span class="borderBox" onClick={()=> IdCheck()} style={{position:"absolute",top:"-23px",right:"180px",marginLeft:"15px",backgroundColor:"black",color:"white",padding:"2px",fontSize:"12px",cursor:"pointer"}}>중복 확인하기</span>
    </div>
    <div class="user-box">
      <input type="password" placeholder="8~16자리의 영어와 숫자, 특수문자를 결합" value={passwd} onChange={updatePasswd}/>
      <label>비밀번호</label>
    </div>
    <div class="user-box">
      <input type="password" placeholder="8~16자리의 영어와 숫자, 특수문자를 결합" value={passwd2} onChange={updatePasswd2}/>
      <label>비밀번호 확인</label>
    </div>
    <div class="user-box">
      <input type="text" value={name} onChange={updateName}/>
      <label>이름</label>
    </div>
    <div class="user-box">
      <input type="text" placeholder="세례명"  value={churchname} onClick={() => setModal("1")} onChange={updateChurchname} style={{width:"49%"}} readOnly/>
      <span> </span>
      <input type="text" placeholder="축일"  value={cbirth} onChange={updateCbirth} style={{width:"49%"}} readOnly/>
      <label>본명</label>
    </div> 
    <div class="user-box" style={{textAlign:'left',fontSize:'12px',fontWeight:'bold'}}>
    <span>생일 </span>
     {BirthCalendar()}
    </div>
   
    <div class="user-box">
     <select class="inputselect" onChange={updateChurchArea}>
     {
     ChurchAllList.map((i)=>{
       return(<option value={i.AREA}>{i.AREA}</option>)
     })}
     <option value="기타">기타</option>
     </select>
   
       
   { NowArea=="기타" ? 
    <input  class="inputselect" placeholder="소속을 입력하세요"  style={{width:"49%"}} onChange={updateAssign}></input>
     :
     <select class="inputselect" onChange={updateAssign}>
     {
     ChurchList.map((i)=>{
       return(<option value={i.CHURCH}>{i.CHURCH}</option>)
     })}
     </select>
    
    }
   
      <label  style={{color:"black"}}>소속</label>
    </div>
    <div class="user-box">
      <input type="text"  value={phone} onChange={updatePhone}/>
      <label>전화번호</label>
    </div>
    <a onClick={()=> signup()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      가입하기
    </a>

</div>
        )
    }

    return (
        <div style={{marginBottom:"150px"}}>
          {modal == "1" ? <Popup setModal={setModal} updateChurchname={updateChurchname} /> : ''}
            {pageReturn()}
        </div>
    );
  }


  export default SignUpDetail;  