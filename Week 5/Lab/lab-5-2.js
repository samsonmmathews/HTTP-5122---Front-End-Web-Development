//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.

var bankCustomer = {
    lastName: "Smith",
    branchNumber: 1000,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts: false,
    makeDeposit: function(amount) {
        this.accountBalance += amount;
        console.log("Thank you, your current balance is now $" + this.accountBalance.toFixed(2));
    },
    makeWithdrawal: function(amount) {
        this.accountBalance -= amount;
        console.log("Thank you, your current balance is now $" + this.accountBalance.toFixed(2));
    },
    addInterest: function() {
        var tempInterest = this.interestRate;

        if(this.multipleAccounts == true)
        {
            tempInterest += 0.005;
        }

        this.accountBalance *= tempInterest;
        console.log("Thank you, your current balance is now $" + this.accountBalance.toFixed(2));
    }
};
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.

console.log("Starting balance: $" + bankCustomer.accountBalance);

bankCustomer.makeDeposit(200);  // Deposit $200

bankCustomer.addInterest(); // Adds interest after deposit call

bankCustomer.makeWithdrawal(75);    // Withdraw $75

bankCustomer.addInterest(); // Adds interest after withdrawal call

//6. Once everything is working, tackle the Stretch Goal!
