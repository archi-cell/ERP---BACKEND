import mongoose from "mongoose";

const purchaseOrderSchema = new mongoose.Schema(
    {
        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Supplier",
            required: true
        },
        products: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                quantity: Number,
                price: Number
            }
        ],
        status: {
            type: String,
            enum: ["CREATED", "RECEIVED"],
            default: "CREATED"
        }
    },
    { timestamps: true }
);

export default mongoose.model("PurchaseOrder", purchaseOrderSchema);
