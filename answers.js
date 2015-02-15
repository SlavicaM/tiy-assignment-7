/*                          Question #1 
-------------------------------------------------------------------------*/


//For this assignment we are using array of objects which was provided to us(items.js). It contains
//different data types such as: numbers, strings, arrays of numbers, array of strings
//Show me how to calculate the average price of all items. Please console.log the average. A: 23.63

function average() {
    //create a new array with the results of calling an anonymous (callback) function on every element 
    // in this array
    //Function that produces an element of the new Array, is taking one parameter
   var prices = items.map(function(item) {
     return item.price;
   });
   //reduce executes the callback function once for each element present in the array
   // and reduce it to a single value (sum of all prices)
   var sum = prices.reduce(function(previousValue, currentValue){
     return previousValue + currentValue;
   })
   // return average and round it to a two diggits after .
   return (sum / items.length).toFixed(2);
}

console.log("The average price is: $" + average());


/*                          Question #2 
--------------------------------------------------------------------------*/

// Show me how to get an array of items that cost between $14.00 and $18.00 USD

function costRange(low, high) {
  // Create an array of items filtered by the above condition
    var results = items.filter(function(item){
        if (item.price >= low && item.price <= high) {
            return true;
        }
    })

    return results;
}

console.log("Items that cost between $14.00 USD and $18.00 USD:", costRange(14.00, 18.00));

/*                           Question #3
---------------------------------------------------------------------------*/

/* Show me how find the item with a "GBP" 
currency code and print its name and price. Please console.log the one you find. */

// get each item where currency code = GPB
     // print the name and price 
//forEach func will loop through each element through the array

var items = items.forEach(function(item) {
    if (item.currency_code === "GBP") {
        console.log(item.title + " costs $" + item.price);
    };
}) 

/*                           Question #4
----------------------------------------------------------------------------*/

// Show me how to find which items are made of wood. Please console.log the ones you find.
//get items which are made of wood; "tags" === "wood%"
//Not sure how to do this for now

/*
var woodItems = items.forEach(function(item,index) {
    if (item.tags[index] === "wood handle") {
        console.log(item.title + " is made of wood:" + item.tags[index]);
    };
})   */ 




/*                           Question #5 
-------------------------------------------------------------------------*/
//Show me how to find which items are made of eight or more materials. Please console.log the ones you find.


//map the materials in array and filter the array by the condition
// callback function has two param; second param is index of the array
// I am experiencing very often an error:
// Uncaught TypeError: Cannot read property 'filter' of undefined
//I rebooted laptop but it seems to me that old results stay in session no matter what I do

var moreMaterials = items.map(function(item, index) {
   if (item.materials[index].length >= 8) {
        console.log("Item:" + item.title + "is made from " + 
                    item.materials[index].length + 
                    " materials which are: " + item.materials);
      }
   }); 
// Uncaught TypeError: Cannot read property 'filter' of undefined

/*                            Question #6 
-------------------------------------------------------------------------*/
//Show me how to calculate how many items were made by their sellers

// My first thought was  how to select distinct value?
/* Target item is "who_made" which can have three different values
"who_made": "i_did","
who_made": "collective",
"who_made": "someone_else" */
// we want to retreive # of items by their sellers? 
/* It is confusing for me to connect who are their sellers? 
If I get assumption that their selleres would be “i_did” 
I am still puzzled how to produce output without using 
hard coded value “i_did” */ 

//create array of sellers filtered by "i_did" 
// it will return  array of true and false values
var theirSellers = items.map(function(item) {
    return item.who_made === "i_did";
});

//loop through the array of true/false
// logic behind calculation: true + false = 1, which will go through each item
var count = theirSellers.reduce(function(previousValue, currentValue){
     return previousValue + currentValue;
   });

console.log(count + " were made by their sellers");



