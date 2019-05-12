import express from "express";

import reset_service from "./reset_service";
import product from "./product";
import productLine from "./productLine";
import receipt from "./receipt";
import customer from "./customer";

const routes = express.Router();
routes.use("/reset_service", reset_service);
routes.use("/product", product);
routes.use("/receipt", receipt);
routes.use("/productLine", productLine);
routes.use("/customer", customer);

export default routes;
