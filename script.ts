const container = document.getElementById("count");
const botaoMais = document.getElementById("buttonId") as HTMLButtonElement | null;
const botaoMenos = document.getElementById("buttonIdMinus") as HTMLButtonElement | null;

let count:number = 0;

const valor = document.createElement("p");
valor.textContent = count.toString();
container?.appendChild(valor);

let custo:number = 100;
const custoP = document.getElementById("custo") as HTMLParagraphElement;
custoP.textContent = custo.toString();

let maisClick:number = +1;
const plusClickP = document.getElementById("plusClick") as HTMLParagraphElement;
plusClickP.textContent ="Contagem de clicks:+"+maisClick.toString();



botaoMenos?.addEventListener("click", () =>{
    console.log("fui clicado, sou menos")

    if(count >= custo){
        count -= custo; //subtrai do custo atual
        custo+=20; //adiciona mais custo
        maisClick+=1; //adiciona quantidade de click
       

        plusClickP.textContent ="Contagem de clicks:+"+maisClick.toString();
        custoP.textContent = custo.toString();
        valor.textContent = count.toString();

    }else{
        botaoMenos?.setAttribute("disabled", "true")
    }
})

botaoMais?.addEventListener("click", () => {
    console.log("fui clicado");

    count += maisClick;
    valor.textContent = count.toString();
    
    const imagemDonut = document.getElementById("imagemDonut");
    imagemDonut?.classList.add("Ativado");

    if (count < custo) {
        botaoMenos?.setAttribute("disabled", "true");
    } else {
        botaoMenos?.removeAttribute("disabled");
    }
});