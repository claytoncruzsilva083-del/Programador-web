document.addEventListener('DOMContentLoaded',() =>{
  // 1. pegar os elementos do HTML que vamos usar
}  const formulario = document. getElementById('meuFormulario');

   const inputNome = document.getElementById('nome');
   const inputEmail = documento.getElementById('email');
   const erroNome = document.getElementById('nomeErro');
   const erroEmail = document.getElementById('emailErro');
   const statusFormulario = document.getElementById('statusFormulario');

    
}
// 

// --- Funçôes Auxiliares para mostrar/esconder erros ---
// Esta funçâo mostra um erro para um campo especifico
function mostrarErro(inputElement, mensagemErroElemento, mensagem){
    inputElement.classList.add('invalido'); // Adiciona a classe 'invalido' para deixar a borda vermelha
    inputElement.classList.remove('valido'); // Remove 'valido' se estiver là
    mensagemErroElemento.textContent = mensagem; // Coloca o texto da mensagem de erro
}

// Esta funçâo limpa  o erro  de um campo especifico
function limparErro(inputElement, mensagemErroElemento) {
    inputElement.classList.remove('invalido'); // Remove a classe ' invalido'
    inputElement.classList.add('valido'); // Adiciona a classe 'valido' para diexar a borda verde
    mensagemErroElemento.textContent = ''; // Limpa o texto da mensagem de erro

  document.addEventListener('DOMContentLoaded', () => {
     function mostrarErro(inputElemento, mensagemErroElemento, MENSAGEM) {
       // para deixar a borda vermelha 
       inputElement.classList.remove('valido'); // Remove 'valido' se estiver là
       mensagemErroElemento.textContent = mensagem; // Coloca o texto da mensagem de erro 
     }
  })  
// Esta funçâo limpa o erro de um campo especifico
function limparErro(inputElemento, mensagemErroElemento) {
    inputElemento.classList.remove('invalido'); // Remove a classe ' invalido'
    inputElemento.classList,add('valido'); // Adiciona a classe' valido' para diexar a borda verde
    mensagemErroElemento.textContent='',// LImpa o texto da mensagem de erro
}


}