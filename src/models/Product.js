import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        sku: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        stock: { type: Number, default: 0 },
        reorderLevel: { type: Number, default: 10 }
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
