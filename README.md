Bamazon
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require the MySQL and Inquirer npm packages, your app will need them for data input and storage.

![2018-08-25](https://user-images.githubusercontent.com/38449432/44624641-37dcf600-a8a8-11e8-8c24-748e7aeace51.png)
![2018-08-25 2](https://user-images.githubusercontent.com/38449432/44624683-6a3b2300-a8a9-11e8-8345-a16dd8aa210c.png)

Customer Interface The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department where the item is located and price. The user is then able to purchase one of the items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled. The total purchase price is displayed and the store database is updated. If the desired quantity is not available, the user is then prompted to modify their order.

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
