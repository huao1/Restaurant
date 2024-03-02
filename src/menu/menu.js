import pho from './pho.jpeg';
import paella from './paella.jpeg';
import tika from './tika.jpeg';
import krapow from './krapow.jpeg';
import './menu.css'

const dishes = ["Seafood Paella", "Classic Pho", "Chicken Tika Masala", "Spicy Pad Krapow"]
const dishURL = [paella, pho, tika, krapow]
const description = [
    "Saffron-infused rice, succulent seafood, and flavorful meats mingle in a symphony of flavors, capturing the essence of the Mediterranean in every bite",
    "Rich broth, tender noodles, and flavorful meats mingle in a bowl bursting with aromatic herbs and fresh crunch. It's a taste of Vietnam's culinary heritage in every spoonful.",
    "Tender pieces of chicken or paneer are bathed in a creamy, tomato-based sauce infused with a harmonious blend of aromatic spices like cumin, coriander, and garam masala.",
    "Succulent minced meat, fragrant basil leaves, and a kick of chili come together in a sizzling stir-fry that ignites the taste buds."
]

export function menu() {

    
    const content = document.querySelector("#content")
    content.className = ''
    content.classList.add('menu')
    content.textContent = ''

    let dishCard;
    let dishImg;
    let dishName;
    let dishDetail;


    for(let i = 0; i < 4; i++) {
        dishCard = document.createElement('div')
        dishImg = new Image();
        dishName = document.createElement('h2');
        dishDetail = document.createElement('p');


        dishName.textContent = dishes[i]
        dishImg.src = dishURL[i]
        dishImg.classList.add('dishes')
        dishCard.classList.add('dish-cards')
        dishDetail.textContent = description[i]

        dishCard.appendChild(dishDetail)
        dishCard.appendChild(dishImg)
        dishCard.appendChild(dishName)
        content.appendChild(dishCard)


    }

}