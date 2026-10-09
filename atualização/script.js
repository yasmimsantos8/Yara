// CARRINHO
let carrinho = [];

// PRODUTOS (Padronizado para 'produtos' no plural)
const produtos = [
    {
        nome: "Kit definição natural",
        preco: 229.50,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyBZYqmZLkPmrn_r2TRBfGXAZX9GqEGL0Zg&s",
        categoria: "principais",
    },
    {
        nome: "kit perfumação com 5 Body Splash Xerosa",
        preco: 150.30,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v8372869211055809370/products/33653.jpg&height=940&width=940",
        categoria: "principais",
    },
    {
        nome: "Kit Completo SOS Cachos De Repente Pronta",
        preco: 160.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5155328260216366914/products/32720.jpg&height=940&width=940",
        categoria: "principais"
    },
    {
        nome: "Kit Tratamento e Finalização Cachos Ostentação",
        preco: 148.95,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v883330640618203797/products/33691.jpg&height=940&width=940",
        categoria: "novidades"
    },
    {
        nome: "Kit 2 Cremes para Pentear Cachos de Sereia e Cachos à Prova",
        preco: 75.60,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5125349893167266216/products/33678.jpg&height=940&width=940",
        categoria: "novidades"
    },
    {
        nome: "Duplinha de Kits Xêrosa Body Splash e Creme para Pentear",
        preco: 160.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v1187472468471536226/products/33706.jpg&height=940&width=940",
        categoria: "novidades"        
    },
    {
        nome: "Kit Definição Natural com Mousse e Creme para Pentear",
        preco: 64.35,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v5155328260216366914/products/32720.jpg&height=940&width=940",
        categoria: "maisVendidos"    
    },
    {
        nome: "Kit Completo de Definição Natural + De Repente Pronta",
        preco: 191.70,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v6244206327497156262/products/33408_.jpg&height=940&width=940",
        categoria: "maisVendidos"  
    },
    {
        nome: "Kit Definição Natural com Mousse, Óleo Booster, Máscara e Óleo de Tratamento",
        preco: 106.20,
        imagem: "https://www.salonline.com.br/ccstore/v1/images/?source=/file/v7013296204912457392/products/33728.png&height=940&width=940",
        categoria: "maisVendidos"   
    }   
];

// LOCAL STORAGE
let dados = localStorage.getItem("carrinho");
if (dados) {
    carrinho = JSON.parse(dados);
    atualizarCarrinho();
}

// LIMPAR PRODUTOS DA TELA ANTES DE RE-RENDERIZAR (Usado nos filtros)
function limparProdutos() {
    document.getElementById("principais").innerHTML = "";
    document.getElementById("novidades").innerHTML = "";
    document.getElementById("maisVendidos").innerHTML = "";
}

// CARREGAR PRODUTOS (Versão única aceitando uma lista dinâmica)
function carregarProdutos(listaProdutos = produtos) {
    const principais = document.getElementById("principais");
    const novidades = document.getElementById("novidades");
    const maisVendidos = document.getElementById("maisVendidos");

    listaProdutos.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("produto");

        if (item.preco > 1000) {
            div.style.border = "3px solid red";
        }

        div.innerHTML = `
            <img src="${item.imagem}" class="fotos" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco.toFixed(2)}</p>
            <button onclick="adicionarCarrinho('${item.nome}', ${item.preco})">Adicionar</button>
        `;

        if (item.categoria === "principais") {
            principais.appendChild(div);
        } else if (item.categoria === "novidades") {
            novidades.appendChild(div);
        } else if (item.categoria === "maisVendidos") {
            maisVendidos.appendChild(div);
        }
    });
}

// ADICIONAR AO CARRINHO
function adicionarCarrinho(nome, preco) {
    alert(nome + " foi adicionado ao carrinho!");

    let itemNoCarrinho = carrinho.find(item => item.nome === nome);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++;
    } else {
        carrinho.push({
            nome,
            preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();



}

// REMOVER ITEM
function removerCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// ALTERAR QUANTIDADE
function alterarQuantidade(index, novaQtd) {
    novaQtd = parseInt(novaQtd);
    if (isNaN(novaQtd) || novaQtd <= 0) {
        removerCarrinho(index);
    } else {
        carrinho[index].quantidade = novaQtd;
    }
    atualizarCarrinho();
}

// ATUALIZAR CARRINHO
function atualizarCarrinho() {
    let lista = document.getElementById("listaCarrinho");
    let contador = document.getElementById("contador");
    let totalSpan = document.getElementById("total");

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        let subtotal = item.preco * item.quantidade;
        total += subtotal;

        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.nome}</strong><br>
            R$ ${item.preco.toFixed(2)} x
            <input type="number" min="1" value="${item.quantidade}" onchange="alterarQuantidade(${index}, this.value)">
            = R$ ${subtotal.toFixed(2)}
            <br><br>
            <button onclick="removerCarrinho(${index})">Remover</button>
            <hr>
        `;
        lista.appendChild(li);
    });

    let totalItem = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    contador.innerText = totalItem;
    totalSpan.innerText = total.toFixed(2);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// ABRIR CARRINHO
function abrirCarrinho() {
    document.getElementById("carrinho").style.right = "0";
}

// FECHAR CARRINHO
function fecharCarrinho() {
    document.getElementById("carrinho").style.right = "-300px";
}

// MODO ESCURO  
function modoEscuro() {
    document.body.classList.toggle("dark");
}

// FINALIZAR COMPRA 
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Carrinho vazio");
        return;
    }

    alert("Compra finalizada com sucesso!");
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// PESQUISA PRODUTOS (Corrigido id e propriedade de busca)
document.getElementById("pesquisa").addEventListener("keyup", function () {
    let texto = this.value.toLowerCase();
    let produtoTela = document.querySelectorAll(".produto");

    produtoTela.forEach(produto => {
        let nome = produto.innerText.toLowerCase();
        if (nome.includes(texto)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
});

// ORDENAR MENOR PREÇO
function ordenarMenor() {
    limparProdutos();
    let ordenado = [...produtos];
    ordenado.sort((a, b) => a.preco - b.preco);
    carregarProdutos(ordenado);
}

// ORDENAR MAIOR PREÇO
function ordenarMaior() {
    limparProdutos();
    let ordenado = [...produtos];
    ordenado.sort((a, b) => b.preco - a.preco);
    carregarProdutos(ordenado);
}

// ORDENAR A-Z 
function ordenarAZ() {
    limparProdutos();
    let ordenado = [...produtos];
    ordenado.sort((a, b) => a.nome.localeCompare(b.nome));
    carregarProdutos(ordenado);
}

// INICIAR SISTEMA
carregarProdutos();

// Valor total simulado com base no seu carrinho atual da imagem
let valorTotalCarrinho = 310.50; 

// Função que mostra ou esconde o campo de desconto
function verificarFormaPagamento() {
    const forma = document.getElementById("formaPagamento").value;
    const campoDesconto = document.getElementById("campoDesconto");

    if (forma === "prazo") {
        campoDesconto.style.display = "block"; // Mostra o input de desconto
    } else {
        campoDesconto.style.display = "none";  // Esconde o input de desconto
        document.getElementById("porcentagemDesconto").value = 0; // Reseta o desconto
    }
    
    calcularTotal(); // Recalcula o valor sempre que mudar a opção
}

// Função que calcula o valor com o desconto aplicado
function calcularTotal() {
    const forma = document.getElementById("formaPagamento").value;
    let valorFinal = valorTotalCarrinho;

    if (forma === "prazo") {
        const descontoInput = parseFloat(document.getElementById("porcentagemDesconto").value) || 0;
        
        // Calcula o valor do desconto em cima do total
        const valorDesconto = (valorTotalCarrinho * descontoInput) / 100;
        valorFinal = valorTotalCarrinho - valorDesconto;
    }

    // Atualiza o texto na tela formatado com duas casas decimais
    document.getElementById("valorFinalExibido").innerText = valorFinal.toFixed(2);
    return valorFinal;
}

// Função para finalizar a compra e exibir o alerta
function finalizarCompra() {
    const forma = document.getElementById("formaPagamento").value;
    const valorFinal = calcularTotal(); // Pega o valor atualizado
    
    let mensagem = "";

    if (forma === "vista") {
        mensagem = `Compra finalizada com sucesso!\nForma de pagamento: À Vista\nTotal: R$ ${valorFinal.toFixed(2)}`;
    } else {
        const descontoInput = document.getElementById("porcentagemDesconto").value || 0;
        mensagem = `Compra finalizada com sucesso!\nForma de pagamento: A Prazo\nDesconto aplicado: ${descontoInput}%\nTotal com desconto: R$ ${valorFinal.toFixed(2)}`;
    }

    // Exibe o alerta na tela
    alert(mensagem);
}

// Executa uma vez ao carregar a página para exibir o valor inicial corretamente
window.onload = function() {
    calcularTotal();
};