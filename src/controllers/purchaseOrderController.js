import PurchaseOrder from "../models/PurchaseOrder.js";

export const createPurchaseOrder = async (req, res) => {
    const order = await PurchaseOrder.create(req.body);
    res.status(201).json(order);
};

export const getPurchaseOrders = async (req, res) => {
    const orders = await PurchaseOrder
        .find()
        .populate("supplier")
        .populate("products.product");

    res.json(orders);
};
