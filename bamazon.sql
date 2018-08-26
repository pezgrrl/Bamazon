DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

Insert into products (product_name, department_name, price, stock_quantity)
values ("Kat Von D Tattoo Eyeliner", "Cosmetics", 20.00, 10),
		("Urban Decay Naked Palette", "Cosmetics", 27.00, 25),
        ("Nars Blush", "Cosmetics", 30.00, 20),
        ("Diorshow Mascara", "Cosmetics", 29.50, 15),
        ("Urban Decay Primer Potion", "Cosmetics", 24.00, 30),
        ("Urban Decay All Nighter Setting Spray", "Cosmetics", 32.00, 25),
        ("Shiseido sunscreen", "Cosmetics", 34.00, 20),
        ("Mario Kart 8", "Video Games", 44.99, 60),
        ("Kingdom Hearts III", "Video Games", 59.99, 1),
        ("Super Mario Party", "Video Games", 59.99, 10);