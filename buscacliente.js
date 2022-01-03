var clientes = [
];

    //cadastra os clientes
    function incluircliente(){
        clientes.push({
            'NomeCliente': document.getElementById("cadastranome").value,
            'EmailCliente': document.getElementById("cadastraemail").value,
        });
        console.log("array de clientes" + clientes);
    }

    function buscarcliente(){
         //mostra os clientes em uma tabela
        var tabela = clientes.map(function(item, indice){
        
            return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.EmailCliente}</td>
                </tr>`;
        });
        
        document.querySelector("#tblista tbody").innerHTML = tabela.join("");
    }


   

