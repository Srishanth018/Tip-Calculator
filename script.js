function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    var numPersons = parseInt(document.getElementById("numPersons").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPersons) || billAmount <= 0 || tipPercentage < 0 || numPersons <= 0) {
        alert("Please enter valid values.");
        return;
    }

    var tipAmount = billAmount * (tipPercentage / 100);
    var totalAmount = billAmount + tipAmount;
    var amountPerPerson = tipAmount / numPersons;

    document.getElementById("tipAmount").textContent = "Tip Amount: $" + tipAmount.toFixed(2);
    document.getElementById("totalAmount").textContent = "Total Amount: $" + totalAmount.toFixed(2);
    document.getElementById("amountPerPerson").textContent = "Tip per each person: $" + amountPerPerson.toFixed(2);
}
