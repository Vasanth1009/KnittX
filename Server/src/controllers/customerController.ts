import { Request, Response } from 'express';
import Customer, { ICustomer } from '../models/customer';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    let customers = await Customer.find();
    customers = customers.filter((customer) => customer.isDeleted === false);
    res.status(200).json({ success: true, customers });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    let customer = req.body;
    customer = await Customer.create(customer);
    res.status(201).json({ success: true, customer });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    let customer = req.body;
    customer = await Customer.findByIdAndUpdate(req.params.id, customer, {
      new: true,
    });

    if (!customer) {
      res.status(404).json({
        success: false,
        message: 'Customer Not Found',
      });
    }

    res.status(200).json({ success: true, customer });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    let customer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: { isDeleted: true } },
      { new: true }
    );

    if (!customer) {
      res.status(404).json({
        success: false,
        message: 'Customer Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Customer deleted sucessfully',
    });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const deleteMultipleCustomer = async (req: Request, res: Response) => {
  try {
    let customerIds = req.body;
    await Customer.updateMany(
      { _id: { $in: customerIds } },
      { $set: { isDeleted: true } },
      { multi: true }
    );

    res.status(200).json({
      success: true,
      message: 'Customers deleted sucessfully',
    });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};
