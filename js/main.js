var user = document.querySelector('.jsGithubUser');
var searchButton = document.querySelector('.jsSearchButton');
var userName = document.querySelector('#jsUserName');
var repositories = document.querySelector('#jsRepositories');
var photo = document.querySelector('#jsPhoto');

function searchGitH() {
  var apiURL= "https://api.github.com/users/" + user.value;

  var request = new XMLHttpRequest();

  request.open('GET', apiURL, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      userName.innerHTML = data.name;
      repositories.innerHTML = data.public_repos;
      photo.innerHTML = '<img src="' + data.avatar_url + '">';
    } else {
      console.log('Error del servidor, es posible que el archivo no exista o se haya producido un error en el servidor');
    }
  };

  request.onerror = function() {
    console.log('Error, no hay conexión con el servidor');
  };

  request.send();
}

searchButton.addEventListener("click", searchGitH);
