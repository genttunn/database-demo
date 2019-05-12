import express from "express";
import knex from "../../db/index";

const receipt = express.Router();


// GET all receipt customer product
// GET http://localhost:8787/api/receipt/all
receipt.get("/all", (req, res) => {
  knex
    .select('r.id', 'c.id', 'c.firstName', 'c.lastName', 'p.name', 'rp.quantity', 'p.unit')
    .from("Receipt AS r")
    .leftJoin("Customer AS c", "r.customerId", 'c.id')
    .leftJoin("Receipt_Product AS rp", "r.id", 'rp.receiptId')
    .leftJoin('Product AS p', 'rp.productId', 'p.id')
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ error: err.message }));
});

// GET receipt customer product by receiptId
// GET http://localhost:8787/api/receipt/receiptId
receipt.get("/:receiptId", (req, res) => {
  let { receiptId } = req.params

  const getCondition = (!isNaN(Number(receiptId)) && Number(receiptId) !== 0)

  if (getCondition) {
    return knex
    .select('r.id', 'c.id', 'c.firstName', 'c.lastName', 'p.name', 'rp.quantity', 'p.unit')
    .from("Receipt AS r")
    .leftJoin("Customer AS c", "r.customerId", 'c.id')
    .leftJoin("Receipt_Product AS rp", "r.id", 'rp.receiptId')
    .leftJoin('Product AS p', 'rp.productId', 'p.id')
    .where({ receiptId })
    .then(data => {
      if (data.length > 0) {
        res.status(200).json(data)
      } else if (data.length === 0) {
        res.status(404).json({error: "Cannot find receipt with id (" + receiptId + ")"})
      }}
    )
    .catch(err => res.status(500).json({ error: err.message }));
  } else {
    const errorMessage = "Parameters must be number!"
    const error = new Error(errorMessage)
    res.status(422).end(error.message)
  }
  
});

// // POST receipt customer
// // POST http://localhost:8787/api/receipt/
// // example request body { "receiptId": "1001", "customerId": "101" }
// receipt.post("/", (req, res, next) => {
//   let { receiptId, customerId } = req.body;

//   const updateCondition = (!isNaN(Number(receiptId)) && Number(receiptId) !== 0
//                           && !isNaN(Number(customerId)) && Number(customerId) !== 0)

//   if (updateCondition) {
//     return knex
//     .select("receiptId", "customerId")
//     .from("Receipt")
//     .where({ receiptId,  customerId })
//     .then(list => {
//       if (list.length === 0) {
//         return knex
//           .insert({ receiptId, customerId })
//           .returning("*")
//           .into("Receipt");
//       } else {
//         throw new Error("The receipt customer is already existed");
//       }
//     })
//     .then(data => {
//       return res.status(200).json({ success: "Receipt customer inserted" });
//     })
//     .catch(err => {
//       if (err.message === "The receipt customer is already existed") {
//         const error = new Error(err.message);
//         error.status = 409;
//         next(error);
//       } else {
//         next(err);
//       }
//     });
//   } else {
//     const errorMessage = "Parameters must be number!"
//     const error = new Error(errorMessage)
//     res.status(422).end(error.message)
//   }
  
// });

// // PUT update receipt-customer (update receiptId OR customerId)
// // PUT http://localhost:8787/api/receipt/
// // Example request body for updating receiptId: 
// // { "oldReceiptId": "1001", "newReceiptId": "1003", "oldCustomerId": "103", "newCustomerId": null }
// // Example request body for updating customerId: 
// // { "oldReceiptId": "1004", "newReceiptId": null, "oldCustomerId": "102", "newCustomerId": "101" }
// receipt.put("/", (req, res, next) => {
//   let { oldReceiptId, newReceiptId, oldCustomerId, newCustomerId } = req.body;

//   //*** Update only customerId OR receiptId once at a time
//   // Update customerId => newReceiptId = null
//   // Update receiptId => newCustomerId = null

//   // Update customerId condition
//   const CustomerId_updateCondition = (newReceiptId === null) 
//                                   && (newCustomerId !== null) 
//                                   && (!isNaN(Number(newCustomerId))) // no inputs like { "newCustomerId": "abc"} 
//                                   && (Number(newCustomerId) !== 0) // no inputs like { "newCustomerId": "" }

//   // Update receiptId condition
//   const ReceiptId_updateCondition = (newCustomerId === null) 
//                                   && (newReceiptId !== null) 
//                                   && (!isNaN(Number(newReceiptId))) // no inputs like { "newReceiptId": "xyz" }
//                                   && (Number(newReceiptId) !== 0) // no inputs like { "newReceiptId": "" }

//   // Update customerId
//   if (CustomerId_updateCondition) {
//     return knex
//     .select("receiptId", "customerId")
//     .from("Receipt")
//     .where({ 
//       receiptId: oldReceiptId, 
//       customerId: oldCustomerId 
//     })
//     .then(list => {
//       if (list.length > 0) {
//         return knex("Receipt")
//           .where({ 
//             receiptId: oldReceiptId,
//             customerId: oldCustomerId 
//           })
//           .update({ customerId: newCustomerId });
//       } else {
//         throw new Error("Cannot find receipt-customer to update");
//       }
//     })
//     .then(() => {
//       return res.status(200).json({ success: "Customer of an receipt-customer updated" });
//     })
//     .catch(err => {
//       if (err.message === "Cannot find receipt-customer to update") {
//         const error = new Error(err.message);
//         res.status(404).end(error.message);
//         next(error);
//       } else {
//         next(err);
//       }
//     });

//   //Update receiptId
//   } else if (ReceiptId_updateCondition) {
//       return knex
//       .select("receiptId", "customerId")
//       .from("Receipt")
//       .where({ 
//         receiptId: oldReceiptId, 
//         customerId: oldCustomerId 
//       })
//       .then(list => {
//         if (list.length > 0) {
//           return knex("Receipt")
//             .where({ 
//               receiptId: oldReceiptId,
//               customerId: oldCustomerId 
//             })
//             .update({ receiptId: newReceiptId });
//         } else {
//           throw new Error("Cannot find receipt-customer to update");
//         }
//       })
//       .then(() => {
//         return res.status(200).json({ success: "Customer of an receipt-customer updated" });
//       })
//       .catch(err => {
//         if (err.message === "Cannot find receipt-customer to update") {
//           const error = new Error(err.message);
//           res.status(404).end(error.message);
//           next(error);
//         } else {
//           next(err);
//         }
//       });
//   } else {
//     const errorMessage_wrongInputs = "Inputs are not correct! "
//                                     + "Inputs' length cannot be 0. "
//                                     + "Inputs CANNOT be NULL (except for customerId & receiptId). "
//                                     + "receiptId and numberId CANNOT be NULL at the same time. "
//                                     + "receiptId and numberId CANNOT be updated at the same time. "
//                                     + "Inputs have to contain a string of number."
//     const error = new Error(errorMessage_wrongInputs)
//     res.status(422).json({
//       error: error.message,
//       updateReceiptId_example: { "oldReceiptId": "1001", "newReceiptId": "1003", "oldCustomerId": "103", "newCustomerId": null },
//       updateCustomerId_example: { "oldReceiptId": "1004", "newReceiptId": null, "oldCustomerId": "102", "newCustomerId": "101" }
//     })
//   }
  
    
// });

// // DELETE delete receipt customer
// // DELETE http://localhost:8787/api/receipt/1001/103
// receipt.delete("/:receiptId/:customerId", (req, res, next) => {
//   let receiptId = req.params.receiptId;
//   let customerId = req.params.customerId;

//   const deleteCondition = (!isNaN(Number(receiptId)) && Number(receiptId) !== 0
//                           && !isNaN(Number(customerId)) && Number(customerId) !== 0)

//   if (deleteCondition) {
//     knex("Receipt")
//     .where({ receiptId, customerId })
//     .del()
//     .then(data => {
//       if (data > 0) {
//         res.status(200).json({ success: "Receipt customer deleted" })
//       } else if (data === 0) {
//         const error = new Error("Cannot find receipt-customer with id (" + receiptId + ", " + customerId + ") to delete!")
//         res.status(404).end(error.message)
//       }
//     }) 
//     .catch(err => next(err));
//   } else {
//     const errorMessage = "Parameters must be number!"
//     const error = new Error(errorMessage)
//     res.status(422).end(error.message)
//   }
  
// });

export default receipt;
