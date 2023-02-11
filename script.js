

const container = document.querySelector(".container");
const cell = document.querySelectorAll(".cell");
const body = document.body;


container.addEventListener("mouseover", () => {
    container.style.backgroundColor = 'lightyellow';
});

container.addEventListener("mouseleave", () => {
    container.style.backgroundColor = 'inherit';
});

cell.forEach(item => {
    item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = 'lightblue';
    });
    item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = 'purple';
    });
    item.addEventListener("click", () => {
    item.style.border = '4px solid green';
    });
});    

body.addEventListener("keydown",(e) => {
    if (e.code === "KeyD"){
        body.style.backgroundColor === "" ? body.style.backgroundColor = "darkblue" : body.style.backgroundColor = "";
    };
})

array.forEach(element => {
    
});