let menuButton = document.getElementById("open-button")
let closeButton = document.getElementById("close-button");
let flag = false;

closeButton.addEventListener("click", () =>{
    closeNav();
    
});

menuButton.addEventListener("click", () =>{
    openNav();
    
});


//opens side panel
function openNav() {
  document.getElementById("sidepanel").style.width = "250px";
  menuButton.style.opacity = "0%";
}

//closes side panel
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
  menuButton.style.opacity = "100%";
}