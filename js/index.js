import { fetchApi } from "./api/fetchApi.js";
import { fetchSelApi } from "./api/fetchSelApi.js";
import { displayProducts } from "./utils/renderMovies.js";

import { perProducts } from "./filters/perPage.js";

//import { checkIfOpenMoviepage } from "./checkpage.js";


const perPage = document.querySelector(".per-page-selection");
const categoryR = document.querySelectorAll(".category");
const searchButton = document.querySelector(".search-button");

// fist baseUrl is from the local api and baseURLDyn is from the
//const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";
const baseUrl = "https://www.kineon.no/wp-json/wc/store/products/";




const productsContainer = document.querySelector(".products");




// perPage.onchange = function(event) {
//     const newUrl = baseUrl + `?per_page=${event.target.value}`;
//     productsContainer.innerHTML = "";
//     fetchApi(newUrl);
// } 

perPage.onchange = function(event) {
    const newUrl = baseUrl + `?per_page=${event.target.value}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}

categoryR.forEach(function(catElemt) {
    catElemt.onclick = function(event) {
        let newUrl;
        if (event.target.id === "categories") {
            newUrl = baseUrl + "?categories=true";
            console.log("hei")
        } else {
            const catChosen = event.target.value; // or event.target.innerText
            newUrl = baseUrl + `?category=${catChosen}`;
            console.log(catChosen)
        }
        productsContainer.innerHTML = "";
        fetchApi(newUrl);
    };
});

// searchButton.onclick = function() {
//     const searchInput = document.querySelector("#search-input").value;
//     const newUrl = baseUrl + `?search=${searchInput}`;
//     productsContainer.innerHTML = "";
//     fetchApi(newUrl);
// }

const searchInput = document.querySelector("#search-input");

searchInput.onkeyup = function() {
    const newUrl = baseUrl + `?search=${searchInput.value}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}  

  export function checkIfOpenPage() {
    if (window.location.href.indexOf("product") !== -1) {
        console.log("checking");
      // Your specific page is open
      fetchSelApi(selUrl);
      displaySelProduct(productSM);
    } 
    if (window.location.href.indexOf("index.html" || "netlify") !== -1) {
         console.log("index");
         fetchApi(baseUrl);
    }
    else {
        console.log("not");
    }
  }
  checkIfOpenPage();
  