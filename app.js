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

    // Pegando o elemento <ul> onde vamos adicionar os itens
}

function sortearAmigo() {
    let amigoSorteado = amigos[parseInt(Math.random() * amigos.length)];
    let amigoRemovido = amigos.indexOf(amigoSorteado);
    amigos.splice(amigoRemovido, 1);
    document.getElementById('listaAmigos').innerHTML = '';
    let resul = document.getElementById('resultado')
    let li = document.createElement("li");
    li.textContent = "O Amigo sorteado foi: " + amigoSorteado;
    resul.appendChild(li);
}
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = '';
}
