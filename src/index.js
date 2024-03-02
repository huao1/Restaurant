import logoURL from './home/logo.png';
import twitter from './home/twitter.svg';
import fb from './home/facebook.svg';
import insta from './home/insta.svg';
import veggies from './home/veggies.jpg'
import './index.css';
import { menu } from './menu/menu.js'
import { contact } from './contact/contact.js'

const logo = document.querySelector("#logo")
logo.setAttribute('src', logoURL)

const socials = document.querySelectorAll(".socials");
const instagram = document.querySelector(".white")
const content = document.querySelector("#content")

instagram.setAttribute('src', insta)
socials[0].setAttribute('src', fb)
socials[1].setAttribute('src', twitter)

const background = document.querySelector(".background")
background.setAttribute('src', veggies);

const menuBtn = document.querySelector("#menu")
menuBtn.addEventListener("click", menu)

const contactBtn = document.querySelector("#contact")
contactBtn.addEventListener("click", contact)

const homeBtn = document.querySelector("#home")
homeBtn.addEventListener("click", home)

function home() {
    content.textContent = ""
    content.className = ''
    content.classList.add("home")

    const backText = document.createElement('h1')
    const backImage = document.createElement('img')

    backText.textContent = "Let us cook!"
    backText.classList.add('home-text')

    backImage.setAttribute('src', veggies)
    backImage.classList.add('background')

    content.appendChild(backImage)
    content.appendChild(backText)
}

