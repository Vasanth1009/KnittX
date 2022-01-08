import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: string;
  nickName: string;
  address: IAddress;
  gstIN: string;
  phoneNo: number;
  contactPerson: string;
  emailId: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IAddress {
  street: string;
  city: string;
  pinCode: string;
  state: string;
  country: string;
}

const Customer = new Schema({
  name: {
    type: String,
    required: [true, 'Customer name required'],
  },
  nickName: String,
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  gstIN: {
    type: String,
    required: true,
  },
  contactPerson: String,
  phoneNo: Number,
  emailId: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: new Date(Date.now()),
  },
  updatedAt: {
    type: Date,
    default: new Date(Date.now()),
  },
});

export default mongoose.model<ICustomer>('Customer', Customer, 'customers');
