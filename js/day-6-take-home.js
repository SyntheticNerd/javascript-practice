let nmbrFacts = 1;
let animalType = "cat";

function fetchCatFact() {
    fetch(
            `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${nmbrFacts}`
        )
        .then((response) => response.text())
        .then((data) => {
            let catFact = JSON.parse(data).text;
            console.log(catFact);
            document.getElementById("catFact").innerHTML = catFact;
        })
        .catch((error) => alert(error));
}