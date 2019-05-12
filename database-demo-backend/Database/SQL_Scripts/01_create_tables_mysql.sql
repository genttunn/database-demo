/* CREATE TABLES */
-- ------------------------- 80-character-line marker  ------------------------

USE jZasgJwrrP;
/* CATEGORY */
CREATE TABLE ProductLine (
	id			INTEGER			NOT NULL	AUTO_INCREMENT,
	name		VARCHAR(255)	NOT NULL	UNIQUE,

	CONSTRAINT PK_ProductLine	PRIMARY KEY (id)
) ENGINE=InnoDB;
ALTER TABLE ProductLine AUTO_INCREMENT=1;

/* PRODUCT */
CREATE TABLE Product (
	id 				INTEGER 		NOT NULL 	AUTO_INCREMENT,
	productLineId	INTEGER,
	name 			VARCHAR(255) 	NOT NULL, /* UNIQUE OR NOT? */
	description 	VARCHAR(255) 	NOT NULL,
	quantity 		INTEGER 		NOT NULL,
	unit			VARCHAR(50)		NOT NULL,	/* kg, kpl, pkt */
	price			DECIMAL(19,2) 	NOT NULL,

	CONSTRAINT	PK_Product 	PRIMARY KEY (id),

	CONSTRAINT FK_Product_ProductLine
		FOREIGN KEY (productLineId) REFERENCES ProductLine (id)
		ON DELETE CASCADE
		ON UPDATE RESTRICT
) ENGINE=InnoDB;
ALTER TABLE Product AUTO_INCREMENT=101;

/* CUSTOMER */
CREATE TABLE Customer (
	id 			INTEGER 		NOT NULL 	AUTO_INCREMENT,
	firstName 	VARCHAR(255) 	NOT NULL DEFAULT 'TBA' ,
	lastName 	VARCHAR(255) 	NOT NULL DEFAULT 'TBA' ,
	email 		VARCHAR(255) 	NOT NULL DEFAULT 'TBA' UNIQUE	,
	phone		VARCHAR(20)		NOT NULL DEFAULT 'TBA'	,
	address		VARCHAR(255)	NOT NULL DEFAULT 'TBA',
	city		VARCHAR(255)	NOT NULL DEFAULT 'TBA',
	postcode	VARCHAR(10)		NOT NULL DEFAULT 'TBA',
	-- uid         VARCHAR(32)    NOT NULL UNIQUE,

	CONSTRAINT PK_Customer 	PRIMARY KEY (id)

);
ALTER TABLE Customer AUTO_INCREMENT=1001;

/* RECEIPT */
CREATE TABLE Receipt (
	id 			INTEGER 		NOT NULL 	AUTO_INCREMENT,
	customerId	INTEGER			NOT NULL,
	receiptDate	TIMESTAMP		NOT NULL,
	status		INTEGER			NOT NULL,
	comment		VARCHAR(255),

	CONSTRAINT PK_Receipt		PRIMARY KEY (id),
	
	INDEX Receipt_Customer (customerId),
	CONSTRAINT FK_Receipt_Customer
		FOREIGN KEY (customerId) REFERENCES Customer (id)
		/*ON DELETE SET NULL
		ON UPDATE RESTRICT*/

) ENGINE=InnoDB;
ALTER TABLE Receipt AUTO_INCREMENT=10001;

/* RECEIPT_PRODUCT */
CREATE TABLE Receipt_Product (
	receiptId 	INTEGER 		NOT NULL,
	productId 	INTEGER 		NOT NULL,

	CONSTRAINT PK_Receipt_Product PRIMARY KEY (receiptId, productId),
	
	INDEX ReceiptProduct_Receipt (receiptId),
	CONSTRAINT FK_ReceiptProduct_Receipt
		FOREIGN KEY (receiptId) REFERENCES Receipt (id)
		/*ON DELETE CASCADE
		ON UPDATE RESTRICT,*/,
	CONSTRAINT FK_ReceiptProduct_Product
		FOREIGN KEY (productId) REFERENCES Product (id)
		/*ON DELETE RESTRICT
		ON UPDATE RESTRICT*/

) ENGINE=InnoDB;

CREATE TABLE Receipt_Product (
	receiptId 	INTEGER 		NOT NULL,
	productId 	INTEGER 		NOT NULL,

	CONSTRAINT PK_Receipt_Product PRIMARY KEY (receiptId, productId),
	
	INDEX ReceiptProduct_Receipt (receiptId),
	CONSTRAINT FK_ReceiptProduct_Receipt
		FOREIGN KEY (receiptId) REFERENCES Receipt (id)
		/*ON DELETE CASCADE
		ON UPDATE RESTRICT,*/,
	CONSTRAINT FK_ReceiptProduct_Product
		FOREIGN KEY (productId) REFERENCES Product (id)
		/*ON DELETE RESTRICT
		ON UPDATE RESTRICT*/

) ENGINE=InnoDB;

/* PAYMENT */
-- CREATE TABLE Payment (
-- 	id 					INTEGER 		NOT NULL 	AUTO_INCREMENT,
-- 	customerId 			INTEGER 		NOT NULL,
-- 	paymentTimeStamp 	TIMESTAMP(3) 	NOT NULL 	DEFAULT CURRENT_TIMESTAMP,
-- 	amount				DECIMAL(19,2)	NOT NULL,

-- 	CONSTRAINT PK_Payment PRIMARY KEY (id),
	
-- 	INDEX Payment (id),
-- 	CONSTRAINT FK_Payment_Customer
-- 		FOREIGN KEY (customerId) REFERENCES Customer (id)
-- 		/*ON DELETE RESTRICT
-- 		ON UPDATE RESTRICT,*/

-- ) ENGINE=InnoDB;
-- ALTER TABLE Payment AUTO_INCREMENT=100001;

/* END */