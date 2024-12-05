<%-- 
    Document   : viewemp
    Created on : 4 Dec, 2024, 9:22:52 PM
    Author     : GOUTHAMI
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>View Employees</title>
</head>
<body>

<h1>List of Employees</h1>
<table border=“2” width=“70%” cellpadding=“2”>
<tr><th>Employee Id</th><th>Employee Name</th><th>Department
Number</th><th>branch</th><th>Delete</th></tr>
<c:forEach var="emp" items="${empList}">
<tr>
<td>${emp.empId}</td>
<td>${emp.name}</td>
<td>${emp.deptNo}</td>
<td>${emp.branch}</td>

<td><a href="delete.htm">Delete</a></td>
</tr>
</c:forEach>


</table>
<br/>
</body>
</html>