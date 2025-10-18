let theme = document.documentElement;
console.log(theme);
let btns = document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener("click", (e) => {
        let btnClass = (e.currentTarget.classList);
        if (btnClass.contains("btn-1")) {
            // console.log("btn1");
            theme.style.setProperty("--theme-color")
        } 
        else if (btnClass.contains("btn-2")) {
            console.log("btn2");
        }
    })
})

