import React from 'react';

import  SignIn from './Screen/USER/SignIn'
import  SignUp from './Screen/USER/SignUp'
import  SignUpDetail from './Screen/USER/SignUpDetail'
import  MainBoard from './Screen/BOARD/MainBoard'
import  Users from './Screen/Users'
import  WriteMain from './Screen/BOARD/WriteMain'
import  Header from './Screen/Header'
import  LeftLink from './Screen/Common/LeftLink'
import  LeftStatus from './Screen/Common/LeftStatus'
import './resources/Css/common.css';
import './resources/Css/commonUse.css';
import './resources/Css/headerNav.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav class="borderBox_b">
          <ul>
            <li>
              <Link to="/MainBoard">홈</Link>
            </li>
            <li>
              <Link to="/SignIn">로그인</Link>
            </li>
            <li>
              <Link to="/users">사용자</Link>
            </li>
            <li>
              <Link to="/WriteMain">글작성</Link>
            </li>
          </ul>
        </nav> */}
      
     
        <LeftLink/>
        <LeftStatus/>
        <div class="contents_area">
      <Header/>
      
      <div class="contents">
        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
         
          <Route path="/SignUpDetail/:classify"
           render={(props) => (
            <SignUpDetail {...props} isAuthed={true} />
          )}
          >
      
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/MainBoard">
            <MainBoard />
          </Route>
          <Route path="/WriteMain">
            <WriteMain />
          </Route>
          <Route path="/">
            <MainBoard />
          </Route>
         
        </Switch>
          </div>
          </div>
        
      </div>
    </Router>
  );
}


export default App;