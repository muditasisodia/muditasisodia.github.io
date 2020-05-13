
function run() {
  const eyelidR = document.querySelector("#eye-lid-right");
  const eyelidCoverR = document.querySelector("#eye-lid-cover-right");

  const eyelidL = document.querySelector("#eye-lid-left");
  const eyelidCoverL = document.querySelector("#eye-lid-cover-left");

  const eyeballR = document.querySelector("#eyeball-right-shape");
  const eyeballL = document.querySelector("#eyeball-left-shape");

  const deltasR = [
    ["M460 72C412 72 383.2 100.2 364 119C364 119 412 62 460 62C508 62 556 119 556 119C536.8 100.2 508 72 460 72Z",
    "M370 119C376 111.5 412 76 460 76C508 76 544 112 550 119"],
    ["M460 70C412 70 383.2 100.2 364 119C364 119 412 86 460 86C508 86 556 119 556 119C536.8 100.2 508 70 460 70Z",
    "M370 119C376 114.116 412 91 460 91C508 91 544 114.442 550 119"],
    ["M460 70C412 70 383.2 100.2 364 119C383.2 137.8 412 166 460 166C508 166 536.8 137.8 556 119C536.8 100.2 508 70 460 70Z",
    "M370 119C376 126.5 412 162 460 162C508 162 544 126 550 119"],
    ["M460 70C412 70 383.2 100.2 364 119C364 119 412 110 460 110C508 110 556 119 556 119C536.8 100.2 508 70 460 70Z",
    "M370 119C376 117.605 412 111 460 111C508 111 544 117.698 550 119"],
    ["M460 70C412 70 383.2 100.2 364 119C364 119 412 86 460 86C508 86 556 119 556 119C536.8 100.2 508 70 460 70Z",
    "M370 119C376 114.116 412 91 460 91C508 91 544 114.442 550 119"],
    ["M460 72C412 72 383.2 100.2 364 119C364 119 412 62 460 62C508 62 556 119 556 119C536.8 100.2 508 72 460 72Z",
    "M370 119C376 111.5 412 76 460 76C508 76 544 112 550 119"]
  ];
  const deltasL = [
    ["M137 72C89 72 60.2 100.2 41 119C41 119 89 62 137 62C185 62 233 119 233 119C213.8 100.2 185 72 137 72Z",
    "M47 119C53 112 89 76 137 76C185 76 222 112 228 119"],
    ["M137 70C89 70 60.2 100.2 41 119C41 119 89 86 137 86C185 86 233 119 233 119C213.8 100.2 185 70 137 70Z",
    "M47 119C53 114.442 89 91 137 91C185 91 222 114.442 228 119"],
    ["M137 70C89 70 60.2 100.2 41 119C60.2 137.8 89 166 137 166C185 166 213.8 137.8 233 119C213.8 100.2 185 70 137 70Z",
    "M47 119C53 126 89 162 137 162C185 162 222 126 228 119"],
    ["M137 70C89 70 60.2 100.2 41 119C41 119 89 110 137 110C185 110 233 119 233 119C213.8 100.2 185 70 137 70Z",
    "M47 119C53 117.698 89 111 137 111C185 111 222 117.698 228 119"],
    ["M137 70C89 70 60.2 100.2 41 119C41 119 89 86 137 86C185 86 233 119 233 119C213.8 100.2 185 70 137 70Z",
    "M47 119C53 114.442 89 91 137 91C185 91 222 114.442 228 119"],
    ["M137 72C89 72 60.2 100.2 41 119C41 119 89 62 137 62C185 62 233 119 233 119C213.8 100.2 185 72 137 72Z",
    "M47 119C53 112 89 76 137 76C185 76 222 112 228 119"]
  ];

  const blinkEye = (i) => {
    if(i<6){
      eyelidR.setAttribute('d', deltasR[i][1]);
      eyelidCoverR.setAttribute('d', deltasR[i][0]);

      eyelidL.setAttribute('d', deltasL[i][1]);
      eyelidCoverL.setAttribute('d', deltasL[i][0]);

      i++;
      setTimeout(blinkEye, 80, i);
    }
  }

  eyeballR.classList.add("move-eye");
  eyeballL.classList.add("move-eye");

  setTimeout(blinkEye, 1750, 0);

}

// in case the document is already rendered
if (document.readyState!='loading') run();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') run();
});
