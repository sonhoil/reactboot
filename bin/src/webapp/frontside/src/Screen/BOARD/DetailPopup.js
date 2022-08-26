import React, { useState, useEffect,useCallback } from 'react';
import { Button,InputGroup ,FormControl  } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
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
        <div class="FlexRow" style={{height:"700px",width:"1200px",backgroundColor:"#f2f2f2",zIndex:"999",top:"100px",left:"500px",position:"fixed",left:"50%",transform:"translateX(-50%)",overflow:"auto"}}>
            <div style={{width:"65%",borderRight:"1px solid black"}}>
            <Carousel interval={null}>
            {
    getitem.FILENAME.split(",").map((link) => {
      return (
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={"/image/saveFolder/"+link}
          style={{width:"100%",height:"700px"}}
        />
      </Carousel.Item>
      )
    })
  }
          </Carousel>
            </div>
            <div style={{width:"35%"}}>
                <div style={{width:"100%",height:"660px",overflow:"auto"}}>
                    <div >
                      {replyinfo.map((item)=>{
                       return(<p style={{textAlign:"left",borderBottom:"1px solid black",margin:"0px"}} ><b>{item.USERID}</b> {item.CONTEXT}</p>)
                      })}
                    </div>
                </div>
            <InputGroup className="mb-3">
                <FormControl id={"replyinput"+getitem.BoardNum} />
              <InputGroup.Append>
               <Button variant="outline-secondary" onClick={() => sendReply(getitem.BoardNum,0)}>Button</Button>
              </InputGroup.Append>
              </InputGroup>
            </div>
        </div>
        <div class="FlexRow_c" onClick={setModal}  style={{width: "100%",height: "100%",opacity:"0.7",zIndex:"100",position:"fixed",top:'0',backgroundColor:'black'}}>
           
        </div>

     </div>
    );
  }


  export default DetailPopup;  

