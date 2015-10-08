﻿using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for GetEmployeeScheduleDL
/// </summary>
public class GetEmployeeScheduleDL
{
	public DataSet GetEmployeeSchedule(int empId)
	{
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ToString());
        SqlCommand cmd = new SqlCommand("spGetEmployeeSchedule", conn);
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.Add("@empId", empId);
        DataSet ds = new DataSet();
        SqlDataAdapter adapter = new SqlDataAdapter(cmd);
        conn.Open();
        adapter.Fill(ds);
        conn.Close();
        return ds;
	}
}