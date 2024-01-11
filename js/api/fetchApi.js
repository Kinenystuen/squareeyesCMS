import { displayProducts } from "../utils/renderMovies.js";
//const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";
//const baseURLDyn = "https://www.kineon.no/wp-json/wc/store/products/";

export async function fetchApi(url) {
    try {
        const perPage = "20";
        const apiUrl = `${url}?per_page=${perPage}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status: ` + response.status);
          }
        const products = await response.json();
        console.log(products);

        displayProducts(products)

        return url;
    }
    catch (error) {
        console.log("Error selectedMovie: " + error);
    }
}
//fetchApi(baseUrl);
