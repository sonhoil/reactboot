import React, { useState, useEffect,useCallback } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation 
  } from 'react-router-dom';

function LeftLink() {
    const locationNow = useLocation();

    if (locationNow.pathname === "/SignIn") return null; //특정 페이지에서 안나오도록 처리

    return (
        <div class="link_area">
        <div>
            <ul>
                <li><a href="/" title="HOME"><i class="mdi mdi-home"></i><p>HOME</p></a></li>
                <li><a href="javascript:openConfigWin();" title="마이페이지"><i class="mdi mdi-card-account-details"></i><p>마이페이지</p></a></li>
                <li><a href="javascript:logoff();" title="로그아웃"><i class="mdi mdi-lock-open"></i><p>로그아웃</p></a></li>
            </ul>
        </div>
        <div>
            <ul>
                
                    <li>
                        <a href="javascript:;" title="즐겨찾기"><i class="mdi mdi-star"></i></a>
                        <ul>
                            <li>즐겨찾기를 추가하세요</li>
                        </ul>
                   </li>
                
            </ul>
        </div>
        <div>
            <ul>
                
                <li><a href="javascript:goOnlineBudget('A005003');" title="예산 관리"><i class="mdi mdi-shape-plus"></i><p>예산 관리</p></a></li>
                <li><a href="javascript:openCredit();" title="법인 카드"><i class="mdi mdi-credit-card-outline"></i><p>법인 카드</p></a></li>
                
                <li><a href="javascript:openSchedule();" title="개인 일정"><i class="mdi mdi-calendar-month"></i><p>개인 일정</p></a></li>
                <li><a href="javascript:openEp();" title="비상연락망"><i class="mdi mdi-contacts"></i><p>비상연락망</p></a></li>
            </ul>
        </div>
    </div>  
    );
  }


export default LeftLink;  