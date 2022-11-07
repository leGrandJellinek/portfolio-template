const body = document.querySelector(".body");

function bodyHiddenOn() {
    body.style = `overflow-y: hidden;`
}

function bodyHiddenOff() {
    body.style = `
    overflow-y: visible;`;
}

export {bodyHiddenOn, bodyHiddenOff}