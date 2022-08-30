import React, { useState, useEffect } from 'react';


import '../../resources/Css/Mainboard.css';
import DetailPopup from './DetailPopup';
import axios,{ post } from 'axios';

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
      aa
      </header>
    );
  }
  

  export default Home;  