package com.myapp.Board.Service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service("MainBoardService")
public interface MainBoardService {
	List<Map<String,Object>> WriteBoard (Map<String, Object> paramMap) throws SQLException;
	List<Map<String,Object>> getBoard (Map<String, Object> paramMap) throws SQLException;
	int LikeBoard (Map<String, Object> paramMap) throws SQLException;
	int UnLikeBoard (Map<String, Object> paramMap) throws SQLException;
	int WriteReply (Map<String, Object> paramMap) throws SQLException;
	List<Map<String,Object>> getReply (Map<String, Object> paramMap) throws SQLException;
}
