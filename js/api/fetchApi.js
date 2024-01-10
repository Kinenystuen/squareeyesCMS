import { displayProducts } from "../utils/renderMovies.js";
const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";

export async function fetchApi(url) {
    try {
        const response = await fetch(url);
        const products = await response.json();
        console.log(products);

        displayProducts(products)

        return products;
    }
    catch (error) {
        console.log(error);
    }
}
//fetchApi(baseUrl);
