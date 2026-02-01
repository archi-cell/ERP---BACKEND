import mongoose from "mongoose";

const salesOrderSchema = new mongoose.Schema(
    {
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
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
            enum: ["CREATED", "CONFIRMED", "DELIVERED"],
            default: "CREATED"
        },
        totalPrice: Number
    },
    { timestamps: true }
);

export default mongoose.model("SalesOrder", salesOrderSchema);
