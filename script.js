var input = document.querySelector("input");

// Normal way
function getData1(e) {
    document.querySelector("#first").textContent = e.target.value;
}
input.addEventListener("keyup", getData1);



// Debouncing way
function debounce(callback, minimumDelay) {
    var id;
    return (e) => {
        clearTimeout(id);

        id = setTimeout(() => {
            callback(e);
        }, minimumDelay);
    }
}


function getData2(e) {
    document.querySelector("#second").textContent = e.target.value;
}

var specailFun1 = debounce(getData2, 1000);

input.addEventListener("keyup", debounce(getData2, 1000));

