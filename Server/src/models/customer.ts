import mongoose, { Schema, Document } from 'mongoose';

export interface ICustomer extends Document {
  name: String;
  nickName: String;
  address: IAddress;
  gstIN: String;
  phoneNo: Number;
  contactPerson: String;
  emailId: String;
  isDeleted: Boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface IAddress {
  street: String;
  city: String;
  pinCode: String;
  state: String;
  country: String;
}

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Customer name required'],
  },
  nickName: String,
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
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

export default mongoose.model<ICustomer>(
  'Customer',
  CustomerSchema,
  'customers'
);
