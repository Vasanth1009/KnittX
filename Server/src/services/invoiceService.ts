import Invoice, { IInvoice } from '../models/invoice';

const getInvoices = async () => {
  let invoices = await Invoice.find();
  return invoices;
};

const createInvoice = async (invoice: IInvoice) => {
  return await Invoice.create(invoice);
};

const updateInvoice = async (id: String, invoice: IInvoice) => {
  return await Invoice.findByIdAndUpdate(id, invoice, {
    new: true,
  });
};

const deleteInvoice = async (id: String) => {
  return await Invoice.findByIdAndUpdate(id);
};

export default {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
