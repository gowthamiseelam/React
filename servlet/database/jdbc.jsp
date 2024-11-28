jdbc.jsp
<%--
    Document   : jdbc
    Created on : 13 Nov, 2024, 2:43:39 PM
    Author     : ADMIN
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Student</title>
    </head>
    <body>
        <h1>Database information</h1>

<%@ page import="java.sql.*" %>
<%
try {
    // Step 1: Loading the MySQL JDBC Driver
    Class.forName("com.mysql.jdbc.Driver"); // Note: Use "com.mysql.cj.jdbc.Driver" for MySQL 8 and above

    // Step 2: Establishing a connection to the database
    Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/gowt", "root", "password");

    // Step 3: Create a statement object to execute SQL queries
    Statement st = con.createStatement();
    String q = "SELECT * FROM student";

    // Step 4: Execute the query and get the result set
    ResultSet rs = st.executeQuery(q);

    // Step 5: Process the result set and display the data
    while (rs.next()) {
        String s1 = rs.getString("name");
        String s2 = rs.getString("dept");
        String s3 = rs.getString("rno");
        out.print("<br>Name: " + s1+" ");
        out.println("<br>Department: " + s2);
        out.println("<br>Id: " + s3);
        out.println();
    }

    // Step 6: Close the connection (optional, but recommended)
    con.close();
} catch (Exception e) {
    e.printStackTrace(); // Print the exception if an error occurs
    out.println("An error occurred: " + e.getMessage());
}
%>
    </body>
</html>