import GRN from "../models/GRN.js";
import PurchaseOrder from "../models/PurchaseOrder.js";
import Product from "../models/Product.js";

export const createGRN = async (req, res) => {
    const { purchaseOrder, receivedProducts } = req.body;

    // 1️⃣ Create GRN
    const grn = await GRN.create({
        purchaseOrder,
        receivedProducts
    });

    // 2️⃣ Update product stock
    for (const item of receivedProducts) {
        await Product.findByIdAndUpdate(
            item.product,
            { $inc: { stock: item.quantityReceived } }
        );
    }

    // 3️⃣ Mark Purchase Order as RECEIVED
    await PurchaseOrder.findByIdAndUpdate(
        purchaseOrder,
        { status: "RECEIVED" }
    );

    res.status(201).json(grn);
};
