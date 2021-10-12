function adicionarFilme() {
    var filmeFavotiro = document.getElementById("movie").value
    var nomeFilmeFavorito = document.getElementById("name").value
    var nameAlert = document.getElementById("name-alert")
    var movieAlert = document.getElementById("movie-alert")

    if (filmeFavotiro.endsWith(".jpg")) {
      if (nomeFilmeFavorito == "") {
          nameAlert.innerHTML += "<p>Insira o nome do Filme</p>"
        } else {
      posterFilme.push(filmeFavotiro)
      nomeFilme.push(nomeFilmeFavorito)
    
      var posterTela = document.getElementById("movie-list")
        
      posterTela.innerHTML = ""
      movieAlert.innerHTML = ""
      nameAlert.innerHTML = ""
        
      for (var i = 0; i < posterFilme.length; i++) {
        posterTela.innerHTML += "<div><p class='nome-poster'>" + nomeFilme[i] + "</p> <img src=" + posterFilme[i] + "></div>"
      }
      }
    } else {
      movieAlert.innerHTML = "<p>Endereço de Filme inválido</p>"
    }
    document.getElementById("movie").value = ""
    document.getElementById("name").value = ""
  }

var posterFilme = []
var nomeFilme = []

function retirarFilme() {
    var nomeFilmeFavorito = document.getElementById("name").value
    var nameAlert = document.getElementById("name-alert")
    
    if (nomeFilmeFavorito == "" || nomeFilme.indexOf(nomeFilmeFavorito) == -1){
      nameAlert.innerHTML = "<p>Insira o nome do filme que deseja retirar</p>"
    } else {
      var indice = nomeFilme.indexOf(nomeFilmeFavorito)
      nomeFilme.splice(indice, 1)
      posterFilme.splice(indice, 1)

      var posterTela = document.getElementById("movie-list")

      posterTela.innerHTML = ""

      for (var i = 0; i < posterFilme.length; i++) {
        posterTela.innerHTML += "<div><p>" + nomeFilme[i] + "</p> <img src=" + posterFilme[i] + "></div>"
    }
      nameAlert.innerHTML = ""
    }

    document.getElementById("name").value = ""
}