import mongoose from "mongoose";

const grnSchema = new mongoose.Schema(
    {
        purchaseOrder: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PurchaseOrder",
            required: true
        },
        receivedProducts: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                quantityReceived: Number
            }
        ],
        receivedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export default mongoose.model("GRN", grnSchema);
