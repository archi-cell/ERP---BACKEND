import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Product from "../models/Product.js";
import Customer from "../models/Customer.js";
import Supplier from "../models/Supplier.js";
import SalesOrder from "../models/SalesOrder.js";
import PurchaseOrder from "../models/PurchaseOrder.js";
import Invoice from "../models/Invoice.js";

const router = express.Router();

router.get("/", protect, async (req, res) => {
    const data = {
        products: await Product.countDocuments(),
        customers: await Customer.countDocuments(),
        suppliers: await Supplier.countDocuments(),
        salesOrders: await SalesOrder.countDocuments(),
        purchaseOrders: await PurchaseOrder.countDocuments(),
        invoices: await Invoice.countDocuments()
    };

    res.json(data);
});

export default router;
