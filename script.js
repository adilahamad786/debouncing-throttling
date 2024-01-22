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


// Throttling way
// function throttler(callback, duration) {
//     var start = true;
//     var waitingArg = null;

//     const timeOutFun = () => {
//         if (waitingArg == null) {
//             start = true;
//         }
//         else {
//             callback(waitingArg);
//             waitingArg = null;
//             setTimeout(timeOutFun, duration);
//         }
//     }

//     return (e) => {
//         if (start) {
//             callback(e);
//             start = false;
//         }

//         waitingArg = e;
    
//         setTimeout(timeOutFun, duration);
//     }
// }

function throttler(callback, duration) {
    var shouldWait = false;
    var waitingArgs = null;

    const timeOutFun = () => {
        if (waitingArgs == null) {
            shouldWait = false;
        }
        else {
            callback(waitingArgs);
            waitingArgs = null;
            setTimeout(timeOutFun, duration);
        }
    }

    return (e) => {
        if (shouldWait) {
            waitingArgs = e;
            return;
        }
        
        callback(e);
        shouldWait = true;
    
        setTimeout(timeOutFun, duration);
    }
}

function getData3(e) {
    document.querySelector("#third").textContent = e.target.value;
}

var specailFun2 = throttler(getData3, 2000);

input.addEventListener("keyup", specailFun2);