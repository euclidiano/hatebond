


window.onload = function() {
    let button = document.getElementById("calcular");
    button.addEventListener("click", calcularOdio);


}

function calcularOdio(){
    let seuNome = document.getElementById("seu-nome").value;//puxa id do html
    let Pessoa = document.getElementById("pessoa").value;

    if (seuNome != "" && pessoa != "") {
        let percentage = Math.floor(Math.random() * 101); //0-.999999 * 101 > 0- 100.999999
        document.getElementById("resultado").innerText = " A chance de se odiar de " + seuNome + " e " + Pessoa + " é de: "
        document.getElementById("porcentagem").innerText = percentage.toString() + "%"
    }
}

//se a porcentaegm for maior de 80 criar um coisa pras pessoas lutarem

//git status
//git add .
//git commit -m "mudei a altura"
//git push