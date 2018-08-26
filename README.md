Bamazon
Description This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents a customer interface.

MySQL Database Setup In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in Bamazon.sql. Run this code inside your MySQL client like Sequel Pro to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

![2018-08-25](https://user-images.githubusercontent.com/38449432/44624641-37dcf600-a8a8-11e8-8c24-748e7aeace51.png)
![2018-08-25 2](https://user-images.githubusercontent.com/38449432/44624683-6a3b2300-a8a9-11e8-8345-a16dd8aa210c.png)

Customer Interface The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

git clone https://github.com/pezgrrl/Bamazon.git
cd Bamazon
npm install 
node bamazonCustomer.js

![2018-08-25 5](https://user-images.githubusercontent.com/38449432/44624687-aa020a80-a8a9-11e8-9273-b6d46272d5a5.png)
![2018-08-25 6](https://user-images.githubusercontent.com/38449432/44624691-d1f16e00-a8a9-11e8-8d35-0e8f8aa9ca05.png)

Manager Interface
The manager interface presents a list of four options, as below.

![2018-08-25 9](https://user-images.githubusercontent.com/38449432/44625063-28fc4080-a8b4-11e8-9bfb-59d9079adde7.png)


The View Products for Sale option allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located, price, and the quantity available in stock.

The View Low Inventory option shows the user the items which currently have fewer than 10 units available.

![2018-08-25 11](https://user-images.githubusercontent.com/38449432/44625068-4e894a00-a8b4-11e8-993e-f2973ad8d30b.png)
(screenshot has 100, because it was before I caught typo)


The Add to Inventory option allows the user to select a given item ID and add additional inventory to the target item.

![2018-08-25 12](https://user-images.githubusercontent.com/38449432/44625072-94dea900-a8b4-11e8-975e-41197410f446.png)

The Add New Product option allows the user to enter details about a new product which will be entered into the database upon completion of the form.

![2018-08-25 8](https://user-images.githubusercontent.com/38449432/44625076-b6d82b80-a8b4-11e8-9df8-ee4f279a04b1.png)

To run the manager interface please follow the steps below:
git clone https://github.com/pezgrrl/Bamazon.git
cd Bamazon
npm install 
node bamazonManager.js