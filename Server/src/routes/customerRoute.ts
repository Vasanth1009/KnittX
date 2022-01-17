import express from 'express';

import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteMultipleCustomer,
} from '../controllers/customerController';

const router = express.Router();

router.get('/', getCustomers);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);
router.delete('/', deleteMultipleCustomer);

export default router;
