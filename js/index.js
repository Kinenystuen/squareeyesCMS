import { fetchApi } from "./api/fetchApi.js";
import { fetchSelApi } from "./api/fetchSelApi.js";
import { displayProducts } from "./utils/renderMovies.js";

import { perProducts } from "./filters/perPage.js";

//import { checkIfOpenMoviepage } from "./checkpage.js";


const perPage = document.querySelector(".per-page-selection");
const categoryR = document.querySelectorAll(".category");
const searchButton = document.querySelector(".search-button");

const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";
const productsContainer = document.querySelector(".products");




// perPage.onchange = function(event) {
//     const newUrl = baseUrl + `?per_page=${event.target.value}`;
//     productsContainer.innerHTML = "";
//     fetchApi(newUrl);
// } 

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

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = baseUrl + `?search=${searchInput}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}

const searchInput = document.querySelector("#search-input");

searchInput.onkeyup = function() {
    const newUrl = baseUrl + `?search=${searchInput.value}`;
    productsContainer.innerHTML = "";
    fetchApi(newUrl);
}




// // Finds the id in the queryString
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const idSelectedMovie = params.get("id");
// console.log(idSelectedMovie);
// //const idSelectedMovie = "37"
// //const lastWord = params(params.lastIndexOf("/") + 1);


// const selUrl = "http://squareeyes.local/wp-json/wc/store/products/" + idSelectedMovie;
// let selProduct;
// export async function fetchSelApi(url) {
//     try {
//         const responseSP = await fetch(url);
//         selProduct = await response.json();
//         console.log(selProduct);
        
//       displaySelProduct(selProduct);

//         return selProduct;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export async function fetchApiSelectedMovie() {
//     console.log(selUrl);
//     try {
//       let movieInfo;
//       const responseSM = await fetch(selUrl);
//       console.log(responseSM);
//       // If the url is wrong, then this (throw new Error) will make an error
//       if (!responseSM.ok) {
//         throw new Error(`API request failed with status: ` + responseSM.status);
//       }
//       const productSM = await responseSM.json();
//       console.log(productSM);
//       movieInfo = productSM;
//       displaySelProduct(movieInfo);
  
  
//     } catch (error) {
//       console.log("Error selectedMovie: " + error);
//     }
//   }
  
//   fetchApiSelectedMovie();

  

  export function checkIfOpenMoviepage() {
    if (window.location.href.indexOf("product") !== -1) {
        console.log("checking");
      // Your specific page is open
      fetchSelApi(selUrl);
      displaySelProduct(productSM);
    } 
    if (window.location.href.indexOf("index.html") !== -1) {
         console.log("index");
         fetchApi(baseUrl);
    }
    else {
        console.log("not");
    }
  }
  checkIfOpenMoviepage();
  