import fetchData from "./functions/fetchData";

const searchBar = document.getElementById("search-bar");

const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", handleClick);

function handleClick() {
    console.log(searchBar.value);
    fetchData(searchbar.value);
}