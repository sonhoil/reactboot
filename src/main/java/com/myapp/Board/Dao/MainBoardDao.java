package com.myapp.Board.Dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Configuration;

@Configuration("MainBoardDao")
public interface MainBoardDao {
	public List<Map<String,Object>> WriteBoard (Map<String, Object> paramMap) throws SQLException;
	public List<Map<String,Object>> getBoard (Map<String, Object> paramMap) throws SQLException;
	public int LikeBoard (Map<String, Object> paramMap) throws SQLException;
	public int UnLikeBoard (Map<String, Object> paramMap) throws SQLException;
	public int WriteReply (Map<String, Object> paramMap) throws SQLException;
	public List<Map<String,Object>> getReply (Map<String, Object> paramMap) throws SQLException;
}
