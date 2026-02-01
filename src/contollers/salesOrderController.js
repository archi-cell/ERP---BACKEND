import SalesOrder from "../models/SalesOrder.js";

export const createSalesOrder = async (req, res) => {
    const order = await SalesOrder.create(req.body);
    res.status(201).json(order);
};

export const getSalesOrders = async (req, res) => {
    const orders = await SalesOrder
        .find()
        .populate("customer")
        .populate("products.product");

    res.json(orders);
};
