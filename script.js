// ---------------- Exercicio 1

var randomNumber = parseInt(Math.random()*100)
var resposta = document.getElementById('resposta');
var resultado = document.getElementById('resultado');

console.log(randomNumber)
function verifica() {
    if (resposta.value == randomNumber) {
        resultado.innerHTML = "Parabéns! Você acertou o número!";
    }else if(resposta.value > randomNumber){
        resultado.innerHTML = "O número informado é MENOR que o número sorteado!"
    }else{
        resultado.innerHTML = "O número informado é MAIOR que o número sorteado!"
    }
}

//---------------- Exercicio 3

var id = 1

function addTask() {

    var text = document.getElementById("textoList");
    var li = document.createElement("li");
    var list = document.getElementById("list");

    li.style.display = "flex";
    li.innerHTML = `
        <input type="checkbox" name="checkbox" id="checkbox-${id}">
        <p class="noChecked" id="text-${id}">${text.value}</p>
    `;
    list.appendChild(li);

    var checkbox = document.getElementById(`checkbox-${id}`);
    var p = document.getElementById(`text-${id}`);

    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            p.classList.remove("noChecked");
            p.classList.add("Checked");
        } else {
            p.classList.remove("Checked");
            p.classList.add("noChecked");
        }
    });

    text.value = "";

    id += 1;

}


//---------------- Exercicio 4

var mago = document.getElementById("mago")
var guerreiro = document.getElementById("guerreiro")
var arqueiro = document.getElementById("arqueiro")

function confirmarEscolha(){
    var imagem = document.getElementById("personagemIMG")

    var personagem = document.querySelector('input[name="personagem"]:checked').value;
    var desc = document.getElementById("descPersonagem")
    
    if (personagem === "mago"){
        desc.innerHTML = "Você escolheu ser um Mago! Prepare-se para lançar feitiços!"
        imagem.src = "https://i.pinimg.com/custom_covers/222x/837247455664887290_1501465000.jpg"
    }else if(personagem === "guerreiro"){
        desc.innerHTML = "Você escolheu ser um Guerreiro! Prepare-se para batalhas épicas!"
        imagem.src = "https://portalamazonia.com/wp-content/uploads/2020/04/guerreiro.jpg"
    }else{
        desc.innerHTML = "Você escolheu ser um Arqueiro! Prepare-se para acertar alvos distantes!"
        imagem.src = "https://mir-s3-cdn-cf.behance.net/projects/404/436f24122083315.Y3JvcCwxMDgwLDg0NCwwLDI1MQ.png"
    }

}





