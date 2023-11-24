const number = document.getElementById("num");
const get_fact = document.getElementById("get_fact");
const display = document.getElementById("display");



get_fact.addEventListener("click", () => {
    fetch(`http://numbersapi.com/${number.value}/math?json`)
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

// getFact(number);
