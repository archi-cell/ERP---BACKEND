import express from "express";
import {
    createSalesOrder,
    getSalesOrders
} from "../controllers/salesOrderController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getSalesOrders);

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "SALES"),
    createSalesOrder
);

export default router;
