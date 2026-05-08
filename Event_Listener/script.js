let count = 0;
// Event Listeners to handle button events
document.getElementById("increament").addEventListener("click", increaseCount)
document.getElementById("decreament").addEventListener("click", decreaseCount)
document.getElementById("reset").addEventListener("click", resetCount)
document.getElementById("save").addEventListener("click", saveCount)
document.getElementById("reload").addEventListener("click", reloadCount)

count = 12;

   
// function to update count 
function updateCount() {
    document.getElementById("counter_value").innerHTML = count;

}
updateCount();

// function to increament count 
function increaseCount() {
    count++;
    updateCount();
}


    // function to decreament count 
    function decreaseCount() {
        if (count > 0) {

            count--;
        }
        updateCount();
    }


    // function to reset count 
    function resetCount() {
        count = 12;
        updateCount();
    }


    // function to save count 
    function saveCount() {
        localStorage.setItem("count", count);
    }


    // function to load adn reload count 
    function reloadCount() {
        let current_value = localStorage.getItem("count");
        if (current_value !== null) {
            count = Number(current_value)
        }
        updateCount();
    }