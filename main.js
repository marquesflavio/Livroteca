// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    console.log('rolou a pagina')
    document.querySelector(".cabecalho").classList.remove('normal')
    document.querySelector(".cabecalho").classList.add('shrink')
    
} else {
    document.querySelector(".cabecalho").classList.add('normal')
    document.querySelector(".cabecalho").classList.remove('shrink')
    
 }
}
        
/*Avaliação dos livros*/
let estrelas = document.querySelectorAll('icone-estrela')
document.addEventListener('click', function(e){
    let classeEstrela = e.target.classList;
    if(!classeEstrela.contains('ativo')){
        estrelas.forEach(function(item){
            item.classList.remove('ativo')
        
        });
            classeEstrela.add('ativo');
    }
})

/*Barra de Pesquisa*/
function pesquisaLivro(){
    let input = document.querySelector('.search').value

    input=input.toLowerCase(); // Para não haver diferenciação da forma escrita
    let x = document.getElementsByClassName('livros-estante')

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}
pesquisaLivro()

/*Ativar botão dark mode*/
const darkMode = document.querySelector('.darkmode')
darkMode.addEventListener('click', () => {
    botaoLua = document.querySelector('.fa-moon')
    botaoSol = document.querySelector('.fa-sun')
    if (botaoLua.classList.contains("show")){
        botaoLua.classList.remove('show')
        botaoLua.classList.add('hide')
        botaoSol.classList.add('show')

        document.querySelector('.cabecalho').style.backgroundColor = "#0C134F";
        document.querySelector('.cabecalho-hide').style.backgroundColor = "#0C134F";
        document.querySelector('.rodape').style.backgroundColor = "#0C134F";
        document.querySelector('.cabecalho_logo').style.color="lightblue"
        document.querySelector('.cabecalho_logo_hide').style.color="lightblue"
        document.body.style.backgroundColor = "#D4ADFC"
        botaoSol.style.color = "#FFD95A"

    } else {
        botaoSol.classList.remove('show')
        botaoSol.classList.add('hide')
        botaoLua.classList.add('show')
        
        document.querySelector('.cabecalho').style.backgroundColor = "#FFD95A"
        document.querySelector('.cabecalho-hide').style.backgroundColor = "#FFD95A"
        document.querySelector('.rodape').style.backgroundColor = "#FFD95A"
        document.querySelector('.cabecalho_logo').style.color="#4C3D3D"
        document.querySelector('.cabecalho_logo_hide').style.color="#4C3D3D"
        document.body.style.backgroundColor = "#FFF7D4"
    }
})



/*Armazenamento do Estado dos livros com LocalStorage*/
let statusLeitura = document.querySelectorAll('#marcaLivro')
statusLeitura.forEach(function(item){
    item.addEventListener('change', () =>{
        console.log(item.value)
        localStorage.setItem('Leitura', JSON.stringify(item.value));
    })
})




 



