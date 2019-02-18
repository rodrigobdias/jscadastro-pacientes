var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTr = document.createElement("td");
    var pesoTr = document.createElement("td");
    var alturaTr = document.createElement("td");
    var gorduraTr = document.createElement("td");
    var imcTr = document.createElement("td");

    nomeTr.textContent = nome;
    pesoTr.textContent = peso;
    alturaTr.textContent = altura;
    gorduraTr.textContent = gordura;
    imcTr.textContent = calculaImc(peso, altura);

    pacienteTr.appendChild(nomeTr);
    pacienteTr.appendChild(pesoTr);
    pacienteTr.appendChild(alturaTr);
    pacienteTr.appendChild(gorduraTr);
    pacienteTr.appendChild(imcTr);  


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});