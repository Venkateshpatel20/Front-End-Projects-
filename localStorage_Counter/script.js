let count = 12;

function updateCount() {
    document.getElementById("counter_value").innerHTML = count;

}
updateCount();

function increaseCount() {
    count++;
    updateCount();


function decreaseCount() {
    if (count > 0){

        count--;
    }
    updateCount();
}

function resetCount() {
    count = 12;
    updateCount();
}

function saveCount() {
    localStorage.setItem("count" ,count);
}
function reloadCount() {
    let current_value = localStorage.getItem("count");
    if (current_value !== null) {
        count = Number(current_value)
    }
    updateCount();
}