import { Schema } from 'mongoose';

export interface IBilledItem {
  description: string;
  hsnCode: number;
  quantity: number;
  ratePerKg: number;
  amount: number;
}

export const BilledItemSchema = new Schema({
  description: String,
  hsnCode: Number,
  quantity: Number,
  ratePerKg: Number,
  amount: Number,
});

export interface IBilledTotal {
  itemTotal: number;
  cGST: number;
  sGST: number;
  roundOff: number;
  grandTotal: number;
}

export const BilledTotalSchema = new Schema({
  itemTotal: Number,
  cGST: Number,
  sGST: Number,
  roundOff: Number,
  grandTotal: Number,
});
