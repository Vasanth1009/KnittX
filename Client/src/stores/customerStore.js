import axios from '../helpers/http-client';
import showNotification from '../helpers/NotificationStatus';
import ActionTypes from './types';

const url = '/customer';

export const getCustomers = () => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    if (data.success) {
      dispatch({
        type: ActionTypes.GET_CUSTOMERS,
        payload: data.customers,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addCustomer = (customer, callback) => async (dispatch) => {
  try {
    const { data } = await axios.post(url, customer);
    if (data.success) {
      dispatch({ type: ActionTypes.ADD_CUSTOMER, payload: data.customer });
      showNotification('Customer added successfully!!!', 'Success');
      callback();
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const editCustomer = (id, customer, callback) => async (dispatch) => {
  try {
    const { data } = await axios.put(`${url}/${id}`, customer);
    if (data.success) {
      dispatch({ type: ActionTypes.UPDATE_CUSTOMER, payload: data.customer });
      showNotification('Customer updated successfully!!!', 'Success');
      callback();
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    if (data.success) {
      dispatch({ type: ActionTypes.DELETE_CUSTOMER, payload: id });
      showNotification('Customer deleted successfully!!!', 'Success');
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMultipleCustomer = (ids) => async (dispatch) => {
  try {
    const { data } = await axios.delete(url, { data: ids });
    if (data.success) {
      dispatch({ type: ActionTypes.DELETE_MULTIPLE_CUSTOMER, payload: ids });
      showNotification('Customers deleted successfully!!!', 'Success');
    }
  } catch (error) {
    console.log(error.message);
  }
};

const customerReducer = (customers = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CUSTOMERS:
      return payload;
    case ActionTypes.ADD_CUSTOMER:
      return [...customers, payload];
    case ActionTypes.UPDATE_CUSTOMER:
      return customers.map((customer) =>
        customer._id === payload._id ? payload : customer
      );
    case ActionTypes.DELETE_CUSTOMER:
      return customers.filter((customer) => customer._id !== payload);
    case ActionTypes.DELETE_MULTIPLE_CUSTOMER:
      payload.forEach((id) => {
        customers = customers.filter((customer) => customer._id !== id);
      });
      return customers;
    default:
      return customers;
  }
};

export default customerReducer;
