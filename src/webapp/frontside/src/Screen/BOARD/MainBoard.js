import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../resources/Css/Mainboard.css';
import DetailPopup from './DetailPopup';
import axios,{ post } from 'axios';
import { Button,InputGroup ,FormControl  } from 'react-bootstrap';
import { IoHeart,IoSend,IoChatbubbleEllipsesOutline,IoEllipsisVerticalSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';
function Home() {
 
    
    const [dropdown, setDropdown] = useState({check:false,boardnum:0});
    const [modal,setModal] = useState('')
    const [boardInfo,setBoardInfo] = useState([])
    const [fileLink,setFileLink] = useState([])
    const [getitem,setGetitem] = useState([])
    const slideImages = [
        '/image/prist.png',
        '/image/guest.png',
        '/image/parents.png'
      ];
    useEffect(
      async() => {
        await axios(
          {
            url: 'http://localhost:8080/board/getBoard.do',
            method: 'post',
            data: {
            
            } , 
            baseURL: 'http://localhost:8080',
            //withCredentials: true,
          }
        ).then(function (response) {
          setBoardInfo(response.data.JavaData)
          console.log(boardInfo)
        });
     
      }, []
    );
    const modalSend = (item) => {
      
      setFileLink(item.FILENAME.split(","))
      console.log(fileLink)
      setModal('1')
      setGetitem(item)
    }
    const LikeBoard = (BoardNum,flag,index) => {
      let newboardInfo = [...boardInfo]; 
      
      axios(
        {
          url: '/board/LikeBoard.do',
          method: 'post',
          data: {
            BoardNum:BoardNum,
            flag:flag
          } , 
          baseURL: 'http://localhost:8080',
          //withCredentials: true,
        }
      ).then(function (response) {
       if(response.data.JavaData == 1){
          if(flag == 1){
            newboardInfo[index].LIKECHECK = 1
            newboardInfo[index].LIKECNT2 = newboardInfo[index].LIKECNT2 + 1
            setBoardInfo(newboardInfo)
          }
          if(flag == 2){
            newboardInfo[index].LIKECHECK = null
            newboardInfo[index].LIKECNT2 = newboardInfo[index].LIKECNT2 - 1
            setBoardInfo(newboardInfo)
          }
       }else if(response.data.JavaData == 0){

       }
      });
    }
    const sendReply = (boardnum,refNum) =>{
      console.log(boardnum,refNum)
      var ReplyContext = document.getElementById(`replyinput${boardnum}`).value;
     
       axios(
        {
          url: '/board/WriteReply.do',
          method: 'post',
          data: {
            BoardNum:boardnum,
            ReplyContext:ReplyContext,
            refNum:refNum
          } , 
          baseURL: 'http://localhost:8080',
          //withCredentials: true,
        }
      ).then(function (response) {
       if(response.data.JavaData == 1){
        
       }else if(response.data.JavaData == 0){

       }
      });
    }
    function menuDropdown(num){
      console.log(boardInfo)
      if(dropdown.boardnum != num){
        setDropdown({check:true,boardnum:num})
      }else{
        setDropdown({check:!dropdown.check,boardnum:0})
      }
     
    }
    return (
      
      <header className="App-header">
      
          <div class="FlexCol_c" style={{backgroundColor:"#f2f2f2"}}>
          {modal == "1" ?  <DetailPopup setModal={setModal} getitem={getitem} setBoardInfo={setBoardInfo} boardInfo={boardInfo} /> : ''}
          {boardInfo.map((item,index)=> {
           
            return (
              <div class="borderBox" style={{margin:"10px 0px 50px 0px",width:"800px",height:"870px",backgroundColor:"white"}}>
              <div class="borderBox_b FlexRow_ac" style={{width:"100%",height:"50px",justifyContent:"space-between"}}>
                  <div style={{marginLeft:"5px"}}>
                    <span>
                    <img src="/image/prist.png" class="borderBox" style={{width:"50px",height:"40px",borderRadius:"50%"}}/>
                    </span>
                    <span style={{paddingLeft:"10px",fontWeight:"bold"}}>{item.USERID}</span>
                  </div>
                  <div style={{marginRight:"5px"}}>
                    <IoEllipsisVerticalSharp style={{fontSize:"30px",position:"relative",top:"40px",left:"60px"}} onClick={() => menuDropdown(item)}/>
                    {dropdown.check == true&&dropdown.boardnum==item ?  
                    <div class="borderBox" style={{position:"relative",backgroundColor:"white",width:"140px",zIndex:"10",top:"40px",left:"70px"}}>
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                    : <div class="dropHidden borderBox" style={{position:"relative",backgroundColor:"white",width:"140px",zIndex:"999"}}>
                      <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                      </ul>
                    </div>
                      
                      }
                   
                   
                  </div>
              </div>
              <div class="borderBox_b" style={{width:"100%",height:"550px"}} >
              <Carousel interval={null}>

  {
   item.FILENAME.split(",").map((link) => {
      return (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/image/saveFolder/"+link}
          style={{width:"100%",height:"550px"}}
        />
      </Carousel.Item>
      )
    })
  }
   
  </Carousel>
              </div>
              <div class="FlexRow" style={{width:"100%",height:"40px",paddingLeft:"10px"}}>
                <div class="FlexRow_ac">
                  <span style={{marginRight:"5px"}}>
                    {item.LIKECHECK ? 
                    <IoHeart  style={{color:"red",fontSize:"30px"}} onClick={() => LikeBoard(item.BoardNum,'2',index)}/> : 
                    <IoHeart  style={{color:"black",fontSize:"30px"}} onClick={() => LikeBoard(item.BoardNum,'1',index)}/>}
                   
                   
                    
                  </span>
                  <span style={{marginRight:"5px"}}><IoChatbubbleEllipsesOutline style={{fontSize:"30px"}} onClick={() => modalSend(item)}/></span>
                  <span style={{marginRight:"5px"}}><IoSend style={{fontSize:"30px"}}/></span>
                </div>
              </div> 
              <div class="borderBox_b FlexRow_ac" style={{width:"100%",height:"30px",paddingLeft:"10px"}}>
               {
                 item.LIKECNT2 > 0 ? `좋아요 ${item.LIKECNT2} 개` : ''
               }
              </div>
              <div class="borderBox_b" style={{width:"100%",height:"100px",textAlign:"left",paddingLeft:"10px"}}>
                <span style={{margin:"0px",fontWeight:"bold",paddingRight:"10px"}}>USERID</span>
                {
                   item.tag.split(",").map((tag)=>{
                     return( <span class="tag">{tag}</span>)
                   })
                }
               
                <p>text</p>
              </div>
              <div  style={{width:"100%",height:"100px"}}>
                <div  style={{width:"100%",height:"60%",textAlign:"left",paddingLeft:"10px"}}>
                  <span  onClick={() => modalSend(item)}>댓글 {item.REPLYCNT}개 더보기...</span>
                </div>
                <InputGroup className="mb-3">
                  <FormControl id={"replyinput"+item.BoardNum} />
                <InputGroup.Append>
                  <Button variant="outline-secondary" onClick={() => sendReply(item.BoardNum,0)}>Button</Button>
                </InputGroup.Append>
                </InputGroup>
              </div>
           </div>

            )
          })}
 
         </div>
         <Link to="/WriteMain">
         <div style={{position:"fixed",width:"90px",height:"90px",border:"1px solid black",bottom:"100px",right:"30px"}}>글쓰기</div>
         </Link>
      </header>
    );
  }
  

  export default Home;  