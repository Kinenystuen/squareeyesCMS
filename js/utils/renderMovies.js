import { fetchApi } from "../api/fetchApi.js";

const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";

    
export async function displayProducts(products) {
    const productsContainer = document.querySelector(".products");
    products.forEach(product => {
        // Create div element
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
    
        //Create links to selected movie
        const productLink = document.createElement(`a`);
        productLink.href =  `/product.html?id=${product.id}`;
        productLink.textContent = product.name;

        // Create h2 element
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productName.className = "productName";
        productName.appendChild(productLink);

        //Create img element
        const productImg = document.createElement(`img`);
        productImg.src = product.images[0].thumbnail;
        productImg.className = "productImg";

    
        // Append h2, img to div
        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
    
        // Append div to container
        productsContainer.appendChild(productDiv);
    }
);
}
displayProducts();
