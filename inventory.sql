CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock_quantity INT
);

INSERT INTO Products VALUES (1, 'Laptop Dell', 'Electronics', 1500.00, 10);
INSERT INTO Products VALUES (2, 'Mouse Logitech', 'Accessories', 25.50, 50);
