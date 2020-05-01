
function run() {

  var navList = document.getElementById("nav-lists");
  function Show() {
  navList.classList.add("_Menus-show");
  }

  function Hide(){
  navList.classList.remove("_Menus-show");
  }

}


  var navList = document.getElementById("nav-lists");

  function toggleMenu() {
    if (navList.classList.contains("_Menus-show")) Hide();
    else Show();
  }

  function Show() {
  navList.classList.add("_Menus-show");
  }

  function Hide(){
  navList.classList.remove("_Menus-show");
  }

  function showCategories(){
    document.getElementById("work-categories").style.display = "block";
  }




// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
