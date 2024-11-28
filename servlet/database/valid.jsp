<%-- 
    Document   : valid.jsp
    Created on : 22 Nov, 2024, 11:52:17 AM
    Author     : Admin
--%>

<%@ page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Login</title>
</head>
<body>
    <h2>User Login</h2>
    <form action="userval.jsp" method="POST">
        <label for="username"><b>Username:</b></label>
        <input type="text" name="username" id="username" required /><br><br>

        <label for="password"><b>Password:</b></label>
        <input type="password" name="password" id="password" required /><br><br>

        <input type="submit" value="Login" />
    </form>
</body>
</html>