package com.myapp.Common.Dao;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.context.annotation.Configuration;

@Configuration("ComboDao")
public interface ComboDao {
	public List<Map<String,Object>> ChurchAreaList (Map<String, Object> paramMap) throws SQLException;
	public List<Map<String,Object>> ChurchList (Map<String, Object> paramMap) throws SQLException;
	public List<Map<String,Object>> ChurchNameSearch (Map<String, Object> paramMap) throws SQLException;
}
