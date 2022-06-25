import {
  Avatar,
  DatePicker,
  Divider,
  Form,
  Input,
  Select,
  Space,
  Steps,
} from 'antd';
import React, { useEffect, useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import {
  HiOutlinePencilAlt,
  UserOutlined,
  IoClose,
  PlusCircleOutlined,
} from '../../constants/Icons';
import { useSelector } from 'react-redux';
import { Button } from 'evergreen-ui';
import InvoiceTable from './InvoiceTable';

const InvoiceForm = () => {
  const initialValues = {};
  const initialBankDetails = {
    accountNo: '',
    ifsc: '',
    bank: '',
    branch: '',
  };
  const initialTerms = [
    'Thanks for doing Business with us!',
    'Subject to Tirupur jurisdiction only.',
  ];
  const customers = useSelector((state) => state.customers);
  const [selectedClient, setSelectedClient] = useState();
  const [selectedInput, setSelectedInput] = useState(null);
  const [bankDetails, setBankDetails] = useState(initialBankDetails);
  const [terms, setTerms] = useState(initialTerms);
  const { Option } = Select;
  const { Step } = Steps;
  const [form] = Form.useForm();

  useEffect(() => {});

  const removeTerm = (index) => {
    setTerms([...terms.slice(0, index), ...terms.slice(index + 1)]);
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
    <div className="invoices">
      <PageHeader
        heading="Invoice Form"
        path="invoice-preview"
        buttonText="Invoice Preview"
      />
      <div className="flex justify-center items-center h-40">
        <Steps size="small" current={0} className="w-1/2">
          <Step title="Finished" />
          <Step title="In Progress" />
        </Steps>
      </div>
      <div className="h-full flex items-center justify-center font-semibold">
        <div className="bg-white w-full lg:w-10/12 rounded-md shadow-md text-black">
          <Form
            labelCol={{ span: 3 }}
            form={form}
            layout="horizontal"
            initialValues={initialValues}
            validateMessages={validateMessages}
          >
            <div className="px-6 pt-6">
              <h1 className="mb-5 text-center font-bold text-4xl px-6 py-6">
                Tax Invoice
              </h1>
            </div>
            <div className="pl-6">
              <Form.Item
                name="invoice-no"
                label="Invoice No."
                className="font-medium"
                rules={[{ type: 'string' }, { required: true }]}
              >
                <Input className="form-control w-40 input-field" />
              </Form.Item>
              <Form.Item
                name="invoiceDate"
                label="Invoice Date"
                rules={[{ required: true }]}
                className="font-medium"
              >
                <DatePicker className="form-control w-40 input-field" />
              </Form.Item>
              <Form.Item name="dcNo" label="DC No" className="font-medium">
                <Input className="form-control w-40 input-field" />
              </Form.Item>
            </div>
            <div className="px-6 flex gap-3">
              <div className="w-1/2 bg-blue-50 rounded-md p-4">
                <h2 className="font-bold m-3">Billed By</h2>
                <div className="p-3 bg-white mt-5 rounded-md leading-8">
                  <div className="flex justify-between">
                    <h3>Your Business Details</h3>
                    <div className="flex items-center gap-1 text-blue-500 cursor-pointer">
                      <HiOutlinePencilAlt />
                      <span>Edit</span>
                    </div>
                  </div>
                  <div className="flex">
                    <h4 className="w-1/3">Business Name </h4>
                    <h4 className="w-3/5 font-semibold"> Sri Pranav Tex </h4>
                  </div>
                  <div className="flex">
                    <h4 className="w-1/3">Address </h4>
                    <h4 className="w-3/5 leading-5  font-semibold">
                      5/566, INDIRA NAGAR, PITCHAMPALAYAM PUDUR, TIRUPPUR,
                      Tiruppur, Tamil Nadu, India 641603
                    </h4>
                  </div>
                  <div className="flex">
                    <h4 className="w-1/3">Phone </h4>
                    <h4 className="w-3/5  font-semibold"> 9025422002 </h4>
                  </div>
                  <div className="flex">
                    <h4 className="w-1/3">GSTIN </h4>
                    <h4 className="w-3/5  font-semibold"> 33ABYSS4453P2ZA </h4>
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-blue-50 rounded-md p-4">
                <div className="flex items-center justify-evenly">
                  <h2 className="font-bold">Billed To</h2>
                  <Form.Item className="w-2/3">
                    <Select
                      showSearch
                      placeholder="Select a Customer"
                      optionFilterProp="children"
                      onChange={(value) => {
                        console.log(JSON.stringify(value));
                        setSelectedClient(
                          customers.find((customer) => (customer._id = value))
                        );
                      }}
                      dropdownRender={(menu) => (
                        <>
                          {menu}
                          <Divider style={{ margin: '8px 0' }} />
                          <Space
                            style={{ padding: '0 8px 4px' }}
                            className="flex justify-center"
                          >
                            <Button appearance="primary">
                              Add New Customer
                            </Button>
                          </Space>
                        </>
                      )}
                    >
                      {customers.map((customer) => {
                        return (
                          <Option key={customer._id}>{customer.name}</Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </div>
                <div className="p-3 bg-white rounded-md leading-8">
                  {selectedClient ? (
                    <div>
                      <div className="flex justify-between">
                        <h3>Customers Business Details</h3>
                        <div className="flex items-center gap-1 text-blue-500 cursor-pointer">
                          <HiOutlinePencilAlt />
                          <span>Edit</span>
                        </div>
                      </div>
                      <div className="flex">
                        <h4 className="w-1/3">Business Name </h4>
                        <h4 className="w-3/5  font-semibold">
                          {selectedClient.name}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="w-1/3">Address </h4>
                        <h4 className="w-3/5 leading-5  font-semibold">
                          {selectedClient.address.street +
                            (selectedClient.address.street ? ', ' : '') +
                            selectedClient.address.city +
                            (selectedClient.address.pinCode ? ' - ' : '') +
                            selectedClient.address.pinCode}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="w-1/3">Phone No</h4>
                        <h4 className="w-3/5  font-semibold">
                          {selectedClient.phoneNo}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="w-1/3">GSTIN </h4>
                        <h4 className="w-3/5  font-semibold">
                          {selectedClient.gstIN}
                        </h4>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center h-56">
                      <div className="text-center">
                        <Avatar
                          size={64}
                          style={{ backgroundColor: '#b6c7f671' }}
                          icon={<UserOutlined />}
                        />
                        <div>Select a Customer</div>
                        <span>or</span>
                        <div>
                          <Button appearance="primary">Add New Customer</Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="px-6">
              <InvoiceTable />
            </div>
            <div className="px-6 pb-6 flex justify-between">
              <div>
                <div>
                  <h3 className="font-extrabold">Total Amount (in words)</h3>
                  <h4>Eighteen Thousand Nine Hundred And Forty Only.</h4>
                </div>
                <div className="mt-8">
                  <h3 className="font-extrabold">Terms And Conditions</h3>
                  <div>
                    {terms.length
                      ? terms.map((term, index) => {
                          return (
                            <div key={index} className="flex items-center">
                              <span className="w-2">{index + 1}.</span>
                              <Input
                                className="input-field ml-2 focus:shadow-none"
                                style={{ width: '500px' }}
                                defaultValue={term}
                                onChange={(e) => {
                                  const terms_array = [...terms];
                                  terms_array[index] = e.target.value;
                                  setTerms(terms_array);
                                }}
                              />
                              <span
                                className="pt-3"
                                onClick={() => removeTerm(index)}
                              >
                                <IoClose />
                              </span>
                            </div>
                          );
                        })
                      : ''}
                  </div>
                  <Button
                    marginY={8}
                    marginRight={12}
                    iconBefore={<PlusCircleOutlined />}
                    appearance="primary"
                    onClick={() => setTerms([...terms, ''])}
                  >
                    Add New Term
                  </Button>
                </div>
              </div>
              <div className="leading-8 w-72 text-base">
                <div className="flex justify-between">
                  <span>Taxable Amount : </span>
                  <span>&#8377; 17903.20</span>
                </div>
                <div className="flex justify-between">
                  <span>CGST @ 2.50% : </span>
                  <span>&#8377; 514.17</span>
                </div>
                <div className="flex justify-between">
                  <span>SGST @ 2.50% : </span>
                  <span>&#8377; 514.17</span>
                </div>
                <div className="flex justify-between">
                  <span>Rounded Off : </span>
                  <span>&#8377; 12.28</span>
                </div>
                <div className="flex justify-between text-lg font-extrabold mt-3">
                  <span>Total : </span>
                  <span>&#8377; 18,940.00</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-6">
              <div className="w-1/3 leading-8">
                <h3 className="font-bold">Bank Details</h3>
                <div>
                  <div className="flex justify-between text-left">
                    <span>Account No : </span>
                    {selectedInput !== 'accountNo' ? (
                      <span
                        className="w-56 border-0 border-b border-dashed border-sky-500 pl-2"
                        onClick={() => {
                          setSelectedInput('accountNo');
                        }}
                      >
                        {bankDetails.accountNo ? (
                          <span>{bankDetails.accountNo}</span>
                        ) : (
                          <span className="text-gray-300">
                            Eg: 123456789012
                          </span>
                        )}
                      </span>
                    ) : (
                      <Input
                        allowClear
                        autoFocus
                        className="input-field"
                        style={{ width: '224px' }}
                        defaultValue={bankDetails.accountNo}
                        onPressEnter={() => setSelectedInput(null)}
                        onBlur={() => setSelectedInput(null)}
                        onChange={(e) =>
                          setBankDetails({
                            ...bankDetails,
                            accountNo: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>IFSC : </span>
                    {selectedInput !== 'ifsc' ? (
                      <span
                        className="w-56 border-0 border-b border-dashed border-sky-500 pl-2"
                        onClick={() => {
                          setSelectedInput('ifsc');
                        }}
                      >
                        {bankDetails.ifsc ? (
                          <span>{bankDetails.ifsc}</span>
                        ) : (
                          <span className="text-gray-300">Eg: SBIN0034246</span>
                        )}
                      </span>
                    ) : (
                      <Input
                        allowClear
                        autoFocus
                        className="input-field"
                        style={{ width: '224px' }}
                        defaultValue={bankDetails.ifsc}
                        onPressEnter={() => setSelectedInput(null)}
                        onBlur={() => setSelectedInput(null)}
                        onChange={(e) =>
                          setBankDetails({
                            ...bankDetails,
                            ifsc: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>Bank : </span>
                    {selectedInput !== 'bank' ? (
                      <span
                        className="w-56 border-0 border-b border-dashed border-sky-500 pl-2"
                        onClick={() => {
                          setSelectedInput('bank');
                        }}
                      >
                        {bankDetails.bank ? (
                          <span>{bankDetails.bank}</span>
                        ) : (
                          <span className="text-gray-300">
                            Eg: State Bank of India
                          </span>
                        )}
                      </span>
                    ) : (
                      <Input
                        allowClear
                        autoFocus
                        className="input-field"
                        style={{ width: '224px' }}
                        defaultValue={bankDetails.bank}
                        onPressEnter={() => setSelectedInput(null)}
                        onBlur={() => setSelectedInput(null)}
                        onChange={(e) =>
                          setBankDetails({
                            ...bankDetails,
                            bank: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span>Branch : </span>
                    {selectedInput !== 'branch' ? (
                      <span
                        className="w-56 border-0 border-b border-dashed border-sky-500 pl-2"
                        onClick={() => {
                          setSelectedInput('branch');
                        }}
                      >
                        {bankDetails.branch ? (
                          <span>{bankDetails.branch}</span>
                        ) : (
                          <span className="text-gray-300">Eg: Tiruppur</span>
                        )}
                      </span>
                    ) : (
                      <Input
                        allowClear
                        autoFocus
                        className="input-field"
                        style={{ width: '224px' }}
                        defaultValue={bankDetails.branch}
                        onPressEnter={() => setSelectedInput(null)}
                        onBlur={() => setSelectedInput(null)}
                        onChange={(e) =>
                          setBankDetails({
                            ...bankDetails,
                            branch: e.target.value,
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
