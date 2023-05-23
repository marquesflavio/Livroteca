
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

// Função para estilizar o container de acordo com a option de cada livro.
const select = document.querySelectorAll('#marcaLivro')

select.forEach((select) => {
    select.addEventListener('change', function valorDoSelect(){
        console.log(select.value)
        if (select.value == "Lido"){
            let containerLivro = document.querySelectorAll('.container-livros')
            containerLivro.forEach((livro) => {
                livro.style.backgroundColor = '#69F595'; 
            }) 
        
        } else if (select.value == "Lendo"){
            document.querySelector('.container-livros').style.backgroundColor = '#F5EF44';
        
        } else if (select.value == "Desejo Ler"){
            document.querySelector('.container-livros').style.backgroundColor = '#9AC4FA'
            
        } else {
            document.querySelector('.container-livros').style.backgroundColor = ''
        }
    })
})

/*Ativar dark mode*/
const botaoLua = document.querySelector('.darkmode')
botaoLua.addEventListener('click', ()=>{
    if (document.querySelector('fa-solid').classList.contains('show')){
        document.querySelector('fa-solid').classList.add('hide')
        document.querySelector('fa-solid').classList.remove('show')
    }
})

    



 



