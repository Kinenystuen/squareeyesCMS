import { displaySelProduct } from "../utils/renderSelProduct.js";

// Finds the id in the queryString
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idSelectedMovie = params.get("id");


export const selUrl = "http://squareeyes.local/wp-json/wc/store/products/" + idSelectedMovie;

export async function fetchSelApi(url) {
    try {
      let movieInfo;
      const responseSM = await fetch(url);
      // If the url is wrong, then this (throw new Error) will make an error
      if (!responseSM.ok) {
        throw new Error(`API request failed with status: ` + responseSM.status);
      }
      const productSM = await responseSM.json();
      movieInfo = productSM;
      displaySelProduct(productSM);

      return productSM;
  
    } catch (error) {
      console.log("Error selectedMovie: " + error);
    }
  }
  
  fetchSelApi(selUrl);