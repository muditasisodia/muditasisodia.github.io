
function run() {
/*
  console.log(window.innerHeight);
  console.log(document.querySelector(".wrapper").offsetHeight);
  if(window.innerHeight> document.querySelector(".wrapper").offsetHeight){
    document.querySelector(".wrapper").style.height = "100vh"
    console.log("chnage height");
    console.log(window.innerHeight);
    console.log(document.querySelector(".wrapper").offsetHeight);
  }
  else {
    console.log("dnt chnage");
  }
  */
}

var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}



// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
