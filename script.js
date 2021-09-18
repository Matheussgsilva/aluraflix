function adicionarFilme() {
    var filmeFavotiro = document.getElementById("filme").value
    var nomeFilmeFavorito = document.getElementById("nome").value
    if (filmeFavotiro.endsWith(".jpg")) {
      posterFilme.push(filmeFavotiro)
      nomeFilme.push(nomeFilmeFavorito)
    
      var posterTela = document.getElementById("listaFilmes")
        
      posterTela.innerHTML = ""
        
      for (var i = 0; i < posterFilme.length; i++) {
        posterTela.innerHTML += "<figure><figcaption>" + nomeFilme[i] + "</figcaption> <img src=" + posterFilme[i] + "></figure>"
       
      }
    } else {
      window.alert("Endereço de Filme inválido")
    }
    document.getElementById("filme").value = ""
    document.getElementById("nome").value = ""
  }

var posterFilme = []
var nomeFilme = []

function retirarFilme() {
    var nomeFilmeFavorito = document.getElementById("nome").value
    
    var indice = nomeFilme.indexOf(nomeFilmeFavorito)
    nomeFilme.splice(indice, 1)
    posterFilme.splice(indice, 1)

    var posterTela = document.getElementById("listaFilmes")

    posterTela.innerHTML = ""
        
    for (var i = 0; i < posterFilme.length; i++) {
      posterTela.innerHTML += "<figure><figcaption>" + nomeFilme[i] + "</figcaption> <img src=" + posterFilme[i] + "></figure>"
    }

    document.getElementById("nome").value = ""
}