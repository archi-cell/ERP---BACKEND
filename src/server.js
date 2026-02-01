import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from  "./routes/productRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import supplierRoutes from "./routes/supplierRoutes.js";
import salesOrderRoutes from "./routes/salesOrderRoutes.js";
import purchaseOrderRoutes from "./routes/purchaseOrderRoutes.js";
import grnRoutes from "./routes/grnRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {origin: "*"}
));

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/customers",customerRoutes);
app.use("/api/suppliers",supplierRoutes);
app.use("/api/sales-order",salesOrderRoutes);
app.use("/api/purchase-orders",purchaseOrderRoutes);
app.use("/api/grn",grnRoutes);
app.use("/api/invoices",invoiceRoutes);
app.use("/api/dashboard",dashboardRoutes);

app.use(errorHandler);


app.get("/", (req, res) => {
    res.send("ERP Backend Running");
});

console.log("USING DB:", process.env.MONGO_URI);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
