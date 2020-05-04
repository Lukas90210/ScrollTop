(function() {

   function createButton() {

        var button = document.createElement("button");

        button.classList.add("backToTop", "hidden");
        button.textContent = "Powrót do góry";
        document.body.appendChild(button);

        return button;

   }

   var button = createButton();

   function animateScroll(){

    if(document.body.ScrollTop > 0) {

        window.scrollBy(0, -5);
        setTimeout(ainmateScroll, 10);
    }

   }

   button.addEventListener("click", function(e){

    e.stopPropagation();

    animateScroll();

   }. false);

   window.addEventListener("scroll", function(e) {

        if(document.body.scrollTop >= 100) {

            button.classList.remove("hidden");
        } else {

            button.classList.add("hidden")
        }

   }, false);

})();