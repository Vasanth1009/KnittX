import { Request, Response } from 'express';
import CustomerService from '../services/customerService';

export const getCustomers = async (req: Request, res: Response) => {
  try {
    let customers = await CustomerService.getCustomers();
    res.status(200).json({ success: true, customers });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  try {
    let customer = req.body;
    customer = await CustomerService.createCustomer(customer);
    res.status(201).json({ success: true, customer });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    let customer = req.body;
    customer = await CustomerService.updateCustomer(req.params.id, customer);

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
    let customer = await CustomerService.deleteCustomer(req.params.id);

    if (!customer) {
      res.status(404).json({
        success: false,
        message: 'Customer Not Found',
      });
    }

    res.status(200).json({
      success: true,
      customer,
    });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const deleteMultipleCustomer = async (req: Request, res: Response) => {
  try {
    let customerIds = req.body;
    const customers = await CustomerService.deleteMultipleCustomer(customerIds);

    res.status(200).json({
      success: true,
      customers,
    });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};
