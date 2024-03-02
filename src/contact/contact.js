import "./contact.css"

const h3 = [
    "Address:",
    "Hours:",
    "Phone Number:"
]

const paragraph = [
    "1600 Pennsylvania Avenue NW, Washington, DC 20500",
    "Monday: 10AM - 10PM<br>Tuesday: 10AM - 10PM<br>Wednesday: 10AM - 10PM<br>Thursday: 10AM - 10PM<br>Friday: 12PM - 1AM<br>Saturday: 12PM - 1AM<br>Sunday: Closed<br>",
    "123-456-7899"
]

export function contact() {
    const content = document.querySelector("#content")
    content.className = ''
    content.textContent = ''
    content.classList.add('contact')

    let container;
    let title;
    let text;

    for(let i = 0; i < 3; i++) {
        container = document.createElement("div")
        title = document.createElement("h3")
        text = document.createElement("p")

        title.textContent = h3[i]
        if (i == 1) {
            let days = paragraph[i].split("<br>", 7)
            for (let day of days) {
                text.innerHTML = text.innerHTML + day + "<br />"
            }
        }
        else {
            text.textContent = paragraph[i]
        }

        text.classList.add("contact-text")
        title.classList.add("contact-text")

        container.appendChild(title)
        container.appendChild(text)
        content.appendChild(container)
    }
}