import express from "express";
import knex from "../../db/index";

const customer = express.Router();

//GET all customers
// http://localhost:8787/api/customer/all

customer.get("/all", function(req, res) {
  knex
    .select()
    .from("Customer")
    .then(data => {
      res
        .status(200)
        .send(data)
        .end();
    })
    .catch(error => {
      res
        .status(500)
        .send("Database error: " + error.errno)
        .end();
    });
});

// ADD NEW CUSTOMER
/** http://localhost:8787/api/customer/    with method=POST **/
// {
// 	"firstName":"Tung",
// 	"lastName":"Huynh",
// 	"email":"htqtung@gmail.com",
// 	"phone":"0469543798",
// 	"address":"Ralssintie 16 H",
// 	"city":"Helsinki",
// 	"postcode":"00720"
// }

customer.post("/", function(req, res) {
  // Just a start of err handling for model for you
  if (req.body.firstName && req.body.email && req.body.uid) {
    knex
      .insert(req.body)
      .returning("*")
      .into("Customer")

      .then(data => {
        console.log(data);
        res.status(200);
        res.send({
          id: data,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
        });
      })
      .catch(error => {
        if (error.errno == 1062) {
          // https://mariadb.com/kb/en/library/mariadb-error-codes/
          res.status(409);
          res.send("Conflict: Customer with that name already exists!");
        } else if (error.errno == 1054) {
          res.status(409);
          //to handle error for backend only
          res.send(
            "error in spelling [either in 'firstName' and or in 'email']."
          );
        } else {
          res.status(400);
          res.send("Database error, Error number: " + error.errno);
          console.log(error.errno);
        }
      });
  } else {
    res.status(406);
    res.end(
      JSON.stringify({
        error: "first name and /or uid and/or email is missing."
      })
    );
  }
});

// customers by id --
/** http://localhost:8787/api/customer/    with method=GET **/
// example: http://localhost:8787/api/customer/1001

customer.get("/:id", function(req, res) {
  knex
    .select()
    .from("Customer")
    .where("id", req.params.id)
    .then(data => {
      if (data.length == 0) {
        res
          .status(404)
          .send("Invalid row number: " + req.params.id)
          .end();
      } else {
        res
          .status(200)
          .send(data)
          .end();
      }
    })
    .catch(error => {
      res
        .status(500)
        .send("Database error: " + error.errno)
        .end();
    });
});

/** http://localhost:8787/api/customer/:id    with method=GET **/
customer.delete("/:id", function(req, res) {
  knex
    .delete()
    .from("Customer")
    .where("id", req.params.id)
    .then(data => {
      if (((data.length === 0 || isNaN(data)) && data == "") || !data) {
        res
          .status(404)
          .send("Invalid row number: " + req.params.id)
          .end();
      } else {
        res
          .status(200)
          .send("Delete successful! Count of deleted rows: " + data)
          .end();
      }
    })
    .catch(error => {
      res
        .status(500)
        .send("Database error: " + error.errno)
        .end();
    });
});

//UPDATE customer
/** http://localhost:8787/api/customer/    with method=PUT **/
// {
// 	"id":"4",
//  	"name":"HuTu",
//  	"firstName":"Tung",
//  	"lastName":"Huynh",
//  	"email":"htqtung@gmail.com",
//  	"phone":"0469543798",
// 	"address":"Ralssintie 16 H",
//  	"city":"Helsinki",
//  	"postcode":"00720"
// }

customer.put("/", function(req, res) {
  // Just a start of err handling for model for you
  if (req.body.id) {
    knex("Customer")
      .where("id", "=", Number(req.body.id))
      .update(req.body)
      .then(data => {
        if (data == 0) {
          res
            .status(404)
            .send("Update not successful, " + data + " row modified")
            .end();
        } else {
          res
            .status(200)
            .send(
              "Successfully update customer data, " + data + " row modified"
            )
            .end();
        }
      })
      .catch(error => {
        if (error.errno == 1062) {
          // https://mariadb.com/kb/en/library/mariadb-error-codes/
          res.status(409);
          res.send("Conflict: Customer with that name already exists!");
        } else if (error.errno == 1054) {
          res.status(409);
          //to handle error for backend only
          res.send(
            "error in spelling [either in 'firstName' and/or in 'lastname' and or in 'email']."
          );
        } else {
          res.status(500);
          res.send("Database error, Error number: " + error.errno);
        }
      });
  } else {
    res.status(400);
    res.end(
      JSON.stringify({
        error: "first name and /or last name and/or email is missing."
      })
    );
  }
});

export default customer;
