import Invoice from "../models/Invoice.js";
import SalesOrder from "../models/SalesOrder.js";

export const createInvoice = async (req, res) => {
    const { salesOrder } = req.body;

    // Fetch sales order
    const order = await SalesOrder.findById(salesOrder);
    if (!order) {
        return res.status(404).json({ message: "Sales order not found" });
    }

    // Generate invoice number
    const invoiceNumber = `INV-${Date.now()}`;

    const invoice = await Invoice.create({
        salesOrder,
        invoiceNumber,
        amount: order.totalPrice
    });

    res.status(201).json(invoice);
};

export const getInvoices = async (req, res) => {
    const invoices = await Invoice.find()
        .populate("salesOrder");

    res.json(invoices);
};

export const getInvoiceById = async (req, res) => {
    const invoice = await Invoice.findById(req.params.id)
        .populate("salesOrder");

    res.json(invoice);
};
