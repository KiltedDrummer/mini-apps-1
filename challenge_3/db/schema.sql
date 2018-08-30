CREATE DATABASE orders

USE orders

CREATE TABLE users (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	email varchar(255) NOT NULL,
	password varchar(100) NOT NULL,
	address_line_1 varchar(255) NOT NULL,
	address_line_2. varchar(255),
	city varchar(50) NOT NULL,
	state varchar(50) NOT NULL,
	zip_code varchar(31) NOT NULL,
	phone_number varchar(16) NOT NULL,
	creditcard_num varchar(25) NOT NULL,
	expiration_date varchar(8) NOT NULL,
	CVV int NOT NULL,
	billing_zip_code varchar(16) NOT NULL
)