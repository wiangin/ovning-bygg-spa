/////Event handler for hamburger menu and sidebar close button\\\\\
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
   
    getSidebarElement().classList.add("show");
})

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    getSidebarElement().classList.remove("show");
})

////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\
////////SPA SPA\\\\\\

let containerDom = document.getElementById("container");
let logoDom = document.querySelector("#logo");
let sidbarHomeDom = document.querySelector("#sidebar-home");
let sidebarAboutDom = document.querySelector("#sidebar-about");
let sidbarContactDom = document.querySelector("#sidebar-contact");

let navHomeDom = document.querySelector("#nav-home");
let navAboutDom = document.querySelector("#nav-about");
let navContactDom = document.querySelector("#nav-contact");

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
    
});

logoDom.addEventListener("click", (event) => {
    event.preventDefault();
    window.onload = fetchPage("home.html");
})

sidbarHomeDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 0}, "", "home.html");
        fetchPage("home.html");
    }
});

navHomeDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 0}, "", "home.html");
        fetchPage("home.html");
    }
});

sidebarAboutDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 1}, "", "about.html");
        fetchPage("about.html");
    }
});

navAboutDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 1}, "", "about.html");
        fetchPage("about.html");
    }
});

sidbarContactDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 2}, "", "contact.html");
        fetchPage("contact.html");
    }
});

navContactDom.addEventListener("click", (event) => {
    event.preventDefault();

    if(event.currentTarget){
        getSidebarElement().classList.remove("show");
        history.pushState({page: 2}, "", "contact.html");
        fetchPage("contact.html");
    }
});

function fetchPage(filename){
    if(typeof filename != "string") return;
    console.log(fetch(filename));
    fetch(filename)
        .then(response => {
            showLoading();
            if(response.status == 200) {
                // console.log(showLoading());
               
                return response.text()
            }
        })
        .then(data => containerDom.innerHTML = data)
};

function getSidebarElement(){
    const sidbar = document.querySelector(".sidebar");
    return sidbar;
};

function showLoading(){
    const imgEl = document.createElement("img");
    imgEl.src = "./images/redLoading.png";
    containerDom.append(imgEl);

    return imgEl.src
};

