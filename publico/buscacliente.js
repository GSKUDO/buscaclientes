let clientes = [];
let tabela = [];

function carregarcliente() {
    fetch('/users')
    .then(resposta => resposta.text())
    .then(texto => {
        clientes = texto
    })
    console.log("clientes" + clientes)

    let comparativo = document.getElementById("campobusca").value;
    
    clientes.forEach((elemento, indice)=> {
        if (clientes[indice].includes(comparativo)) {
            tabela.push({
                'indice': clientes[indice].id,
                'nome': clientes[indice].name,
                'email': clientes[indice].email
            });
        }
        return `<tr>
        <td>${indice}</td>
        <td>${nome}</td>
        <td>${email}</td>
        </tr>`;
    });
    document.querySelector("#tblista tbody").innerHTML = tabela.join("");
}
