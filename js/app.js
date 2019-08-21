function changeLang() {
    const langPl = document.querySelector(".lang-pl");
    const langEn = document.querySelector(".lang-en");

    langPl.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("lang-active");
        langPl.style.border = "1px solid var(--third-color)";
        langEn.style.border = "none";
    })

    langEn.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toggle("lang-active");
        langEn.style.border = "1px solid var(--third-color)";
        langPl.style.border = "none";
    })
}

function changeForm() {
    const loginTab = document.querySelector(".login-tab");
    const signUpTab = document.querySelector(".signup-tab");
    const signUpForm = document.querySelector(".signup-form-wrapper");
    const loginForm = document.querySelector(".login-form-wrapper");

    loginTab.addEventListener("click", function() {
        this.classList.toggle("tab-active");
        loginForm.style.display = "block";
        signUpTab.classList.remove("tab-active");
        signUpForm.style.display = "none";
    })

    signUpTab.addEventListener("click", function() {
        this.classList.toggle("tab-active");
        signUpForm.style.display = "block";
        loginTab.classList.remove("tab-active");
        loginForm.style.display = "none";
    })
}

function showModal() {
    console.log("hello")
    const modal = document.querySelector(".modal");
    const addBtn = document.querySelector(".add-btn");
    const close = document.querySelector(".close");

    addBtn.addEventListener("click", function(e) {
        e.preventDefault();

        modal.style.display = "block";
    })

    close.addEventListener("click", function() {
        modal.style.display = "none";
    })

    window.addEventListener("click", function(e) {
        if(e.target == modal) {
            modal.style.display = "none";
        }
    })
}

const init = () => {
    // changeLang();
    // changeForm();
    showModal();
};

document.addEventListener("DOMContentLoaded", init);
