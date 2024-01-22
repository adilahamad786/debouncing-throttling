var input = document.querySelector("input");

// Normal way
function getData1(e) {
    document.querySelector("#first").textContent = e.target.value;
}
input.addEventListener("keyup", getData1);