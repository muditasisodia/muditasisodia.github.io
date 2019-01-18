
function run() {
  console.log(window.innerHeight);
  console.log(document.querySelector(".wrapper").offsetHeight);
  if(window.innerHeight> document.querySelector(".wrapper").offsetHeight){
    //document.querySelector(".header-text").style.height = "100vh";
    document.querySelector(".wrapper").style.height = "100vh"
    console.log("chnage height");
    console.log(window.innerHeight);
    console.log(document.querySelector(".wrapper").offsetHeight);
  }
  else {
    console.log("dnt chnage");
  }

  //if(window.innerHeight > document.querySelector("."))


  /*Lazy loading*/

  /*
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".js-lazy-image");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      console.log(entries);
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove(".js-lazy-image");
          imageObserver.unobserve(image);
        }
      });
});
}
*/

}



// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
