/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.login;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.*;

/**
 *
 * @author Admin
 */

public class LoginServlet2 extends HttpServlet {

    // Database credentials
    private static final String DB_URL = "jdbc:mysql://localhost:3306/gowt";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "password"; // Replace with your DB password

    // JDBC objects
    private Connection conn;
    private PreparedStatement pst;
    private ResultSet rs;

    public void init() {
        // Initialize the database connection
        try {
            Class.forName("com.mysql.cj.jdbc.Driver"); // JDBC driver for MySQL
            conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Get the login credentials from the form
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try {
            // Prepare the SQL query to check if the user exists
            String query = "SELECT * FROM users WHERE username = ? AND password = ?";
            pst = conn.prepareStatement(query);
            pst.setString(1, username);
            pst.setString(2, password);
            
            rs = pst.executeQuery();

            if (rs.next()) {
                // Successful login
                response.sendRedirect("success.jsp");
            } else {
                // Invalid login
                response.sendRedirect("failure.jsp");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                if (rs != null) rs.close();
                if (pst != null) pst.close();
                if (conn != null) conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void destroy() {
        // Cleanup resources
        try {
            if (rs != null) rs.close();
            if (pst != null) pst.close();
            if (conn != null) conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
