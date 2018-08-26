var inquirer = require("inquirer");
var mysql = require("mysql");
require("dotenv").config()

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "water",
    database: "Bamazon"
});

function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if (integer && (sign === 1)) {
        return true;
    } else {
        return "Please enter a whole non-zero number.";
    }
}

function promptUserPurchase() {
    inquirer.prompt([{
                type: "input",
                name: "item_id",
                message: "Please enter the Item ID for the item you would like to purchase.",
                validate: validateInput,
                filter: Number
            },
            {
                type: "input",
                name: "quantity",
                message: "How many do you want?",
                validate: validateInput,
                filter: Number
            }
        ]).then(function (input) {
                var item = input.item_id;
                var quantity = input.quantity;

                var queryStore = "SELECT * FROM products WHERE ?";
            
                connection.query(queryStore, {
                            item_id: item
                        }, function (err, data) {
                            if (err) throw err;

                            if (data.length === 0) {
                                console.log("ERROR: No such Item ID. Please select a valid Item ID.");
                                displayInventory();

                            } else {
                                var productData = data[0];

                                if (quantity <= productData.stock_quantity) {
                                    console.log("Yay! The product you requested is in stock! Placing order!");

                                    var updateQueryStore = "UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + " WHERE item_id = " + item;

                                    connection.query(updateQueryStore, function (err, data) {
                                        if (err) throw err;

                                        console.log("Your order has been placed! Your total is $" + productData.price * quantity);
                                        console.log("Thank you for shopping with us!");
                                        console.log("\n---------------------------------------------------------------------\n");

                                        connection.end();
                                    })

                                        } else {
                                        console.log("Sorry, there is not enough product in stock, your order can not be placed as is.");
                                        console.log("Please modify your order.");
                                        console.log("\n---------------------------------------------------------------------\n");

                                        displayInventory();
                                    }
                                }
                            })
                        })
                    }
                    function displayInventory() {

                        queryStore = "SELECT * FROM products";

                        connection.query(queryStore, function(err, data) {
                            if (err) throw err;

                            console.log("Existing Inventory: ");
                            console.log("...................\n");
                            
                            var storeOut = "";
                            for (var i = 0; i < data.length; i++) {
                                storeOut = "";
                                storeOut += "Item ID: " + data[i].item_id + "  //  ";
                                storeOut += "Product Name: " + data[i].product_name + "  //  ";
                                storeOut += "Department: " + data[i].department_name + "  //  ";
                                storeOut += "Price: $" + data[i].price + "\n";
                    
                                console.log(storeOut);
                            }

                            console.log("---------------------------------------------------------------------\n");
                  
                            
                            promptUserPurchase();
                      })
                  }
                  function runBamazon() {
                    
                    displayInventory();

                }

            
                runBamazon();