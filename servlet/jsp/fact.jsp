<%-- 
    Document   : fact
    Created on : 22 Nov, 2024, 9:30:23 AM
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
        <h1> Compute Factorial of Number</h1>
        <form method="post">
        <label for="Number"><b>Number: </b> </label>
        <input type="text" name="num" id="num"/>
        <input type="submit" value="Calculate Factorial"/>
        </form>
        <% 
            long fact=1;
            String n=request.getParameter("num");
            if (n!=null && !n.isEmpty()){
                try{
                int num=Integer.parseInt(n);
                if (num==0){
                    fact=1;
                }
                for(int i=1;i<=num;i++){
                    fact=fact*i;
                }    
        %>
        <h2>Factorial of <%=num%> is  <%=fact%> </h2>
        <%
            }catch(NumberFormatException e){
        %>
        <h2> Please Enter Valid Number !!</h2>
        <%
            }
        }
     %>
    </center>
    </body>
</html>
