
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
        
    } else {
        botaoSol.classList.remove('show')
        botaoSol.classList.add('hide')
        botaoLua.classList.add('show')
        
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




 



