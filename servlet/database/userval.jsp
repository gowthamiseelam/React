<%-- 
    Document   : userval
    Created on : 19 Nov, 2024, 10:09:07 AM
    Author     : ADMIN
--%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
    </head>
    <body>
        <h1>Login Here!</h1>
       
        <%
        String usn=request.getParameter("username");
        String pw=request.getParameter("password");
        Class.forName("com.mysql.jdbc.Driver");
        Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/gowt","root","password");
        Statement st=con.createStatement();
        ResultSet rs=st.executeQuery("select * from stud where username='"+usn+"'");
        if(rs.next()){
            String getpw=rs.getString(2);
            if(getpw.equals(pw)){
                response.sendRedirect("success.jsp");
            }
            else{
                
                response.sendRedirect("failure.jsp");//INDEX.HTML
            }
        }
        else{
            request.getRequestDispatcher("valid.jsp").forward(request,response);
        }
        
        %>
    </body>
</html>