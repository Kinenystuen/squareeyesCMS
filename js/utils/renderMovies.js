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

        // Create p element for prices
    const pricePar = document.createElement('p');
    const productPNum = product.prices.price/100;
    pricePar.textContent = `${productPNum} kr`;
    pricePar.className = "pricePar";
    
    // Create p element for regular price
    const regularPrice = document.createElement('p');
    const regularPNum = product.prices.regular_price/100;
    regularPrice.textContent = `${regularPNum} kr`;
    regularPrice.className = "pricePar regularPrice";
    if (productPNum === regularPNum) {
      regularPrice.style.display = 'none';
    } else {
      regularPrice.style.display = 'block';
      pricePar.classList.add("salePrice");
    }

    // Create div for prices 
    const priceDiv = document.createElement(`div`);
    priceDiv.className = `flex`;
    priceDiv.appendChild(pricePar);
    priceDiv.appendChild(regularPrice);

    //Adding link to both the img and the title
    productLink.appendChild(productImg);
    productLink.appendChild(productName);

    //Create buy now button
    const buyButton = document.createElement(`button`);
    buyButton.textContent = `Buy now`;
    buyButton.className = "flexCenter";
    //Create buttonlink to selected movie
    const buttonLink = document.createElement(`a`);
    buttonLink.href =  `/product.html?id=${product.id}`;
    buttonLink.className = "link";
    //div for button 
    const buttonDiv = document.createElement(`buttonDiv`);
    buttonDiv.className = "flexCenter";
    buttonLink.appendChild(buyButton)
    buttonDiv.appendChild(buttonLink);

    // Append h2, img to div
    //productDiv.appendChild(productImg);
    productDiv.appendChild(productLink);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(buttonDiv);

    // Append div to container
    productsContainer.appendChild(productDiv);
    }
);
}
displayProducts();