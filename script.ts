const container = document.getElementById("count") as HTMLElement | null;
const botaoMais = document.getElementById("buttonId") as HTMLButtonElement | null;
const botaoMenos = document.getElementById("buttonIdMinus") as HTMLButtonElement | null;

let count: number = 0;

const valor: HTMLParagraphElement = document.createElement("p");
valor.textContent = count.toString();
container?.appendChild(valor);

let custo: number = 100;
const custoP = document.getElementById("custo") as HTMLParagraphElement | null;
custoP!.textContent = custo.toString();

let maisClick: number = +1;
const plusClickP = document.getElementById("plusClick") as HTMLParagraphElement | null;
plusClickP!.textContent = "Contagem de clicks:+" + maisClick.toString();

botaoMenos?.addEventListener("click", () => {
    console.log("fui clicado, sou menos");

    if (count >= custo) {
        count -= custo;
        custo += 20;
        maisClick += 1;
        plusClickP!.textContent = "Contagem de clicks:+" + maisClick.toString();
        custoP!.textContent = custo.toString();
        valor.textContent = count.toString();
    } else {
        botaoMenos?.setAttribute("disabled", "true");
    }
});

function tocarAnimacao(): void {
    const imagemDonut = document.getElementById("imagemDonut") as HTMLElement | null;
    if (!imagemDonut) return;

    imagemDonut.classList.remove("Ativado");

    void imagemDonut.offsetWidth;

    imagemDonut.classList.add("Ativado");

    console.log("Animação ativada");
}

botaoMais?.addEventListener("click", () => {
    console.log("fui clicado");
    count += maisClick;
    valor.textContent = count.toString();

    tocarAnimacao();

    if (count < custo) {
        botaoMenos?.setAttribute("disabled", "true");
    } else {
        botaoMenos?.removeAttribute("disabled");
    }
});
