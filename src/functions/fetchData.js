import axios from "axios"

async function fetchData (searchQuery) {
    try {
        const response = await axios.get("https://api.edamam.com/api/recipes/v2", {
            params: {
                type: "public",
                app_key: "key number nog toevoegen" ,
                app_id: "id nog meegeven",
                q: searchQuery,
            }
        })


        console.log(response.data.hits);
        //hierover mappen over de teruggekomen array en toevoegen in html

        //random voorbeeld, voor in dit geval 6 resultaten (al dit soort dingen beter in losse functies zetten)
        let randomNum = Math.random() * 20;
        randomNum = randomNum + 6;
        const firstNum = Math.round(randomNum);
        const secondNum = firstNum - 6;

        console.log(hits.slice(secondNum, firstNum));

        //mappen, hiervan ook een losse functie maken, bijv createRecipeCard
        const {hits} = response.data;
        const data = hits.slice(secondNum,firstNum);
        const listItems = document.getElementById("listItems");

        data.map((recipe) => {
            listItems.innerHTML += `
            <li class="card">${recipe.recipe.label}
                <h5 class="card__title">${recipe.recipe.label}</h5>
                <img class="card__img" src="${recipe.images.SMALL.url}" alt="${recipe.recipe.label}">
            </li>
            `
        })

    } catch (e) {
        console.log(e)
    }
}

export default  fetchData;

//form maken om button heen, id meegeven van onSubmit en dan voor enter
const submit = document.getElementById("onSubmit");
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    handleClick()
})
