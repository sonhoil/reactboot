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
								
    </div>
    );
  }


export default LeftStatus;  