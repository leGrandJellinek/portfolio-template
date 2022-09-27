const html = document.querySelector("html");

function bodyHiddenOn() {
    html.style = `overflow-y: hidden;`
    console.log(1);
}

function bodyHiddenOff() {
    html.style = `
    overflow-y: visible;`;
    console.log(2);
}

export {bodyHiddenOn, bodyHiddenOff}