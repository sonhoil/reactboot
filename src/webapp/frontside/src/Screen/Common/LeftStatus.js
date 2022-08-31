import React, { useState, useEffect,useCallback } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation 
  } from 'react-router-dom';

function LeftStatus() {
    const locationNow = useLocation();

    if (locationNow.pathname === "/SignIn") return null; //특정 페이지에서 안나오도록 처리

    return (
        <div class="status_area">
          <div class="logo"><a href="/"><img src="" alt="" /></a></div>
          <div class="profile"><img src="" alt=""/></div>
          <p class="name">NAME</p>
          <p class="position">DEPT</p>
          <div class="today_date"><p>TODAY (수)</p></div>
          <div id="leftMenuInfo">	
            <div id="leftMenu">
              <div class="data_box_both">
                <div>
                <a href="#">						
                  <p><i class="mdi mdi-email"></i>1</p>
                  <p class="total"><span id="mailCount">3</span><span>건</span></p>
                  </a>
                </div>
                <div>
                <a href="#">			
                  <p><i class="mdi mdi-playlist-edit"></i>2</p>
                  <p class="total"><span id="workCount">0</span><span>건</span></p>
                  </a>
                </div>
              </div>
    
              
              <div class="data_box_both">
                <div>
                <a href="#">										
                  <p><i class="mdi mdi-calendar-weekend"></i>3</p>
                  <p class="total"><span id="wreportCount">0</span><span>건</span></p>
                  </a>
                </div>
                <div>		
                  <a href="#">							
                  <p><i class="mdi mdi-file-chart-outline"></i>4</p>
                  <p class="total"><span id="mreportCount">0</span><span>건</span></p>
                  </a>
                </div>
              </div>
              <div class="data_box_both">
                <div>
                  <a href="#">							
                  <p><i class="mdi mdi-calendar-weekend"></i>5</p>
                  <p class="total"><span id="attachMissingCount">0</span><span>건</span></p>
                  </a>
                </div>
                
              </div>
              
            </div>
				</div>
        <div class="leftMenu" id="0002">
					<ul class="dropdown depth_menu">
					<li class="on">
						<div class="drop_title"><i class="mdi mdi-bulletin-board"></i><a title="메뉴 보이기/숨기기">1</a></div>
						<div class="drop_data sc">
	           <ul>

						  <li><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
					
						</ul>
						</div></li></ul>
				</div>
        <ul class="dropdown">
          <li>
            <div class="drop_title"><i class="mdi mdi-format-list-checks"></i><a href="javascript:;" title="메뉴 목록 보이기/숨기기">2<span>(0)</span></a></div>
            <div class="drop_data sc">
              <ul>
              
                  <li>
                    <p class="schedule">x</p>
                  </li>
                
              </ul>
            </div>
          </li>
        </ul>
        <ul class="dropdown">
          <li>
            <div class="drop_title"><i class="mdi mdi-format-list-checks"></i><a href="javascript:;" title="메뉴 목록 보이기/숨기기">3<span>(0)</span></a></div>
            <div class="drop_data sc">
              <ul>
                
            <li>
              <p class="schedule">x</p>
            </li>
          
              </ul>
            </div>
          </li>
	      </ul>
        </div>
    );
  }


export default LeftStatus;  