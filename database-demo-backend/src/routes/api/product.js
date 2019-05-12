import express from "express";
import knex from "../../db/index";

const product = express.Router();

// GET ALL
/** http://localhost:8787/api/product/all    with method=GET **/

product.get("/all", function(req, res) {
  knex
    .select()
    .from("Product")
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

// GET ONE
/** http://localhost:8787/api/product/    with method=GET **/
// example: http://localhost:8787/api/product/101

product.get("/:id", function(req, res) {
  knex
    .select()
    .from("Product")
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

/////////////// BY LINE
// example: http://localhost:8787/api/product//byProductLineId/:id GET
product.get("/byProductLineId/:id", function(req, res) {
  knex
    .select()
    .from("Product")
    .where("productLineId", req.params.id)
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

// DELETE ONE
/** http://localhost:8787/api/product/1    with method=DELETE **/
// example: http://localhost:8787/api/product/101

product.delete("/:id", function(req, res) {
  knex("Product")
    .where("id", req.params.id)
    .del()
    .then(data => {
      if (data == 0) {
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

// CREATE ONE
/** http://localhost:8787/api/product/    with method=POST **/

product.post("/", function(req, res) {
  console.log(req.body);
  if (!req.body.name) {
    res
      .status(400)
      .send("Product name is missing!")
      .end();
  } else {
    knex
      .insert(req.body)
      .into("Product")
      .then(data => {
        res.status(200);
        res.send(data);
      })
      .catch(error => {
        if (error.errno == 1062) {
          // https://mariadb.com/kb/en/library/mariadb-error-codes/
          res
            .status(409)
            .send("Product with that name already exists!")
            .end();
        } else {
          res
            .status(500)
            .send("Database error: " + error.errno)
            .end();
        }
      });
  }
});

// EDIT ONE
/** http://localhost:8787/api/product/    with method=PUT **/
// example: http://localhost:8787/api/product (id in the body)

product.put("/", function(req, res) {
  if (!req.body.id || !req.body.name) {
    res
      .status(400)
      .send("Product id or name are missing!")
      .end();
  } else {
    knex("Product")
      .where("id", req.body.id)
      .update(req.body)
      .then(data => {
        if (data == 0) {
          res
            .status(404)
            .send("Invalid row number: " + req.body.id)
            .end();
        } else {
          res
            .status(200)
            .send("Update successful! Count of modified rows: " + data)
            .end();
        }
      })
      .catch(error => {
        if (error.errno == 1062) {
          res
            .status(409)
            .send("Product with that name already exists!")
            .end();
        } else {
          res
            .status(500)
            .send("Database error: " + error.errno)
            .end();
        }
      });
  }
});

export default product;

/* Post e.g. the JSON from below in the POST body
{
	"name": "Jamborees",
    "description": "Jumbo Jambo Jembo",
    "budgetLimit": 1111,
    "isActive": "false"
}
*/

/* Or this JSON array
[{
	"name": "Jamborees2",
    "description": "Jumbo Jambo Jembo",
    "budgetLimit": 1111,
    "isActive": "false"
},
{
	"name": "Jamborees3",
    "description": "Jumbo Jambo Jembo",
    "budgetLimit": 1111,
    "isActive": "false"
}]
*/
