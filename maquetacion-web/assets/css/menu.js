document.addEventListener("DOMContentLoaded", (event) => {

    let button = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click", (event) => {
        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
        }
    });
});