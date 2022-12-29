let header1 = document.querySelector("header");

    // var scroll = window.innerHeight;

    window.onscroll = function (event) {
        var scroll = window.pageYOffset;
        
        console.log(scroll)
        if (scroll < 100) {
            header1.classList.remove("onScroll");
        } else {
            header1.classList.add("onScroll");
        }
    }
