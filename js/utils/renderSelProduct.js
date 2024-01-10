

const selProductArea = document.querySelector(".selProductArea");

let productSM;
  export function displaySelProduct(productSM) {
    console.log(productSM);
    console.log("Yes")
    
    const selProductArea = document.querySelector(".selProductArea");
    

    const productDiv = document.createElement('div');
    productDiv.className = 'selProduct';

    // Create h2 element
    const productName = document.createElement('h2');
    productName.textContent = productSM.name;
    productName.className = "productName";

    // Create p element
    const productPrice = document.createElement('p');
    const productPNum = productSM.prices.price/100;
    productPrice.textContent = `Price: ${productPNum}`;
    productPrice.className = "productPrice";

    //Create img element
    const productImg = document.createElement(`img`);
    productImg.src = productSM.images[0].thumbnail;
    productImg.className = "selProductImg";


    // Append h2, img to div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);

    // Append div to container
    selProductArea.appendChild(productDiv);
  }
