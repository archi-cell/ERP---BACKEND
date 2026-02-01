import Supplier from "../models/Supplier.js";

export const createSupplier = async (req, res) => {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
};

export const getSuppliers = async (req, res) => {
    const suppliers = await Supplier.find();
    res.json(suppliers);
};

export const updateSupplier = async (req, res) => {
    const supplier = await Supplier.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(supplier);
};

export const deleteSupplier = async (req, res) => {
    await Supplier.findByIdAndDelete(req.params.id);
    res.json({ message: "Supplier deleted" });
};
