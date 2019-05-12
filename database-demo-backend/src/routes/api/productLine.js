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

export default productLine;

