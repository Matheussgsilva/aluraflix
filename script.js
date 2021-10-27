function addMovie() {
    var favoriteMovie = document.getElementById("movie").value
    var favoriteMovieName = document.getElementById("name").value
    var nameAlert = document.getElementById("name-alert")
    var movieAlert = document.getElementById("movie-alert")

    if (favoriteMovie.endsWith(".jpg")) {
      if (favoriteMovieName == "") {
          nameAlert.innerHTML += "<p>Insira o nome do Filme</p>"
        } else {
      moviePoster.push(favoriteMovie)
      movieName.push(favoriteMovieName)
    
      var screenPoster = document.getElementById("movie-list")
        
      screenPoster.innerHTML = ""
      movieAlert.innerHTML = ""
      nameAlert.innerHTML = ""
        
      for (var i = 0; i < moviePoster.length; i++) {
        screenPoster.innerHTML += "<div><p class='nome-poster'>" + movieName[i] + "</p> <img src=" + moviePoster[i] + "></div>"
      }
      }
    } else {
      movieAlert.innerHTML = "<p>Endereço de Filme inválido</p>"
    }
    document.getElementById("movie").value = ""
    document.getElementById("name").value = ""
  }

var moviePoster = []
var movieName = []

function deleteMovie() {
    var favoriteMovieName = document.getElementById("name").value
    var nameAlert = document.getElementById("name-alert")
    
    if (favoriteMovieName == "" || movieName.indexOf(favoriteMovieName) == -1){
      nameAlert.innerHTML = "<p>Insira o nome do filme que deseja retirar</p>"
    } else {
      var movieIndex = movieName.indexOf(favoriteMovieName)
      movieName.splice(movieIndex, 1)
      moviePoster.splice(movieIndex, 1)

      var screenPoster = document.getElementById("movie-list")

      screenPoster.innerHTML = ""

      for (var i = 0; i < moviePoster.length; i++) {
        screenPoster.innerHTML += "<div><p>" + movieName[i] + "</p> <img src=" + moviePoster[i] + "></div>"
    }
      nameAlert.innerHTML = ""
    }

    document.getElementById("name").value = ""
}