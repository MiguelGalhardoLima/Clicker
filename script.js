var container = document.getElementById("count");
var botaoMais = document.getElementById("buttonId");
var botaoMenos = document.getElementById("buttonIdMinus");
var count = 0;
var valor = document.createElement("p");
valor.textContent = count.toString();
container === null || container === void 0 ? void 0 : container.appendChild(valor);
var custo = 100;
var custoP = document.getElementById("custo");
custoP.textContent = custo.toString();
var maisClick = +1;
var plusClickP = document.getElementById("plusClick");
plusClickP.textContent = maisClick.toString();
botaoMenos === null || botaoMenos === void 0 ? void 0 : botaoMenos.addEventListener("click", function () {
    console.log("fui clicado, sou menos");
    if (count >= custo) {
        count -= custo;
        custo += 20;
        maisClick += 1;
        plusClickP.textContent = maisClick.toString();
        custoP.textContent = custo.toString();
        valor.textContent = count.toString();
    }
    else {
        botaoMenos === null || botaoMenos === void 0 ? void 0 : botaoMenos.setAttribute("disabled", "true");
    }
});
botaoMais === null || botaoMais === void 0 ? void 0 : botaoMais.addEventListener("click", function () {
    console.log("fui clicado");
    count += maisClick;
    valor.textContent = count.toString();
    if (count < custo) {
        botaoMenos === null || botaoMenos === void 0 ? void 0 : botaoMenos.setAttribute("disabled", "true");
    }
    else {
        botaoMenos === null || botaoMenos === void 0 ? void 0 : botaoMenos.removeAttribute("disabled");
    }
});
