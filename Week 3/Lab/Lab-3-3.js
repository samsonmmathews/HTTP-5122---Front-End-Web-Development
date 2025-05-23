//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========


//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

var price = [];
var currentPrice = 0;

while(currentPrice < 35)
{
	//GET ITEM COST FROM USER
	var itemPrice = parseInt(prompt("Enter the price of your item: "));	//CONVERT USER INPUT TO A NUMBER
	price.push(itemPrice);		//PUSH ITEM COST TO CART ARRAY
	currentPrice += itemPrice;	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
}

//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free! Total amount is $" + currentPrice);

//SEND OUTPUT TO CONSOLE
console.log("Item Prices: " + price.join(" | "));
