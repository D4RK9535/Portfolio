/*//Função criada chamando o Próprio elemento
function scrollTo (element) {
    //seletor pega o elemento da função e aplicar um movimento suave nele
    document.querySelector(element).scrollIntoView({behavior: "smooth"});
}
//seleciona o ID e adiciona um evento de click chamando a função event
document.querySelector("#xp").addEventListener("click", function (event){
    event.preventDefault();

    scrollTo("#Experiencia");

    console.log ("Deu certo")
});*/

const menuLinks = document.querySelectorAll(".menu a[href^='#']");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => console.log ('esse item foi clicado'));
});

console.log (menuLinks)