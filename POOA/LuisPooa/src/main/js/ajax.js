// ajax é completamente em JS

var campos = document.querySelectorAll(".ajx input");

var btns = document.querySelectorAll(".ajax button");

console.log(campos);
console.log(btns);

const callAjax = (e) => {


fetch(`http://localhost:8080/segundoAJax?
    cpValor1=${campos[0].value}&cpValor2=${campos[1].value}
    &btn=${e.target.value}`,
{
    method:"GET"

}).then(async resp => {
    //console.log(resp);

     var r = await resp.text(); //devolve a resposta como texto

         // usamos o await e o asyc pois não sabemos quanto tempo vai demorar
     // console.log(r);

     var out = document.querySelector(".ajax h2");

     out.innerHTML = `O resultado é ${r}`;
     out.style.display = `block`;
     campos.forEach(c => c.value = "0")


})

}
btns.forEach(b => b.onclick = callAjax);