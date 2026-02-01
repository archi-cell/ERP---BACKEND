import express from "express";
import {
    createCustomer,
    getCustomers,
    updateCustomer,
    deleteCustomer
} from "../controllers/customerController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCustomers);

router.post(
    "/",
    protect,
    authorizeRoles("ADMIN", "SALES"),
    createCustomer
);

router.put(
    "/:id",
    protect,
    authorizeRoles("ADMIN", "SALES"),
    updateCustomer
);

router.delete(
    "/:id",
    protect,
    authorizeRoles("ADMIN"),
    deleteCustomer
);

export default router;
