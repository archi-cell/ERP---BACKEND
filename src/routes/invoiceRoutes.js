import express from "express";
import {
    createInvoice,
    getInvoices,
    getInvoiceById
} from "../controllers/invoiceController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "SALES"),
    createInvoice
);

router.get("/", protect, getInvoices);

router.get("/:id", protect, getInvoiceById);

export default router;
