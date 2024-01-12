import { displayProducts } from "../utils/renderMovies.js";
//const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";
//const baseURLDyn = "https://www.kineon.no/wp-json/wc/store/products/";

export async function fetchApi(url) {
    try { 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status: ` + response.status);
          }
        const products = await response.json();

        displayProducts(products);

        return products;
    }
    catch (error) {
        console.log("Error selectedMovie: " + error);
    }
}
//fetchApi(baseUrl);
