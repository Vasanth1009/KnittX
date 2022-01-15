import { Button } from 'evergreen-ui';
import { Form, Input, Select } from 'antd';
import { states } from '../../constants/States';
import { countries } from '../../constants/Countries';
import { useState } from 'react';
import { addCustomer, getCustomers } from '../../stores/customerStore';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CustomerForm() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customer, setCustomer]= useState(
    {
      name: '',
      country: 'IN',
      state: ''
    }
  )

  const redirecToCustomerList = () => {
    navigate('/customers');
  }

  const onSubmit = (data) => {
   dispatch(addCustomer(data, redirecToCustomerList));
  }
  return (
    <div className="h-full flex items-center justify-center font-semibold">
      <div className="bg-white w-full lg:w-10/12  px-6 py-6 rounded-md shadow-md text-black">
        <Form form={form} layout="vertical" onFinish={onSubmit} 
        initialValues={{['address']:{
          'country':'IN',
          'state':'TN'
        }          
        }}
        >
          <div className="md:flex gap-4">
            <Form.Item name={'name'} label="Customer Name" className="md:w-1/2" required>
              <Input
                className="form-control"
                required
              />
            </Form.Item>
            <Form.Item name={'nickName'} label="Alias (Nick Name)" className="md:w-1/2">
              <Input className="form-control"  />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item name={'email'} label="Email" className="md:w-1/2">
              <Input className="form-control"  />
            </Form.Item>
            <Form.Item name={'phoneNo'} label="Phone Number" className="md:w-1/2">
              <Input className="form-control"  />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item name={['address','country']} label="Country" className="md:w-1/2">
              <Select showSearch
              onChange={(value)=>{
                if(value=='IN')
                  form.setFieldsValue({address:{
                    state:'TN'
                  }})
                else
                  form.setFieldsValue({address:{
                    state:''
                  }})
                
                setCustomer({country:value});
              }}
              >
                {countries.map((country) => {
                  return <Option key={country.value}>{country.name}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item name={'gstIN'} label="GSTIN" className="md:w-1/2">
              <Input className="form-control"/>
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item name={['address','street']} label="Street" className="md:w-1/2">
              <Input className="form-control"/>
            </Form.Item>
            <Form.Item name={['address','city']} label="City" className="md:w-1/2">
              <Input className="form-control" />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item name={['address','state']} label="State" className="md:w-1/2">
              {customer.country == 'IN' ?
                (<Select showSearch
                >
                {states.map((state) => {
                  return <Option key={state.value}>{state.name}</Option>;
                })}
              </Select>) : (<Input className='form-control' value='' /> )}
            </Form.Item>
            <Form.Item name={['address','pinCode']} label="Postal Code" className="md:w-1/2">
              <Input className="form-control" />
            </Form.Item>
          </div>

          <Button appearance='primary' type='submit'>Save</Button>
        </Form>
      </div>
    </div>
  );
}

export default CustomerForm;
