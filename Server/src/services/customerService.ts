import Customer, { ICustomer } from '../models/customer';

const getCustomers = async () => {
  let customers = await Customer.find();
  return customers.filter((customer) => customer.isDeleted === false);
};

const createCustomer = async (customer: ICustomer) => {
  return await Customer.create(customer);
};

const updateCustomer = async (id: String, customer: ICustomer) => {
  return await Customer.findByIdAndUpdate(id, customer, {
    new: true,
  });
};

const deleteCustomer = async (id: String) => {
  return await Customer.findByIdAndUpdate(
    id,
    { $set: { isDeleted: true } },
    { new: true }
  );
};

const deleteMultipleCustomer = async (customerIds: String[]) => {
  return await Customer.updateMany(
    { _id: { $in: customerIds } },
    { $set: { isDeleted: true } },
    { multi: true }
  );
};

export default {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteMultipleCustomer,
};
