/////Event handler for hamburger menu and sidebar close button\\\\\
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
   
    getSidebar().classList.add("show");
})

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    getSidebar().classList.remove("show");
})

////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\



let homeDom = document.querySelector("#sidebar-home");
let aboutDom = document.querySelector("#sidebar-about");
let contactDom = document.querySelector("#sidebar-contact");

window.onload = fetchPage("home.html");

window.addEventListener("popstate", () => {
    switch(history.state.page){
        case 0:
            fetchPage("home.html")
            break;
        case 1:
            fetchPage("about.html")
            break;
        case 2:
            fetchPage("contact.html")
            break;
    }
    
})

homeDom.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.currentTarget){
        getSidebar().classList.remove("show");
        history.pushState({page: 0}, "", "home.html");
        fetchPage("home.html");
    }
});

aboutDom.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.currentTarget){
        getSidebar().classList.remove("show");
        history.pushState({page: 1}, "", "about.html");
        fetchPage("about.html");
    }
});

contactDom.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.currentTarget){
        getSidebar().classList.remove("show");
        history.pushState({page: 2}, "", "contact.html");
        fetchPage("contact.html");
    }
});


let containerDom = document.getElementById("container");

function fetchPage(filename){
    if(typeof filename != "string") return;

    fetch(filename)
        .then(response => {return response.text()})
        .then(data => containerDom.innerHTML = data)
}

function getSidebar(){
    const sidbar = document.querySelector(".sidebar");
    return sidbar;
}