import express, { Request, Response } from 'express';
import InvoiceService from '../services/invoiceService';

const router = express.Router();

const getInvoices = async (req: Request, res: Response) => {
  try {
    let invoices = await InvoiceService.getInvoices();
    res.status(200).json({ success: true, invoices });
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const createInvoice = async (req: Request, res: Response) => {
  try {
    let invoice = req.body;
    invoice = await InvoiceService.createInvoice(invoice);
    res.status(201).json({ success: true, invoice });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const updateInvoice = async (req: Request, res: Response) => {
  try {
    let invoice = req.body;
    invoice = await InvoiceService.updateInvoice(req.params.id, invoice);

    if (!invoice) {
      res.status(404).json({
        success: false,
        message: 'Invoice Not Found',
      });
    }

    res.status(200).json({ success: true, invoice });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

export const deleteInvoice = async (req: Request, res: Response) => {
  try {
    let invoice = await InvoiceService.deleteInvoice(req.params.id);

    if (!invoice) {
      res.status(404).json({
        success: false,
        message: 'Invoice Not Found',
      });
    }

    res.status(200).json({
      success: true,
      invoice,
    });
  } catch (error: any) {
    res.status(409).json({ success: false, message: error.message });
  }
};

router.get('/', getInvoices);
router.post('/', createInvoice);
router.put('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);

export default router;
