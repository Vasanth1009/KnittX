import mongoose, { Schema, Document } from 'mongoose';
import { CustomerSchema, ICustomer } from './customer';
import {
  BilledItemSchema,
  BilledTotalSchema,
  IBilledItem,
  IBilledTotal,
} from './billedItem';
import {
  ITermsAndConditions,
  TermsAndConditionsSchema,
} from './TermsAndConditions';
import { BankDetailSchema, IBankDetails } from './bankDetails';

export interface IInvoice extends Document {
  invoiceNo: number;
  invoiceDate: Date;
  dcNo: number;
  billedBy: ICustomer;
  billedTo: ICustomer;
  billedItems: IBilledItem[];
  total: IBilledTotal;
  termsAndConditions: ITermsAndConditions;
  bankDetails: IBankDetails;
}

const InvoiceSchema = new Schema({
  invoiceNo: Number,
  invoiceDate: Date,
  dcNo: Number,
  billedBy: CustomerSchema,
  billedTo: CustomerSchema,
  billedItems: [BilledItemSchema],
  total: BilledTotalSchema,
  termsAndConditions: TermsAndConditionsSchema,
  bankDetails: BankDetailSchema,
});

export default mongoose.model<IInvoice>('Invoice', InvoiceSchema, 'invoices');
