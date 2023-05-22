let arrow = document.querySelectorAll(".arrow");
for(var i = 0; i < arrow.length ; i++) {
 arrow[i].addEventListener("click", (e)=>{
  let arrowParent = e.target.parentElement.parentElement;
  
  arrowParent.classList.toggle("showMenu")
 })
}


// first dropdown
let dropdwn = document.querySelector(".dropdwn")
let dropdwnBtn = document.querySelector(".image")

dropdwnBtn.addEventListener("click", () =>{
dropdwn.classList.toggle("close")
});
 // second dropdown
let dropdwnTwo = document.querySelector(".dropdwn-two")
let dropdwnTwoBtn = document.querySelector(".img")

dropdwnTwoBtn.addEventListener("click", () =>{
dropdwnTwo.classList.toggle("close")
});

// aside

let sidebar = document.getElementById("sidebar")
let sidebarBtn = document.getElementById("sidebtn")


document.onclick = function(e){
 if(e.target.id !== 'sidebar' && e.target.id !== 'sidebtn')
 {
  sidebar.classList.remove("active")
 }
}
sidebarBtn.addEventListener("click", () =>{
sidebar.classList.toggle("active")
});