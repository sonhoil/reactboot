import React, { useState, useEffect,useCallback } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation 
  } from 'react-router-dom';

function Header() {
    const locationNow = useLocation();

    if (locationNow.pathname === "/SignIn") return null; //특정 페이지에서 안나오도록 처리

    return (
      
        <div class="header">
        <div class="gnb">
          <ul>
            <li>
              <Link to="/SignIn">1차 메뉴 1</Link>
              <div>
                <ul>
                  <li><Link to="/SignIn">2차메뉴</Link></li>
                  <li><Link to="/SignIn">2차메뉴</Link></li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/SignIn">1차 메뉴 2</Link>
            <div>
                <ul>
                  <li><Link to="/SignIn">2차메뉴</Link></li>
                  <li><Link to="/SignIn">2차메뉴</Link></li>
                </ul>
              </div>
            </li>
      
            <li>
              <Link to="/SignIn">1차 메뉴 3</Link>
                  <div>
                <ul>
                   <li>
                   <Link to="/SignIn">2차메뉴</Link>
                      <ul>
                        <li> <Link to="/SignIn">3차메뉴</Link></li>
                      </ul>
                    </li>
                </ul>
                <ul>
                   <li>
                   <Link to="/SignIn">2차메뉴</Link>
                      <ul>
                        <li> <Link to="/SignIn">3차메뉴</Link></li>
                      </ul>
                    </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    
    );
  }


export default Header;  