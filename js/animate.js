var btn = document.getElementsByClassName("intro__btn")[0];

btn.addEventListener("click",function(e){
    e.preventDefault();
    btn.className += " animate";
    setTimeout(function() {
        window.location.assign("about.html");
    }, 750);    
});


