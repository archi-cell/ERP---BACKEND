import express from "express";
import {
    createPurchaseOrder,
    getPurchaseOrders
} from "../controllers/purchaseOrderController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getPurchaseOrders);

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "PURCHASE"),
    createPurchaseOrder
);

export default router;
