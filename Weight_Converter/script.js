const weightE1 = document.getElementById("input");
// console.log("hello")
const errorE1 = document.getElementById("error");
const resultE1 = document.getElementById("result");
let errorTime;
let resultTime;
function updateResult() {
    if (weightE1.value <= 0 || isNaN(weightE1.value)) {
        errorE1.innerText = "Please enter a valid number!";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorE1.innerText = "";
            weightE1.value = "";

        },2000);
    } else {
        resultE1.innerText = (+weightE1.value * 2.204623 ).toFixed(1);
        clearTime = setTimeout(() => {
            resultE1.innerText = "";
            weightE1.value = "";
        },10000);
    }
}
weightE1.addEventListener("input" , updateResult);
