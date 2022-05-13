console.log("hello world");

document.querySelector("form").addEventListener("submit", addMovie);

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input");

  const movie = document.createElement("li");

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);

  document.querySelector("ul").appendChild(movie);

  inputField.value = "";
}
