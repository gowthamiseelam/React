<%-- 
    Document   : factWithBean
    Created on : 22 Nov, 2024, 10:14:42 AM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Factorial</title>
    </head>
    <body>
    <center>
        <h1>Compute Factorial of Number</h1>
        <form action="factWithBean.jsp">
            <label for="Number"><b>Enter Number: </b></label>
            <input type="text" name="number"/>
            <input type="submit" value="Calculate Factorial"/>
        </form>
        <%
            String n=request.getParameter("number");
            if(n!=null && !n.isEmpty()){
                int number=Integer.parseInt(n);               
        %>
        <jsp:useBean id= "Fact" class= "com.login.Fact" > </jsp:useBean>
       <jsp:setProperty name= "Fact" property = "number" value = "<%=number%>" />
       <jsp:setProperty name="Fact" property="fact" />
                <h1> The factorial of <%=number%> is 
                    <jsp:getProperty name="Fact" property= "fact"/>
                </h1>
        <% 
}
            %>
                    
    </center>
    </body>
</html>
