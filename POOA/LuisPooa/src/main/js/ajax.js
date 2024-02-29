var campos = document.querySelectorAll(".ajax input");

var btns = document.querySelectorAll(".ajax button");

var resposta = document.querySelector(".ajax h2");

const  callAjax  = (e) => {

    fetch(`http://localhost:8080/segundoAjax?cpValor1=${campos[0].value}&cpValor2=${campos[1].value}&btn=${e.target.value}`, {
        method: "GET"
    }).then(async resp => {
        console.log(resp);
        var r = await resp.text();
        console.log(r);
        resposta.innerHTML = `O resultado é: ${r}`;
        resposta.style.display = "block";
    })
}

btns.forEach(item => item.onclick = callAjax)


