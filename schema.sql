create database Details;

use Details;

create table userss(
id integer auto_increment primary key,
Name varchar(100) not null,
age int not null,
country varchar(50) not null,
Email varchar(100) not null unique,
Password varchar(20) not null
);

  create database Customers;

use Customers; 
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    FullName VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Phone VARCHAR(15) NOT NULL,
    Address VARCHAR(255),
    City VARCHAR(50),
    State VARCHAR(50),
    PostalCode VARCHAR(10),
    Country VARCHAR(50),
    RegistrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



create database products;

use products; 
CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Description TEXT,
    Category VARCHAR(50),
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    ImageURL VARCHAR(255),
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



 create database Orders;

use Orders;
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT NOT NULL,
    OrderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    TotalAmount DECIMAL(10, 2) NOT NULL,
    OrderStatus ENUM('Pending', 'Shipped', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    PaymentMethod ENUM('Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery') NOT NULL,
    ShippingAddress VARCHAR(255),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE
);



CREATE TABLE OrderDetails (
    OrderDetailID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10, 2) NOT NULL,
    TotalPrice DECIMAL(10, 2) GENERATED ALWAYS AS (Quantity * UnitPrice) STORED,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);


CREATE TABLE Categories (
    CategoryID INT AUTO_INCREMENT PRIMARY KEY,
    CategoryName VARCHAR(100) NOT NULL UNIQUE,
    Description TEXT
);


CREATE TABLE ProductReviews (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT NOT NULL,
    CustomerID INT NOT NULL,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    ReviewText TEXT,
    ReviewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE
);


CREATE TABLE Payments (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    PaymentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    AmountPaid DECIMAL(10, 2) NOT NULL,
    PaymentMethod ENUM('Credit Card', 'Debit Card', 'PayPal', 'Cash on Delivery') NOT NULL,
    PaymentStatus ENUM('Successful', 'Failed', 'Pending') DEFAULT 'Pending',
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);



CREATE TABLE Shipping (
    ShippingID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID INT NOT NULL,
    ShippingDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ExpectedDeliveryDate TIMESTAMP,
    DeliveryStatus ENUM('Pending', 'In Transit', 'Delivered', 'Returned') DEFAULT 'Pending',
    TrackingNumber VARCHAR(50),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);
