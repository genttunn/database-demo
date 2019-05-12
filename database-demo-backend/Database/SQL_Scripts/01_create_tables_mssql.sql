
/* CREATE TABLES */
-- ------------------------- 80-character-line marker  ------------------------

USE TestDatabase
/* CATEGORY */
CREATE TABLE ProductLine (
	id			INTEGER			NOT NULL	IDENTITY,
	name		VARCHAR(255)	NOT NULL	UNIQUE,

	CONSTRAINT PK_ProductLine	PRIMARY KEY (id)
);

/* PRODUCT */
CREATE TABLE Product (
	id 				INTEGER 		NOT NULL 	IDENTITY,
	productLineId	INTEGER,
	name 			VARCHAR(255) 	NOT NULL, /* UNIQUE OR NOT? */
	description 	VARCHAR(255) 	,
	quantity 		INTEGER 		NOT NULL,
	unit			VARCHAR(50)		,	/* kg, kpl, pkt */
	price			DECIMAL(19,2) 	NOT NULL,

	CONSTRAINT	PK_Product 	PRIMARY KEY (id),

	CONSTRAINT FK_Product_ProductLine
		FOREIGN KEY (productLineId) REFERENCES ProductLine (id)
		--ON DELETE SET NULL
		--ON UPDATE RESTRICT
);

/* CUSTOMER */
CREATE TABLE Customer (
	id 			INTEGER 		NOT NULL 	IDENTITY,
	firstName 	VARCHAR(255) 	NOT NULL DEFAULT 'TBA' ,
	lastName 	VARCHAR(255) 	NOT NULL DEFAULT 'TBA' ,
	email 		VARCHAR(255) 	NOT NULL DEFAULT 'TBA' 	,
	phone		VARCHAR(20)		NOT NULL DEFAULT 'TBA'	,
	address		VARCHAR(255)	NOT NULL DEFAULT 'TBA',
	city		VARCHAR(255)	NOT NULL DEFAULT 'TBA',
	postcode	VARCHAR(10)		NOT NULL DEFAULT 'TBA',
	uid         VARCHAR(255)    NOT NULL UNIQUE,

	CONSTRAINT PK_Customer 	PRIMARY KEY (id)

);


/* RECEIPT */
CREATE TABLE Receipt (
	id 			INTEGER 		NOT NULL 	IDENTITY,
	customerId	INTEGER			NOT NULL,
	receiptDate	DATETIME		NOT NULL 	DEFAULT CURRENT_TIMESTAMP,
	status		INTEGER			NOT NULL,
	comment		VARCHAR(255),

	CONSTRAINT PK_Receipt		PRIMARY KEY (id),
	
	INDEX Receipt_Customer (customerId),
	CONSTRAINT FK_Receipt_Customer
		FOREIGN KEY (customerId) REFERENCES Customer (id)
		ON DELETE CASCADE
		/*ON UPDATE RESTRICT*/

);

/* RECEIPT_PRODUCT */
CREATE TABLE Receipt_Product (
	receiptId 	INTEGER 		NOT NULL,
	productId 	INTEGER 		NOT NULL,
	quantity	INTEGER			NOT NULL,

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

);

/* END */