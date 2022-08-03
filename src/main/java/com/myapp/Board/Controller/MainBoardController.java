package com.myapp.Board.Controller;

import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.myapp.Board.Service.MainBoardService;

@RestController
@RequestMapping("/board")
public class MainBoardController {
	@Autowired
	private  MainBoardService mainboardservice;
	
	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description 글 작성
	 */
	
	@RequestMapping(value="WriteBoard.do", method=RequestMethod.POST)
	public  Map<String,Object> WriteBoard (HttpServletRequest request,
			@RequestParam(value="file", required=false) MultipartFile[] files
			,@RequestParam(value="tag", required=false) String tag
            ,@RequestParam(value="comment", required=false) String comment) throws SQLException  {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		String FileNames ="";
		System.out.println("paramMap =>"+files[0]);
		System.out.println("paramMap =>"+tag);
		System.out.println("paramMap =>"+comment);
		String filepath = "C:/cookingapp/churchfront/public/image/saveFolder/";
		   for (MultipartFile mf : files) {
			   
	            String originFileName = mf.getOriginalFilename(); // 원본 파일 명
	            long fileSize = mf.getSize(); // 파일 사이즈

	            System.out.println("originFileName : " + originFileName);
	            System.out.println("fileSize : " + fileSize);

	            String safeFile =System.currentTimeMillis() + originFileName;
	            
	            FileNames = FileNames+","+safeFile; 
	            try {
	            	File f1 = new File(filepath+safeFile);
	                mf.transferTo(f1);
	            } catch (IllegalStateException e) {
	                // TODO Auto-generated catch block
	                e.printStackTrace();
	            } catch (IOException e) {
	                // TODO Auto-generated catch block
	                e.printStackTrace();
	            }
	        }
		Map<String, Object> paramMap = new HashMap<String, Object>();
		FileNames = FileNames.substring(1);
		System.out.println("FileNames =>"+ FileNames);
		paramMap.put("comment", comment);
		paramMap.put("FileNames", FileNames);
		paramMap.put("tag", tag);
		resultMap.put("JavaData", mainboardservice.WriteBoard(paramMap));
		return resultMap;
	}
	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description 게시물 목록 가져오기
	 */
	@ResponseBody
	@RequestMapping(value="getBoard.do", method=RequestMethod.POST)
	public  Map<String,Object> getBoard (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		resultMap.put("JavaData", mainboardservice.getBoard(paramMap));
		return resultMap;
	}
	
	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description 게시물 좋아요/좋아요 취소
	 */
	@ResponseBody
	@RequestMapping(value="LikeBoard.do", method=RequestMethod.POST)
	public  Map<String,Object> LikeBoard (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		if(paramMap.get("flag").equals("1")) {
			resultMap.put("JavaData", mainboardservice.LikeBoard(paramMap));
		}else {
			resultMap.put("JavaData", mainboardservice.UnLikeBoard(paramMap));
		}
		
		return resultMap;
	}
	
	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description 댓글 작성
	 */
	@ResponseBody
	@RequestMapping(value="WriteReply.do", method=RequestMethod.POST)
	public  Map<String,Object> WriteReply (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		System.out.println("param =>"+paramMap.get("BoardNum"));
		System.out.println("param =>"+paramMap.get("ReplyContext"));
		System.out.println("param =>"+paramMap.get("refNum"));
		Map<String,Object> resultMap = new HashMap<String,Object>();
		resultMap.put("JavaData", mainboardservice.WriteReply(paramMap));
		return resultMap;
	}
	
	/**
	 * @param requestMap
	 * @return Map<String, Object>
	 * @throws SQLException
	 * @description 댓글정보 가져오기
	 */
	@ResponseBody
	@RequestMapping(value="getReply.do", method=RequestMethod.POST)
	public  Map<String,Object> getReply (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		resultMap.put("JavaData", mainboardservice.getReply(paramMap));
		return resultMap;
	}
}
