function run() {
  const eyelidR = document.querySelector("#eye-lid-right");
  const eyelidCoverR = document.querySelector("#eye-lid-cover-right");


  const menu = document.getElementById("menu");

  menu.onclick = function toggleMenu(){
    
    const menuList = document.getElementsByClassName("menu-list")[0];
    const menuOpen = document.getElementsByClassName("fa-bars")[0];
    const menuClose = document.getElementsByClassName("fa-times")[0];

    if(menuList.classList.contains("menu-show")) {
      menuList.classList.remove("menu-show");
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
    } else {
      menuList.classList.add("menu-show");
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
    }

  };
}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
