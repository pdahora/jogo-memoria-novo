
const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");

const form = document.querySelector(".login-form");

const validaInput = ({  target }) => {
    if (target.value.length > 2){
        button.removeAttribute("disabled");
        return;
    }    
    button.setAttribute("disabled", '');
}

const handleSumit = (event) => {
    event.preventDefault();
    localStorage.setItem("player", input.value);
    window.location = "index.html";
}
input.addEventListener("input", validaInput);
form.addEventListener("submit", handleSumit);



