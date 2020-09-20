function createGrid(grid = 16) {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("container");
    container.style.cssText = `width: 512px; height: 512px; background-color: black; margin: 0 auto;`
    let contWidth = container.style.width;
    body.appendChild(container);


    for ( let i = 0; i < grid*grid; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel")
        div.style.cssText = `width: ${parseInt(contWidth)/grid}px; height: ${parseInt(contWidth)/grid}px; float: left;`
        container.appendChild(div);
    }
    const divs = document.querySelectorAll(".pixel");
    divs.forEach(div => div.addEventListener("mouseover", function(e) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;            
    }));
}

createGrid();


const button = document.querySelector("button");
button.addEventListener("click", reset);


function reset() {
    let divs = document.querySelectorAll(".pixel");
    divs.forEach(div => div.style.backgroundColor = "black");
    let newRes = parseInt(prompt("How many pixels?"));
    let oldGrid = document.querySelector(".container");
    document.querySelector("body").removeChild(oldGrid);
    createGrid(newRes);
}