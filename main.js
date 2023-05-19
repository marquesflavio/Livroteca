const botaoLua = document.querySelector('.fa-moon')

botaoLua.addEventListener('click', () => {
    alert('clicou')
})

function pesquisaLivro(){
    let input = document.querySelector('.search').value
    console.log(input)
    input=input.toLowerCase(); // Para não haver diferenciação da forma escrita
    let x = document.getElementsByClassName('livros-estante')
    console.log(x)

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }

}

pesquisaLivro()
