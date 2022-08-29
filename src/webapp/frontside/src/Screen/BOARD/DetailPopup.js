import React, { useState, useEffect,useCallback } from 'react';

import axios,{ post } from 'axios';

function DetailPopup({setModal,fileLink,getitem,setBoardInfo,boardInfo}) {
  
    const [replyinfo,setReplyinfo] = useState([])

  useEffect(
    async() => {
      await   axios(
        {
          url: '/board/getReply.do',
          method: 'post',
          data: {
            BoardNum:getitem.BoardNum,
          } , 
          baseURL: 'http://localhost:8080',
          //withCredentials: true,
        }
      ).then(function (response) {
        console.log(response.data.JavaData)
        setReplyinfo(response.data.JavaData)
      });
   
    }, []
  );

      const sendReply = (boardnum,refNum) =>{
        let newboardInfo = [...boardInfo]; 
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
          setReplyinfo(replyinfo => [...replyinfo, {USERID: "test",BoardNum:boardnum,CONTEXT:ReplyContext,refNum:refNum}]);
          var index = boardInfo.findIndex(obj => obj.BoardNum == boardnum)
          newboardInfo[index].REPLYCNT = newboardInfo[index].REPLYCNT+1
          setBoardInfo(newboardInfo); 
         }else if(response.data.JavaData == 0){
  
         }
        });
      }

    return (
        <div  style={{width:"100%",height:"100%" }}>
   
     </div>
    );
  }


  export default DetailPopup;  

