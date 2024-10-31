const counterDisplay = document.getElementById("counter");

const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

async function fetchCounter(getURL) {
    try {
        const response = await fetch(getURL);
        if(!response.ok) {
            throw new Error("response status: ", response.status);
        }
        const json = await response.json();
        return json.count;
    } catch(error) {
        console.error(error);
    }
}

async function updateCounter() {
    const getURL = "https://api.counterapi.dev/v1/halloween/CTL";

    const counter = await fetchCounter(getURL);
    counterDisplay.innerHTML = counter;
}

async function plusButtonClick() {
    const getURL = "https://api.counterapi.dev/v1/halloween/CTL/up";

    const counter = await fetchCounter(getURL);
    counterDisplay.innerHTML = counter;
}
plusButton.onclick = plusButtonClick;

async function minusButtonClick() {
    const getURL = "https://api.counterapi.dev/v1/halloween/CTL/down";

    const counter = await fetchCounter(getURL);
    counterDisplay.innerHTML = counter;
}
minusButton.onclick = minusButtonClick;

setInterval(updateCounter, 600);