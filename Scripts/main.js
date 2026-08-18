let menuButton = document.getElementById("open-button")
let closeButton = document.getElementById("close-button");
let postOne = document.getElementById("blogPost-one");
let postTwo = document.getElementById("blogPost-two");
let postThree = document.getElementById("blogPost-three");


let flag = false;

closeButton.addEventListener("click", () =>{
    closeNav();
    
});

menuButton.addEventListener("click", () =>{
    openNav();
    
});


//opens side panel
function openNav() {
  document.getElementById("sidepanel").style.width = "200px";
  menuButton.style.opacity = "0%";
  postOne.style.marginLeft = "250px";
  postTwo.style.marginLeft = "250px";
  postThree.style.marginLeft = "250px";



}

//closes side panel
function closeNav() {
  document.getElementById("sidepanel").style.width = "0";
  menuButton.style.opacity = "100%";
  postOne.style.marginLeft = "40px";
  postTwo.style.marginLeft = "40px";
  postThree.style.marginLeft = "40px";


}