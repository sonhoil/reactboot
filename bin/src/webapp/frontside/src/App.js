import React from 'react';
import './resources/Css/commonUse.css';
import  SignIn from './Screen/USER/SignIn'
import  SignUp from './Screen/USER/SignUp'
import  SignUpDetail from './Screen/USER/SignUpDetail'
import  MainBoard from './Screen/BOARD/MainBoard'
import  Users from './Screen/Users'
import  WriteMain from './Screen/BOARD/WriteMain'
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
        <nav class="borderBox_b">
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
        </nav>

        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/SignUp">
            <SignUp/>
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
    </Router>
  );
}


export default App;