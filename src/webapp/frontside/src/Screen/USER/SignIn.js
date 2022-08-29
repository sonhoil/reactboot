import React, { useState, useEffect } from 'react';

import '../../resources/Css/materialdesignicons.css';
import LoginAxios from '../../Axios/LoginAxios';
import {useHistory} from "react-router-dom"
import {Link} from 'react-router-dom';
import EcoIcon from "@material-ui/icons/Eco";
import '../../resources/Css/common.css';
import '../../resources/Css/commonUse.css';
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
        <div class="wrap">

			<div class="login_container">

				<div class="login_bg">
					<div class="logo"><img src="#" alt="KMAC" /></div>
				</div>
				
				<div class="login_inner">
					<div class="login_contents">
						<p class="h1">Log In</p>
						<p class="login_info_text">KMAC 통합 인트라넷은 Value Creation의 원천인 우리의 핵심 자산입니다.<br/>통합 인트라넷을 통한 구성원 개개인의 지식활동은 KMAC의 경쟁력입니다.</p>
						<form name="loginform" action="j_acegi_security_check;jsessionid=94D67B5B71E1AC2BB8615BC9023C3611" method="POST" onsubmit="return login();"> 
							<div class="form_box">
								<div>
									<label for="userId"></label>
									<input type="hidden" name="agentInfo"/>
									<input type="text" title="아이디 입력" name="j_username" id="j_username" placeholder="ID" onkeypress="if(event.keyCode == 13){ login(); }" style={{border:"0px"}} />
									<button type="button"><i class="mdi mdi-account-outline"></i></button>
								</div>
							</div>
							<div class="form_box">
								<div>
									<label for="userPassword"></label>
									<input type="password" name="j_password" id="j_password" placeholder="Password" onkeypress="if(event.keyCode == 13){ login(); }"  style={{border:"0px"}}/>
									<button type="button"><i class="mdi mdi-lock-outline"></i></button>
								</div>
							</div>
							<div class="pass_check">
							 	<input type="checkbox" class="btn_check" ch="" name="_acegi_security_remember_me" id="_acegi_security_remember_me" checked="checked"/>
							 	<label for="_acegi_security_remember_me"></label><p>&nbsp; Don't ask for my password for two weeks</p>
							</div>
						</form>
						
						<br/>
						<div class="a-both">
							<button type="button" class="btn btn_blue" onclick="login();">Login</button>
							<a href="javascript:f_search('P');" class="d-line">비밀번호 찾기</a>
						</div>

						<div id="pop_pwSearch" class="popup_layer">
							<div class="popup_inner">								
								<button type="button" class="btn-close" onclick="javascript:layer_close('pop_pwSearch');" title="닫기"><i class="mdi mdi-close"></i></button>
								<div class="popup_contents">
									<p class="h1">비밀번호 찾기</p>
									<p class="popup_text">가입 시 입력한 <span>휴대 전화 번호</span>를 입력하시면<br/>인증코드를 전송해 드립니다.</p>
									<div class="form_box">
										<div>
											<label for="userPhone"></label>
											<input type="text" name="userPhone" id="userPhone" title="휴대전화 번호 입력"/>
										</div>
									</div>
									<div class="btn_area">
										<button type="button" class="btn btn_blue" onclick="location.href='javascript:;'">다음</button>
										<button type="button" class="btn btn_grey" onclick="location.href='javascript:;'">취소</button>
									</div>
									<a href="javascript:;" class="d-line">이메일 문의</a>
								</div>
							</div>
						</div>
					

						<div class="copyright">
							<p>copyright © 2021 KMAC All Rights Reserved.<a href="mailto:mailadmin@kmac.co.kr">mailadmin@kmac.co.kr</a></p>
						</div>
					</div>
				</div>
			

			</div>
				

		</div>
    );
  }


  export default About;  