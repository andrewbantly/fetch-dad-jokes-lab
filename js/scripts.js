console.log();

const dadURL = "https://icanhazdadjoke.com/";

const printJoke = document.querySelector("button")

const options = {
    headers: {
        Accept: "application/json"
    }
}

printJoke.addEventListener("click", () => {

fetch(dadURL, options)
  .then(responseData => responseData.json())

  .then(jsonData => {
    let jokeContainer = document.querySelector("#jokeContainer");
    while (jokeContainer.firstChild) {
        jokeContainer.removeChild(jokeContainer.firstChild);
    }
    let randomJoke = jsonData.joke;
    console.log(jsonData)
    let jokeID = jsonData.id;

    let jokeDiv = document.createElement("div");
    jokeDiv.innerText = randomJoke;
    document.querySelector("#jokeContainer").append(jokeDiv)
    let jokeImage = document.createElement("img");
    jokeImage.src = "https://icanhazdadjoke.com/j/" + jokeID + ".png";
    document.querySelector("#jokeContainer").append(jokeImage);
  })
  .catch(error => {
    console.log("error :(", error);
  });
});