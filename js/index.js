//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.querySelectorAll(".input").forEach(element => {
  element.addEventListener('change', (e) => {
    element.parentElement.style.backgroundColor = "#6374E3"
    if (element.value == "") {
      element.parentElement.style.backgroundColor = "transparent"
    } else if (element.value != "") {
      element.nextElementSibling.style.transform = "translateY(-2rem)"
    }
    
  })
});

document.querySelectorAll(".field").forEach(element => {
  label = element.children[1]
  label.addEventListener('click', (e) => {
    element.children[0].focus() ;
  })
});
// var x = .parentElement
// console.log("hada",x);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

(function() {
  var nav = document.getElementById('nav'),
      anchor = nav.getElementsByTagName('a'),
      current = window.location.pathname.split('/html/')[1];
      console.log(anchor);
      console.log(current);
      console.log(anchor[0].href.split('/')[3]);
      
      for (var i = 0; i < anchor.length; i++) {
      if(anchor[i].href.split('/')[3] == current) {
          anchor[i].classList.toggle("active_father") ;
          anchor[i].children[0].classList.toggle("active") ;
          console.log("whatup");
          
      }
  }
})();