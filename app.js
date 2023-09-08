const btn = document.querySelector(".btn");
const sec = document.querySelector("section");

let localData = localStorage.getItem("modeNight");

if(localData){
    btn.className = "btn2";
    sec.className = "section";
}

btn.addEventListener("click", () => {

    if (btn.className === "btn") {
        btn.className = "btn2";
        sec.className = "section";
        localStorage.setItem("modeNight","night")
    } else {
        btn.className = "btn";
        sec.className = "";
        localStorage.removeItem("modeNight");
    };

    /*  sec.classList.toggle("section");
     btn.classList.toggle("btn2"); */
});



/* localStorage */

/* set get remove set yollamaq get tutmaq remove silmek */