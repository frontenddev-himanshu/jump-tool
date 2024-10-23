let jump = document.querySelector('.fixed-btn')

window.addEventListener("scroll", function(){
    if(this.window.pageYOffset > 100) {
        jump.classList.add("active");
    }
    else{
        jump.classList.remove("active");
    }

    
});