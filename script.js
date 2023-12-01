function activeNavbar() {
    var nav_links = document.querySelectorAll(".navbar-nav a");
    var  current_location = window.location;
    console.log(nav_links, current_location);
    nav_links.forEach(element => {
        if(element.href.includes(`${current_location}`)){
            element.classList.add("active");
        }
    });
}

function flipLogo(){
    var logo =  document.getElementsByClassName("navbar-brand")[0].innerHTML;
    
    console.log(logo);
}

activeNavbar();
flipLogo();