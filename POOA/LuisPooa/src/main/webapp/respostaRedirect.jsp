
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


          <!-- JSP - JAva Server PAges -->
            <!-- Servlet codigo java que executa html,
                JSP é um códiogo html que executa um código java-->

           <%

            //aqui dentro é java, fora é html

                String v1 = request.getParamter("valor");
                String nome = request.getParamter("nome");
            %>

            <h1>Sr. <% out.print(nome); %> a resposta é <% out.print(v1); %> </h1>

        </div>
    </div>

    <div class="footer">
        <h2>footer</h2>
    </div>
</div>
  <!-- <script src= "../js/script.js"></script> -->

</body>

</html>
