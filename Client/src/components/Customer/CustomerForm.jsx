import { Button } from 'evergreen-ui';
import { useForm } from 'react-hook-form';
import { Form, Input, Select } from 'antd';
import { states } from '../../constants/States';
import { countries } from '../../constants/Countries';

function CustomerForm() {
  const { Option } = Select;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-full flex items-center justify-center font-semibold">
      <div className="bg-white w-full lg:w-10/12  px-6 py-6 rounded-md shadow-md text-black">
        <Form layout="vertical" onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-4">
            <Form.Item label="Customer Name" className="md:w-1/2" required>
              <Input
                className="form-control"
                required
                {...register('name', { required: true })}
              />
            </Form.Item>
            {errors.name && <p>Customer name is required.</p>}
            <Form.Item label="Alias (Nick Name)" className="md:w-1/2">
              <Input className="form-control" {...register('nickName')} />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item label="Email" className="md:w-1/2">
              <Input className="form-control" {...register('emailId')} />
            </Form.Item>
            <Form.Item label="Phone Number" className="md:w-1/2">
              <Input className="form-control" {...register('phoneNo')} />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item label="Country" className="md:w-1/2">
              <Select showSearch defaultValue="IN">
                {countries.map((country) => {
                  return <Option key={country.value}>{country.name}</Option>;
                })}
              </Select>
            </Form.Item>
            {errors.country && <p>Country is required.</p>}
            <Form.Item label="GSTIN" className="md:w-1/2">
              <Input className="form-control" {...register('gstIN')} />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item label="Street" className="md:w-1/2">
              <Input className="form-control" {...register('street')} />
            </Form.Item>
            <Form.Item label="City" className="md:w-1/2">
              <Input className="form-control" {...register('city')} />
            </Form.Item>
          </div>

          <div className="md:flex gap-4">
            <Form.Item label="State" className="md:w-1/2">
              <Select showSearch defaultValue="TN">
                {states.map((state) => {
                  return <Option key={state.value}>{state.name}</Option>;
                })}
              </Select>
            </Form.Item>
            {errors.state && <p>State is required.</p>}
            <Form.Item label="Postal Code" className="md:w-1/2">
              <Input className="form-control" {...register('pinCode')} />
            </Form.Item>
          </div>

          <Button>Save</Button>
        </Form>
      </div>
    </div>
  );
}

export default CustomerForm;
