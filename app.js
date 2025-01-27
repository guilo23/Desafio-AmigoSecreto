let amigos = [];
let limitedeAmigos = 10;
let amigo = document.getElementById('amigo');
function adicionarAmigo(){
    if(amigos.length >=limitedeAmigos){
        alert("Voce já tem amigos demais")
        return;
    }
    let ul = document.getElementById("listaAmigos");
    if(amigo == null || amigo.value == ""){
        alert("Digite um nome")
        return;
    }
    if(amigos.includes(amigo.value)){
        alert("esse amigo já foi adicionado")
        return;
    }
    amigos.push(amigo.value);
    let li = document.createElement("li");
    li.textContent = amigo.value;
    ul.appendChild(li);
    limparCampo();

}

function sortearAmigo() {
    let resul = document.getElementById('resultado')
    resul.innerHTML = '';
    if(amigos.length == 0){
        alert("Adicione amigos")
        return;
    }
    let amigoSorteado = amigos[parseInt(Math.random() * amigos.length)];
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';   
    let li = document.createElement("li");
    li.textContent = "O Amigo sorteado foi: " + amigoSorteado;
    resul.appendChild(li);
}
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}
