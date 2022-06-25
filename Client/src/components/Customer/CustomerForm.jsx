import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'evergreen-ui';
import { Form, Input, Select } from 'antd';

import { states } from '../../constants/States';
import { countries } from '../../constants/Countries';
import { addCustomer, editCustomer } from '../../stores/customerStore';
import { useEffect, useState } from 'react';

const CustomerForm = () => {
  const initialValues = {
    name: '',
    address: {
      country: 'IN',
      state: 'TN',
    },
    nickName: '',
    emailId: '',
    gstIN: '',
    contactPerson: '',
    phoneNo: '',
  };

  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const customers = useSelector((state) => state.customers);
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    if (id && customers.length) {
      setCustomer(customers.find((customer) => customer._id === id));
      form.setFieldsValue({
        name: customer.name,
        address: customer.address,
        nickName: customer.nickName,
        emailId: customer.emailId,
        gstIN: customer.gstIN,
        contactPerson: customer.contactPerson,
        phoneNo: customer.phoneNo,
      });
    }
  }, [id, customers, customer, form]);

  const redirectToCustomerList = () => {
    navigate('/customers');
  };

  const onSubmit = (data) => {
    if (id) {
      dispatch(editCustomer(id, data, redirectToCustomerList));
    } else {
      dispatch(addCustomer(data, redirectToCustomerList));
    }
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      string: '${label} is not a valid!',
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  return (
    <div className="h-full flex items-center justify-center font-semibold">
      <div className="bg-white w-full lg:w-10/12  px-6 py-6 rounded-md shadow-md text-black">
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          initialValues={initialValues}
          validateMessages={validateMessages}
        >
          <h3 className="mb-5 font-semibold">Basic Information</h3>
          <div className="md:flex gap-4">
            <Form.Item
              name="name"
              label="Customer Name"
              className="md:w-1/2 font-medium"
              rules={[{ type: 'string' }, { required: true }]}
              hasFeedback
            >
              <Input className="form-control" />
            </Form.Item>

            <Form.Item
              name="nickName"
              label="Alias (Nick Name)"
              className="md:w-1/2 font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name="contactPerson"
              label="Contact Person"
              className="md:w-1/2 font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
            <Form.Item
              name="gstIN"
              label="GSTIN"
              className="md:w-1/2 font-medium"
              rules={[{ type: 'string' }, { required: true }]}
              hasFeedback
            >
              <Input className="form-control" />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name="phoneNo"
              label="Phone Number"
              className="md:w-1/2 font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
            <Form.Item
              name="emailId"
              label="Email"
              className="md:w-1/2 font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
          </div>

          <h3 className="my-5 font-semibold">Address</h3>
          <div className="md:flex gap-4">
            <Form.Item
              name={['address', 'street']}
              label="Street"
              className="w-full font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name={['address', 'city']}
              label="City"
              className="md:w-1/2 font-medium"
              rules={[{ type: 'string' }, { required: true }]}
              hasFeedback
            >
              <Input className="form-control" />
            </Form.Item>
            <Form.Item
              name={['address', 'pinCode']}
              label="Postal Code"
              className="md:w-1/2 font-medium"
            >
              <Input className="form-control" />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item
              name={['address', 'country']}
              label="Country"
              className="md:w-1/2 font-medium"
            >
              <Select
                showSearch
                optionFilterProp="children"
                onChange={(value) => {
                  if (value === 'IN') {
                    form.setFieldsValue({
                      address: {
                        state: 'TN',
                      },
                    });
                  } else {
                    form.setFieldsValue({
                      address: {
                        state: '',
                      },
                    });
                  }
                }}
              >
                {countries.map((country) => {
                  return <Option key={country.value}>{country.name}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item
              label="State"
              className="md:w-1/2 font-medium"
              shouldUpdate={(oldValue, newValue) => oldValue !== newValue}
            >
              {({ getFieldValue }) =>
                getFieldValue(['address', 'country']) === 'IN' ? (
                  <Form.Item name={['address', 'state']}>
                    <Select showSearch optionFilterProp="children">
                      {states.map((state) => {
                        return <Option key={state.value}>{state.name}</Option>;
                      })}
                    </Select>
                  </Form.Item>
                ) : (
                  <Form.Item name={['address', 'state']}>
                    <Input className="form-control" />
                  </Form.Item>
                )
              }
            </Form.Item>
          </div>

          <Button
            appearance="primary"
            type="submit"
            size="large"
            className="w-full md:w-20"
          >
            <div className="text-base">Save</div>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CustomerForm;
