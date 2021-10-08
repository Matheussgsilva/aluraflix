function adicionarFilme() {
    var filmeFavotiro = document.getElementById("filme").value
    var nomeFilmeFavorito = document.getElementById("nome").value
    if (filmeFavotiro.endsWith(".jpg")) {
      posterFilme.push(filmeFavotiro)
      nomeFilme.push(nomeFilmeFavorito)
    
      var posterTela = document.getElementById("movie-list")
        
      posterTela.innerHTML = ""
        
      for (var i = 0; i < posterFilme.length; i++) {
        posterTela.innerHTML += "<div><p class='nome-poster'>" + nomeFilme[i] + "</p> <img src=" + posterFilme[i] + "></div>"
       
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

    var posterTela = document.getElementById("movie-list")

    posterTela.innerHTML = ""
        
    for (var i = 0; i < posterFilme.length; i++) {
      posterTela.innerHTML = "<div><p>" + nomeFilme[i] + "</p> <img src=" + posterFilme[i] + "></div>"
    }

    document.getElementById("nome").value = ""
}