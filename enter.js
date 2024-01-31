const ageInput = document.querySelector("#age")
console.log(ageInput);
const enterBTN = document.querySelector(".enter-btn")

enterBTN.onclick = function () {
    const age = ageInput.value;

    const isAgeok = oldEnough(age);

    if (isAgeok) {
        document.location.href = "home.html";
    } else {
        alert("you shall not pass!")
    }
}

function oldEnough(ageToCheck) {
    if (ageToCheck === "OCEAN") {
        return true;
    }
    return false;
}