//APLICA O TEMA SALVO

if (localStorage.gelItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// TROCA O TEMA
function trocarTema() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setIntem("tema", "dark");

    } else {

    }

}
// FETCH NA API LOCAL
function buscarFrase()
fectch("dados.json")
    .then(res => res.json())
    .then(dados => {
        document.getElementById("frase").innerHTML =
    <h3>${dados.titulo}</h3>
        <p>${dados.texto}</p>;

    })
    .catch(() => {
        documento.getElementById("frase").innerText =
            "Erro ao carregar dados".;
    };

)
}






















