let carts= document.querySelectorAll('.add-to-cart');
let products= [
    {
        productTitle: "Wollen shirt",
        ProductDescription:"Lorem ipusm dolor sit elit ipsum do.",
        price: 1500,
        incart:0,
    }
]


for(let i=0; i<carts.length; i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function onloadCartNumbers()
{
    let prouductNumbers = localStorage.getItem('cartNumbers');

    if (prouductNumbers){
        document.querySelector('.cart span div').textContent= prouductNumbers;
    }
}

function cartNumbers()
{
    let prouductNumbers = localStorage.getItem('cartNumbers');
    prouductNumbers = parseInt(prouductNumbers);
    if(prouductNumbers){
        localStorage.setItem('cartNumbers', prouductNumbers + 1);
        document.querySelector('.cart span div').textContent= prouductNumbers + 1;
    }
    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span div').textContent=1;
    }
}

onloadCartNumbers()


// ----------------product detail-----------------

let largeImage = document.querySelector('.large-image');
let smallImage = document.querySelectorAll('.small-image');



for(let j=0; j<smallImage.length; j++)
{
    smallImage[j].addEventListener('click', ()=>{
        largeImage.src = smallImage[j].src;
    })
}