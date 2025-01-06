const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://hub2pqtok5kcqcsnjq2vlntq5y0pknsd.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has been view ${data} times`;

}

updateCounter();