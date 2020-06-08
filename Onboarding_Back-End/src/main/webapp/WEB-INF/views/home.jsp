<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import="com.*" import="java.util.*, java.util.List" %>
<!DOCTYPE html>

 
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Contact Manager Home</title>
    </head>
    <body>
        <div align="center">
            <h1>Contact List</h1>
            <h3><a href="/newContact">New Contact</a></h3>
            <table border="1">
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
              </tr>
              <c:forEach items="${listClient}" var="client">
                 <tr>
                    <td><c:out value="${ client.nom }"  /></td>
                    <td><c:out value="${ client.prenom }"  /></td>
                    <td><c:out value="${ client.email }"  /></td>
                </tr>
              </c:forEach>             
            </table>
        </div>
    </body>
</html>