import { Schema } from 'mongoose';

export interface IBankDetails {
  accNo: string;
  iFSCCode: string;
  bankName: string;
  branchName: string;
}

export const BankDetailSchema = new Schema({
  accNo: String,
  iFSCCode: String,
  bankName: String,
  branchName: String,
});
