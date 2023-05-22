const botaoLua = document.querySelector('.svg-inline--fa')
console.log(botaoLua)





function pesquisaLivro(){
    let input = document.querySelector('.search').value
    // console.log(input)
    input=input.toLowerCase(); // Para não haver diferenciação da forma escrita
    let x = document.getElementsByClassName('livros-estante')
    // console.log(x)

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
const select = document.querySelector('#marcaLivro')
console.log(select)


function valorDoSelect(){
    let textoDoSelect = select.options[select.selectedIndex]
    let valueDoSelect = textoDoSelect.value;
    console.log(valueDoSelect)

    if (valueDoSelect == "Lido"){
        console.log('mudou pra lido')
        document.querySelector('.container-livros').style.backgroundColor = '#69F595';

    } else if (valueDoSelect == "Lendo"){
        document.querySelector('.container-livros').style.backgroundColor = '#F5EF44';

    } else if (valueDoSelect == "Desejo Ler"){
        document.querySelector('.container-livros').style.backgroundColor = '#9AC4FA'
        
    } else {
        document.querySelector('.container-livros').style.backgroundColor = ''
    }


valorDoSelect()}