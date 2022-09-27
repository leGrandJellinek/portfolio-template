const body = document.querySelector(".body");

function bodyHiddenOn() {
    body.style = `overflow-y: hidden;`
    console.log(1);
}

function bodyHiddenOff() {
    body.style = `
    overflow-y: visible;`;
    console.log(2);
}

export {bodyHiddenOn, bodyHiddenOff}