const number = document.querySelector("#num");
const category = document.querySelector("#category");
const get_fact = document.querySelector("#get_fact");
const display = document.querySelector("#display");


get_fact.addEventListener("click", () => {
    fetch(`http://numbersapi.com/${number.value}/${category.value}?json`)
        .then(response => response.json())
        .then(data => {
            display.innerHTML = `
                <strong>The number is ${data.number}</strong>
                <p>The fact of the number ${data.number} is as follows.</p>
                <h1>The fact is ${data.text}</h1>
            `;
            console.log(data);
        });        
})
