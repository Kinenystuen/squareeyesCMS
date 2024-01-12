

const selProductArea = document.querySelector(".selProductArea");

let productSM;
  export function displaySelProduct(productSM) {
    
    const selProductArea = document.querySelector(".selProductArea");
    

    const productDiv = document.createElement('div');
    productDiv.className = 'selProduct';

    // Create h2 element
    const productName = document.createElement('h2');
    productName.textContent = productSM.name;
    productName.className = "productName";

    // Create p element for prices
    const pricePar = document.createElement('p');
    const productPNum = productSM.prices.price/100;
    pricePar.textContent = `${productPNum} kr`;
    pricePar.className = "pricePar";
    
    // Create p element for regular price
    const regularPrice = document.createElement('p');
    const regularPNum = productSM.prices.regular_price/100;
    regularPrice.textContent = `${regularPNum} kr`;
    regularPrice.className = "pricePar regularPrice";

    if (pricePar === regularPrice) {
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


    //Create img element
    const productImg = document.createElement(`img`);
    productImg.src = productSM.images[0].thumbnail;
    productImg.className = "selProductImg";

    //Create buy now button
    const buyButton = document.createElement(`button`);
    buyButton.textContent = `Buy now`;
    buyButton.className = "flexCenter";
    //div for button 
    const buttonDiv = document.createElement(`buttonDiv`);
    buttonDiv.className = "flexCenter";
    buttonDiv.appendChild(buyButton);


    // Append h2, img to div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(priceDiv);
    productDiv.appendChild(buttonDiv);

    // Append div to container
    selProductArea.appendChild(productDiv);
  }
