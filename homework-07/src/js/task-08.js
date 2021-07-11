const controlsContainer = document.querySelector('#controls')
const inputEl = controlsContainer.querySelector('[type="number"]')
const renderBtn = controlsContainer.querySelector('[data-action="render"]')
const destroyBtn = controlsContainer.querySelector('[data-action="destroy"]')
const boxesContainer = document.querySelector('#boxes')


renderBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", destroyBoxesContainer);


function getAmount() {
    const amount = inputEl.value
    createBoxes(amount)
}


function createBoxes(amount) {
    const fragment = document.createDocumentFragment()
    const basicSize = 30;

   for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgb( ${randomRgb()} , ${randomRgb()} , ${randomRgb()} )`;
    fragment.append(div);
    }
    boxesContainer.append(fragment)
}


function randomRgb() {
    return Math.floor(Math.random() * 256)
}

function destroyBoxesContainer() {
  boxesContainer.innerHTML = "";
}