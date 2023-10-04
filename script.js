
let pennies = 0;
let nickels = 0;
let dimes = 0;
let quarters = 0;

function updateCoinDisplay() {
    //Update the display of number of coins
    document.getElementById("numPennies").textContent = pennies;
    document.getElementById("numNickels").textContent = nickels;
    document.getElementById("numDimes").textContent = dimes;
    document.getElementById("numQuarters").textContent = quarters;

    //Update the total value of each coin
    document.getElementById("totalPennies").textContent = (pennies * 0.01).toFixed(2);
    document.getElementById("totalNickels").textContent = (nickels * 0.05).toFixed(2);
    document.getElementById("totalDimes").textContent = (dimes * 0.10).toFixed(2);
    document.getElementById("totalQuarters").textContent = (quarters * 0.25).toFixed(2);

    //Calculate and update the total value of all coins
    const totalValue = (pennies * 0.01 + nickels * 0.05 + dimes * 0.10 + quarters * 0.25).toFixed(2);
    document.getElementById("totalValue").textContent = totalValue;
}

//Add and Subtract 1 for Pennies
document.getElementById("addPennies").addEventListener("click", () => {
    pennies++;
    updateCoinDisplay();
});

document.getElementById("subtractPennies").addEventListener("click", () => {
    if (pennies > 0) {
        pennies--;
        updateCoinDisplay();
    }
});

//Add and Subtract 5 for Pennies
document.getElementById("addPennies5").addEventListener("click", () => {
    pennies += 5;
    updateCoinDisplay();
});

document.getElementById("subtractPennies5").addEventListener("click", () => {
    if (pennies >= 5) {
        pennies -= 5;
        updateCoinDisplay();
    }
});

//Add and Subtract 1 for Nickels
document.getElementById("addNickels").addEventListener("click", () => {
    nickels++;
    updateCoinDisplay();
});

document.getElementById("subtractNickels").addEventListener("click", () => {
    if (nickels > 0) {
        nickels--;
        updateCoinDisplay();
    }
});

//Add and Subtract 5 for Nickels
document.getElementById("addNickels5").addEventListener("click", () => {
    nickels += 5;
    updateCoinDisplay();
});

document.getElementById("subtractNickels5").addEventListener("click", () => {
    if (nickels >= 5) {
        nickels -= 5;
        updateCoinDisplay();
    }
});

//Add and Subtract 1 for Dimes
document.getElementById("addDimes").addEventListener("click", () => {
    dimes++;
    updateCoinDisplay();
});

document.getElementById("subtractDimes").addEventListener("click", () => {
    if (dimes > 0) {
        dimes--;
        updateCoinDisplay();
    }
});

//Add and Subtract 5 for Dimes
document.getElementById("addDimes5").addEventListener("click", () => {
    dimes += 5;
    updateCoinDisplay();
});

document.getElementById("subtractDimes5").addEventListener("click", () => {
    if (dimes >= 5) {
        dimes -= 5;
        updateCoinDisplay();
    }
});

//Add and Subtract 1 for Quarters
document.getElementById("addQuarters").addEventListener("click", () => {
    quarters++;
    updateCoinDisplay();
});

document.getElementById("subtractQuarters").addEventListener("click", () => {
    if (quarters > 0) {
        quarters--;
        updateCoinDisplay();
    }
});

//Add and Subtract 5 for Quarters
document.getElementById("addQuarters5").addEventListener("click", () => {
    quarters += 5;
    updateCoinDisplay();
});

document.getElementById("subtractQuarters5").addEventListener("click", () => {
    if (quarters >= 5) {
        quarters -= 5;
        updateCoinDisplay();
    }
});