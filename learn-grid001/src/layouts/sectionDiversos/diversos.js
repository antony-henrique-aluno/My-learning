const modal = document.querySelector("#modal");
const ampliImg = document.querySelector("#ampliImg");
const boxCards = document.querySelectorAll(".box-card > img");


for(imgsClicadas of boxCards){
    //Pocorre cada elemento do dom que tenha a class box-card
    imgsClicadas.addEventListener("click", openImg);
}

function openImg(e){
    //A variavel event guarda o evento de clique
    let event = e.currentTarget.src;
    modal.style.display = "flex"
    //ampliImg recebe o src que a variavel event guardou no event
    ampliImg.src = event;
}

modal.addEventListener("click", closeImg)
function closeImg(e){
    let eventCloseImg = 
    (e.target === modal ? modal.style.display = "none" 
    : modal.style.display = "flex");
}