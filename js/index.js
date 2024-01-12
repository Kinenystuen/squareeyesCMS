import { fetchApi } from "./api/fetchApi.js";
import { fetchSelApi } from "./api/fetchSelApi.js";
import { displayProducts } from "./utils/renderMovies.js";

//import { checkIfOpenMoviepage } from "./checkpage.js";

const baseUrl = "https://www.kineon.no/wp-json/wc/store/products/";
const productsContainer = document.querySelector(".products");
const perPage = document.querySelector(".per-page-selection");
const categoryR = document.querySelectorAll(".category");
const sortFunc = document.querySelectorAll(".sortIt");

perPage.onchange = async function(event) {
    const products = await fetchApi(baseUrl);
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}

categoryR.forEach(function(catElemt) {
    catElemt.onclick = function(event) {
        let newUrl;
        if (event.target.id === "categories") {
            newUrl = baseUrl + "?categories=true";
        }             
        else {
            const catChosen = event.target.value; // or event.target.innerText
            newUrl = baseUrl + `?category=${catChosen}`;
        }
        productsContainer.innerHTML = "";
        fetchApi(newUrl);
    };
});

const searchInput = document.querySelector("#search-input");

searchInput.onkeyup = function() {
    const newUrl = baseUrl + `?search=${searchInput.value}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}  

  export function checkIfOpenPage() {
    if (window.location.href.indexOf("product") !== -1) {
      // Your specific page is open
      fetchSelApi(selUrl);
      displaySelProduct(productSM);
    } 
    else {
        fetchApi(baseUrl);
    }
  }
  checkIfOpenPage();
  