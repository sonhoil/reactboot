package com.myapp.Board.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myapp.Board.Dao.MainBoardDao;
import com.myapp.Common.Dao.ComboDao;

@Service("MainBoardService")
@MapperScan(basePackages="com.myapp.Board.Dao")//탐색할 패키시 설정
public class MainBoardServiceImpl implements MainBoardService {

	@Autowired
	private MainBoardDao MainBoardDao;
	
	@Override
	public List<Map<String, Object>> WriteBoard(Map<String, Object> paramMap) throws SQLException {
		// TODO Auto-generated method stub
		return MainBoardDao.WriteBoard(paramMap);
	}
	@Override
	public List<Map<String, Object>> getBoard(Map<String, Object> paramMap) throws SQLException {
		// TODO Auto-generated method stub
		return MainBoardDao.getBoard(paramMap);
	}
	@Override
	public int LikeBoard(Map<String, Object> paramMap) throws SQLException {
		// TODO Auto-generated method stub
		return MainBoardDao.LikeBoard(paramMap);
	}
	@Override
	public int UnLikeBoard(Map<String, Object> paramMap) throws SQLException {
		// TODO Auto-generated method stub
		return MainBoardDao.UnLikeBoard(paramMap);
	}
	@Override
	public int WriteReply(Map<String, Object> paramMap) throws SQLException {
		// TODO Auto-generated method stub
		return MainBoardDao.WriteReply(paramMap);
	}
	  @Override 
	 public List<Map<String, Object>> getReply(Map<String, Object>paramMap) throws SQLException {
		  // TODO Auto-generated method stub
		  return MainBoardDao.getReply(paramMap); 
	 }
	 
}
