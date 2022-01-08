import axios from '../helpers/http-client';
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

export const deleteCustomer = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${url}/${id}`);
    if (data.success) {
      dispatch({ type: ActionTypes.DELETE_CUSTOMERS, payload: id });
    }
  } catch (error) {
    console.log(error.message);
  }
};


const customerReducer = (customers = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CUSTOMERS:
      return payload;
    case ActionTypes.DELETE_CUSTOMERS:
      return customers.filter((customer) => customer._id !== payload);
    default:
      return customers;
  }
};

export default customerReducer;
