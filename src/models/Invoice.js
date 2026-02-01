import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
    {
        salesOrder: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SalesOrder",
            required: true
        },
        invoiceNumber: {
            type: String,
            required: true,
            unique: true
        },
        amount: {
            type: Number,
            required: true
        },
        issuedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

export default mongoose.model("Invoice", invoiceSchema);
