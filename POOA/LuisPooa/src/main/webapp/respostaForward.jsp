
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Calcular</h1>
    </div>
</div>
    <div class="body">
        <div class="bodyContainer">

           <%
            String nome =request.getParam("nome");

            %>
            <h1>Forward  %> <% out.print(nome); %> </h1>
        </div>
    </div>

    <div class="footer">
        <h2>footer</h2>
    </div>
</div>
  <!-- <script src= "../js/script.js"></script> -->

</body>

</html>
