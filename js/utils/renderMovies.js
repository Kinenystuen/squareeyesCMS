import { fetchApi } from "../api/fetchApi.js";

//const baseUrl = "http://squareeyes.local/wp-json/wc/store/products/";


    
export async function displayProducts(products) {
    const productsContainer = document.querySelector(".products");
    products.forEach(product => {
        // Create div element
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Create h2 element
        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productName.className = "productName";

        //Create img element
        const productImg = document.createElement(`img`);
        productImg.src = product.images[0].thumbnail;
        productImg.className = "productImg";
        
        //Create links to selected movie
        const productLink = document.createElement(`a`);
        productLink.href =  `/product.html?id=${product.id}`;
        productLink.className = "link";

        //Adding link to both the img and the title
        productLink.appendChild(productImg);
        productLink.appendChild(productName);
    
        // Append h2, img to div
        //productDiv.appendChild(productImg);
        productDiv.appendChild(productLink);
    
        // Append div to container
        productsContainer.appendChild(productDiv);
    }
);
}
displayProducts();