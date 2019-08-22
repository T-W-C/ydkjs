const phonePrice = 99.99;
const accessoryPrice = 9.99;
const spendingThreshold = 200;

var bankBalance = 303.91;

const TAX = 0.08;

// calculates amount of phones based on costs array and bankBalance
const phonePurchaser = (phoneCosts, bankBalance) => {
    // ensure input is array - if one value, convert to an array
    phoneCosts = (Array.isArray(phoneCosts) ? phoneCosts: [phoneCosts]);
    var phonesOwned = 0;
    var sum = phoneCosts.reduce((prevCost, cost) => prevCost + cost);
    var moneySpent = 0;
    do {
        let tax = taxCalculator(sum);
        bankBalance = bankBalance - sum - tax;
        moneySpent += sum + tax;
        phonesOwned++;
    } while( ((bankBalance - sum) > 0 && moneySpent + sum < spendingThreshold) )
    return 'Phones purchased: ' + String(phonesOwned) + ' Amount spent: ' + String(moneySpent) + ' End balance: ' + bankBalance;
}

const taxCalculator = (input) => {
    return input * TAX;
}

console.log( phonePurchaser([phonePrice, accessoryPrice], bankBalance) );