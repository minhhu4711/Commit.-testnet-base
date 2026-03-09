CREATE TABLE Products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock_quantity INT
);

INSERT INTO Products VALUES (1, 'Laptop Dell', 'Electronics', 1500.00, 10);
INSERT INTO Products VALUES (2, 'Mouse Logitech', 'Accessories', 25.50, 50);
Tạo bảng 'Products' để lưu trữ thông tin về các sản phẩm trong hệ thống
CREATE TABLE Products (
    -- Cột product_id: Mã định danh duy nhất cho mỗi sản phẩm, dùng làm Khóa chính (PRIMARY KEY)
    product_id INT PRIMARY KEY,
-- Cột product_name: Tên của sản phẩm, cho phép lưu trữ chuỗi ký tự tối đa 100 ký tự
    product_name VARCHAR(100),
    
    -- Cột category: Phân loại sản phẩm (ví dụ: Điện tử, Phụ kiện), tối đa 50 ký tự
    category VARCHAR(50),
-- Cột price: Giá sản phẩm, kiểu số thập phân (DECIMAL) 
    -- 10 là tổng số chữ số, 2 là số chữ số sau dấu phẩy (Ví dụ: 99999999.99)
    price DECIMAL(10, 2),
    
    -- Cột stock_quantity: Số lượng hàng hiện có trong kho, kiểu số nguyên (INT)
    stock_quantity INT
);
