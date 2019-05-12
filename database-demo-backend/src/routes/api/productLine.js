import express from "express";
import knex from "../../db/index";

const productLine = express.Router();

// GET ALL
/** http://localhost:8787/api/productLine/all    with method=GET **/

productLine.get("/all", function(req, res) {
  knex
    .select()
    .from("ProductLine")
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

productLine.delete("/:id", function(req, res) {
  console.log(req.params.id);
  knex("ProductLine")
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
/** http://localhost:8787/api/productLine/    with method=POST **/

productLine.post("/", function(req, res) {
  if (!req.body.name) {
    res
      .status(400)
      .send("ProductLine name is missing!")
      .end();
  } else {
    knex
      .insert(req.body)
      .into("ProductLine")
      .then(data => {
        res.status(200);
        res.send(data);
      })
      .catch(error => {
        if (error.errno == 1062) {
          // https://mariadb.com/kb/en/library/mariadb-error-codes/
          res
            .status(409)
            .send("ProductLine with that name already exists!")
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

export default productLine;
